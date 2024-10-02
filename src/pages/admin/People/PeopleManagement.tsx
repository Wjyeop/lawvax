import { useState } from "react";

import PeopleController from "../../../components/Admin/PeopleController";
import PeopleTable from "../../../components/Admin/PeopleTable";
import { samplePeopleData } from "../../../const/samplePeopleData";

export default function PeopleManagement() {
  const [selectPostion, setSelectPostion] = useState("전체");

  const handlePosition = (postion: string) => {
    setSelectPostion(postion);
  };

  return (
    <section className="admin-people-container">
      <PeopleController
        samplePeopleData={samplePeopleData}
        selectPostion={selectPostion}
        handlePosition={handlePosition}
      />
      <PeopleTable />
    </section>
  );
}
