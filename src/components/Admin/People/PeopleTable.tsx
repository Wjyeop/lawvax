import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getPeopleList, deletePeople } from "../../../api/admin";

type Props = {
  selectPostion: string;
  peopleList: PeopleItem[];
  setPeopleList: (item: PeopleItem) => void;
  handleEditMode: () => void;
  isEditMode: boolean;
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
  handleEditMode,
  isEditMode,
}: Props) {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [reorderedList, setReorderedList] = useState<any>(peopleList);

  useEffect(() => {
    (async () => {
      const { data } = await getPeopleList(selectPostion);

      setPeopleList(data || []);
      setReorderedList(data || []);
      console.log(data);
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

  const handleDragStart = (
    e: React.DragEvent<HTMLTableRowElement>,
    index: number
  ) => {
    setDraggedIndex(index);

    const emptyImage = new Image();
    e.dataTransfer.setDragImage(emptyImage, 0, 0);
  };

  const handleDragEnter = (index: number) => {
    if (draggedIndex === null || draggedIndex === index) return;
    const updatedList = [...reorderedList];
    const [draggedItem] = updatedList.splice(draggedIndex, 1);
    updatedList.splice(index, 0, draggedItem);
    setDraggedIndex(index);
    setReorderedList(updatedList);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const saveOrder = () => {
    setPeopleList(reorderedList);
    handleEditMode();
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
        {reorderedList.map((item: PeopleItem, idx: number) => (
          <tr
            key={item.id}
            draggable={isEditMode}
            onDragStart={(e) => handleDragStart(e, idx)}
            onDragEnter={() => handleDragEnter(idx)}
            onDragEnd={handleDragEnd}
            className="admin-table-body"
            style={{
              opacity: draggedIndex === idx ? 0.5 : 1,
              cursor: isEditMode ? "move" : "default",
            }}
          >
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
              <Link to={`/admin/people-edit/${item.id}`}>
                <button className="admin-table-edit">수정</button>
              </Link>
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
