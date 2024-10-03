import up from "../../assets/images/icons/up.png";
import down from "../../assets/images/icons/down.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { getMembersList } from "../../api/getMembersList";
import { useMembersWorkFieldStore } from "../../stores/membersWorkFieldStore";
import { useMemberStore } from "../../stores/memberStore";

const Lawyersection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const searchTerm = useMemberStore((state) => state.searchTerm);
  const selectedWorkField = useMembersWorkFieldStore(
    (state) => state.selectedWorkField
  );
  const [selectedLawyerIndex, setSelectedLawyerIndex] = useState<number | null>(
    0
  );
  const [showAll, setShowAll] = useState(false);
  const [lawyerList, setLawyerList] = useState([
    {
      id: 0,
      mainImg: "",
      nameKo: "",
      nameCh: "",
      position: "",
      firstMainCareer: "",
      secondMainCareer: "",
    },
  ]);

  const visibleLawyers = showAll
    ? lawyerList
    : isMobile
      ? lawyerList.slice(0, 4) // 모바일에서는 4개만 표시
      : lawyerList.slice(0, 6); // 데스크탑에서는 6개만 표시

  useEffect(() => {
    const fetchLawyerList = async () => {
      try {
        const data = await getMembersList(true, searchTerm, selectedWorkField);
        setLawyerList(data);
      } catch (error) {
        console.error("변호사 조회 중 에러 발생:", error);
      }
    };

    fetchLawyerList();
  }, [selectedWorkField, searchTerm]);

  const handleClick = (index: number) => {
    setSelectedLawyerIndex(index);
  };

  const handleToggle = () => {
    setShowAll((prevState) => !prevState);
  };

  return (
    <section className="lawyer-section">
      <div className="grid-wrap">
        {visibleLawyers.map((lawyer, index) => (
          <div
            key={index}
            className={`lawyer-item ${selectedLawyerIndex === index ? "selected" : ""}`}
            onClick={() => handleClick(index)}
          >
            <Link to={`/members/profile/${lawyer.id}`}>
              <img src={lawyer.mainImg} alt="" />
            </Link>
            <div className="text-wrap">
              <p className="p1">
                <span>{lawyer.nameKo}</span>
                <span> {lawyer.nameCh}</span>
              </p>
              <p className="p2">{lawyer.position}</p>
              <p className="p3">{lawyer.firstMainCareer}</p>
              <p className="p3">{lawyer.secondMainCareer}</p>
            </div>
          </div>
        ))}
      </div>
      {lawyerList.length > 6 && (
        <button className="toggle-button" onClick={handleToggle}>
          {showAll ? "접기" : "더보기"}
          {showAll ? <img src={up} alt="" /> : <img src={down} alt="" />}
        </button>
      )}
    </section>
  );
};

export default Lawyersection;

// interface Career {
//   startYear: string;
//   endYear: string;
//   content: string;
// }

// interface Education {
//   startYear: string;
//   endYear: string;
//   content: string;
// }

// interface HandleCase {
//   startYear: string;
//   endYear: string;
//   content: string;
// }

// interface License {
//   content: string;
// }

// interface WorkField {
//   workField: string;
// }
// interface MemberItem {
//   id: number;
//   nameKo: string;
//   nameEn: string;
//   nameCh: string;
//   position: string;
//   email: string;
//   mainImg: string;
//   firstMainCareer: string;
//   secondMainCareer: string;
//   workNumber: string;
//   faxNumber: string;
//   introduction: string;
//   language: string;
//   careers: Career[];
//   educations: Education[];
//   handleCases: HandleCase[];
//   licenses: License[];
//   workFields: WorkField[];
// }
