import { useEffect } from "react";

import { getPeopleList, deletePeople } from "../../../api/admin";

type Props = {
  selectPostion: string;
  peopleList: PeopleItem[];
  setPeopleList: (item: PeopleItem) => void;
};

interface PeopleItem {
  email: string;
  id: number;
  isVisible: boolean;
  mainImg: string;
  name: string;
  position: string;
}

export default function PeopleTable({
  selectPostion,
  peopleList,
  setPeopleList,
}: Props) {
  useEffect(() => {
    (async () => {
      const { data } = await getPeopleList(selectPostion);

      setPeopleList(data || []);
    })();
  }, [selectPostion]);

  const onClickDeleteButton = async (id: number) => {
    if (window.confirm("삭제하시겠습니까?")) {
      await deletePeople(id);
      const { data } = await getPeopleList(selectPostion);

      setPeopleList(data || []);
    } else {
      console.log("삭제 안함!");
    }
  };

  return (
    <table className="admin-people-table">
      <thead>
        <tr className="admin-table-head">
          <th>번호</th>
          <th>이미지</th>
          <th>직책</th>
          <th>이름</th>
          <th>이메일</th>
          <th></th>
          <th>공개유무</th>
          <th>수정</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        {peopleList.map((item: PeopleItem, idx: number) => (
          <tr key={item.name + idx} className="admin-table-body">
            <td>{idx + 1}</td>
            <td className="admin-table-imageWrap">
              <img
                src={item.mainImg}
                alt="profile"
                className="admin-table-img"
              />
            </td>
            <td>{item.position}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td></td>
            <td>{item.isVisible ? "공개" : "비공개"}</td>
            <td>
              <button className="admin-table-edit">수정</button>
            </td>
            <td>
              <button
                onClick={() => onClickDeleteButton(item.id)}
                className="admin-table-del"
              >
                삭제
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
