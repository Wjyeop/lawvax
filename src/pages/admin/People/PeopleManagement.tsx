import { useState, useEffect } from "react";

import { getPeopleCount } from "../../../api/admin";
import PeopleController from "../../../components/Admin/PeopleController";
import PeopleTable from "../../../components/Admin/PeopleTable";
import { samplePeopleData } from "../../../const/samplePeopleData";

export default function PeopleManagement() {
  const [selectPostion, setSelectPostion] = useState("전체");

  useEffect(() => {
    (async () => {
      await getPeopleCount();
    })();
  }, []);

  const handlePosition = (postion: string) => {
    setSelectPostion(postion);
  };

  return (
    <section className="admin-common-container">
      <PeopleController
        samplePeopleData={samplePeopleData}
        selectPostion={selectPostion}
        handlePosition={handlePosition}
      />
      <PeopleTable />
    </section>
  );
}
