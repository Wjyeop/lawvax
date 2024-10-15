import { useState, useEffect } from "react";

import { getPeopleCount } from "../../../api/admin";
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
  peopleList: PeopleItem[];
};

export default function PeopleController({
  selectPostion,
  handlePosition,
  peopleList,
}: Props) {
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
    </section>
  );
}
