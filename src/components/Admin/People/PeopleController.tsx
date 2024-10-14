import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getPeopleCount, getPeopleList } from "../../../api/admin";
import Plus from "../../../assets/images/ic_plus.svg";
import Shake from "../../../assets/images/ic_admin_shake.svg";
import Search from "../../../assets/images/ic_admin_search.svg";

interface PeopleItem {
  email: string;
  id: number;
  isVisible: boolean;
  mainImg: string;
  name: string;
  position: string;
}

type Props = {
  selectPostion: string;
  handlePosition: (position: string) => void;
  setPeopleList: (item: PeopleItem[]) => void;
  peopleList: PeopleItem[];
  handleEditMode: () => void;
};

export default function PeopleController({
  selectPostion,
  handlePosition,
  setPeopleList,
  peopleList,
  handleEditMode,
}: Props) {
  const [inputValueTemp, setInputValueTemp] = useState("");
  const [positionData, setPositionData] = useState<any>({
    전체: 0,
    대표변호사: 0,
    파트너변호사: 0,
    변호사: 0,
    고문: 0,
  });

  useEffect(() => {
    (async () => {
      const { data } = await getPeopleCount();

      setPositionData(data || []);
    })();
  }, [peopleList]);

  const handleSearch = async (e: any) => {
    if (e.key === "Enter") {
      if (inputValueTemp.trim() === "") {
        const { data } = await getPeopleList("전체");
        return setPeopleList(data);
      }

      const filtered = peopleList.filter(
        (item) => item.name === inputValueTemp
      );

      return setPeopleList(filtered);
    }
  };

  return (
    <section>
      <h2 className="admin-common-title">구성원 관리</h2>
      <ul className="admin-people-position-wrapper">
        {Object.entries(positionData).map(([name, count]: any) => (
          <li
            key={`people-controller-${name}`}
            onClick={() => handlePosition(name)}
            className={
              selectPostion !== name
                ? "admin-people-item"
                : "admin-people-item-active"
            }
          >
            <span className="admin-postion-text">{name}</span>
            <span className="admin-position-num">
              {count === 0 ? "-" : count}명
            </span>
          </li>
        ))}
      </ul>
      <div className="admin-people-control">
        <div className="admin-control-btnwrap">
          <Link to="/admin/people-register" className="admin-control-btn">
            <img src={Plus} alt="플러스 아이콘" />
            <span>등록하기</span>
          </Link>
          <button onClick={handleEditMode} className="admin-control-btn">
            <img src={Shake} alt="바꾸기 아이콘" />
            <span>순서 바꾸기</span>
          </button>
          <button className="admin-control-btn">적용하기</button>
        </div>
        <div className="admin-people-searchwrap">
          <img src={Search} alt="돋보기 아이콘" />
          <input
            type="text"
            placeholder="Search"
            className="admin-people-searchbox"
            onChange={(e) => setInputValueTemp(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
      </div>
    </section>
  );
}
