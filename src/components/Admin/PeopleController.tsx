import { useState, useEffect } from "react";

import Plus from "../../assets/images/ic_plus.svg";
import Shake from "../../assets/images/ic_admin_shake.svg";
import Search from "../../assets/images/ic_admin_search.svg";

type Props = {
  samplePeopleData: any;
  selectPostion: string;
  handlePosition: (position: string) => void;
};

export default function PeopleController({
  samplePeopleData,
  selectPostion,
  handlePosition,
}: Props) {
  const [positionData, setPositionData] = useState<any>({
    전체: 0,
    "대표 변호사": 0,
    "파트너 변호사": 0,
    변호사: 0,
    고문: 0,
  });

  useEffect(() => {
    const data = samplePeopleData.map((data: any) => data.position);
    const copyData = { ...positionData };
    data.forEach((position: string) => {
      copyData[position] += 1;
    });
    copyData["전체"] = data.length;

    setPositionData(copyData);
  }, []);
  return (
    <section>
      <h2 className="admin-people-title">구성원 관리</h2>
      <ul className="admin-people-position-wrapper">
        {Object.entries(positionData).map(([name, count]: any) => (
          <li
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
          <button className="admin-control-btn">
            <img src={Plus} alt="플러스 아이콘" />
            <span>등록하기</span>
          </button>
          <button className="admin-control-btn">
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
          />
        </div>
      </div>
    </section>
  );
}
