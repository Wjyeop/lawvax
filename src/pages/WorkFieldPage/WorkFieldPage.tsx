import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/images/img";
import { getWorkField } from "../../api/getWorkField";

const WorkFieldPage = () => {
  const [workFieldList, setWorkFieldList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorkField = async () => {
      try {
        const data = await getWorkField();
        setWorkFieldList(data);
      } catch (error) {
        console.error("업무분야 조회 중 에러 발생:", error);
      }
    };

    fetchWorkField();
  }, []);

  const handleFieldClick = (field: string) => {
    navigate(`/workfield/detail/${field}`);
  };

  return (
    <div className="services-page">
      <div className="process">
        <img src={img.icons.home} alt="home" />
        <span>HOME</span>
        <span>{">"}</span>
        <span>업무분야</span>
      </div>
      <div className="title">
        <p style={{ fontSize: "2em" }}>
          <span className="blue" style={{ fontSize: "2em" }}>
            F
          </span>
          IELD
          <br />
          OF WORK
        </p>
      </div>
      <div className="content-wrap">
        {workFieldList.map((item: any, index: number) => (
          <div
            className="content01"
            key={index}
            onClick={() => handleFieldClick(item)}
          >
            <div className="title">
              <span>{item}</span>
              <img className="fold-img" src={img.icons.arrowGray} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkFieldPage;
