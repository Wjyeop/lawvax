import { useState } from "react";

import PeopleController from "../../../components/Admin/PeopleController";
import PeopleTable from "../../../components/Admin/PeopleTable";

export default function PeopleManagement() {
  const [peopleList, setPeopleList] = useState<any>([]);
  const [selectPostion, setSelectPostion] = useState("전체");

  const handlePosition = (postion: string) => {
    setSelectPostion(postion);
  };

  return (
    <section className="admin-common-container">
      <PeopleController
        selectPostion={selectPostion}
        handlePosition={handlePosition}
        setPeopleList={setPeopleList}
        peopleList={peopleList}
      />
      <PeopleTable
        selectPostion={selectPostion}
        peopleList={peopleList}
        setPeopleList={setPeopleList}
      />
    </section>
  );
}
