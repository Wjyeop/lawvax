import { useState } from "react";

import PeopleController from "../../../components/Admin/People/PeopleController";
import PeopleTable from "../../../components/Admin/People/PeopleTable";

export default function PeopleManagement() {
  const [peopleList, setPeopleList] = useState<any>([]);
  const [selectPostion, setSelectPostion] = useState("전체");
  const [isEditMode, setIsEditMode] = useState(false);

  const handlePosition = (postion: string) => {
    setSelectPostion(postion);
  };

  const handleEditMode = () => {
    setIsEditMode((prev) => !prev);
  };

  return (
    <section className="admin-common-container">
      <PeopleController
        selectPostion={selectPostion}
        handlePosition={handlePosition}
        setPeopleList={setPeopleList}
        peopleList={peopleList}
        handleEditMode={handleEditMode}
      />
      <PeopleTable
        selectPostion={selectPostion}
        peopleList={peopleList}
        setPeopleList={setPeopleList}
        handleEditMode={handleEditMode}
        isEditMode={isEditMode}
      />
    </section>
  );
}
