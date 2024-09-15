import { useState } from "react";
import icons from "../../assets/images/icons/icons";

const LandingSearchDetailPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(법인소식.length / 7);
  const currentItems = 법인소식.slice((currentPage - 1) * 7, currentPage * 7);

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleFirstClick = () => {
    setCurrentPage(1);
  };

  const handleLastClick = () => {
    setCurrentPage(totalPages);
  };

  return (
    <div className="landing-search-detail-page">
      <div className="process">
        <img src={icons.home} alt="" />
        <span>HOME</span>
        <span className="search">{">"}</span>
        <span className="search">형사</span>
        <span className="search">{">"}</span>
        <span className="search">법인소식</span>
      </div>
      <div className="sub-title">
        <h1>법인소식</h1>
      </div>
      <div className="content-wrap">
        {currentItems.slice(0, 7).map((news, index) => (
          <div key={index} className="news-item">
            <h3 className="title">{news.title}</h3>
            <p className="content">{news.content}</p>
            <p className="date">{news.date}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <img
          src={icons.left02}
          alt="First Page"
          onClick={handleFirstClick}
          style={{ cursor: currentPage > 1 ? "pointer" : "not-allowed" }}
        />
        <img
          src={icons.left}
          alt=""
          onClick={handlePrevClick}
          style={{ cursor: currentPage > 1 ? "pointer" : "not-allowed" }}
        />
        {Array.from({ length: totalPages }, (_, index) => (
          <span key={index}>
            <span
              className={`page-number ${currentPage === index + 1 ? "active" : ""}`}
              onClick={() => handleClick(index + 1)}
            >
              {index + 1}
            </span>
            {index < totalPages - 1 && <span className="separator">|</span>}
          </span>
        ))}
        <img
          src={icons.right}
          alt=""
          onClick={handleNextClick}
          style={{
            cursor: currentPage < totalPages ? "pointer" : "not-allowed",
          }}
        />
        <img
          src={icons.right02}
          alt="Last Page"
          onClick={handleLastClick}
          style={{
            cursor: currentPage < totalPages ? "pointer" : "not-allowed",
          }}
        />
      </div>
    </div>
  );
};

export default LandingSearchDetailPage;

const 법인소식 = [
  {
    title:
      "[디지털타임스] 가상자산 이용자보호법 시행, 민·형사 법적분쟁도 본격화되나",
    content:
      "2024.7.28. 디지털타임스에 법무법인(유) 광장 윤종수 변호사의 멘트가 실렸습니다. 가상자산 이용자보호법 시행과 함께 당국의 감독·제재 권한이 강화되면서 향후 관련 법적 분쟁도 급증할 전망인 가운데, 광장 윤종수 가산자산전담팀 팀장은 이용자보호법 관련 규정의 해석과 실제 적용 범위에 대한 자문 등 수요가 있었다며 법 시행으로 그에 관한 대비와 실제 분쟁 발생으로 관련 수요가 늘어날 것이라고 전망했습니다. ",
    date: "2024.07.28",
  },
  {
    title:
      "[아시아투데이] [로펌 zip중탐구] 국내 첫 가상자산법 시행…분주한 6대 로펌",
    content:
      "2024.7.28. 디지털타임스에 법무법인(유) 광장 윤종수 변호사의 멘트가 실렸습니다. 가상자산 이용자보호법 시행과 함께 당국의 감독·제재 권한이 강화되면서 향후 관련 법적 분쟁도 급증할 전망인 가운데, 광장 윤종수 가산자산전담팀 팀장은 이용자보호법 관련 규정의 해석과 실제 적용 범위에 대한 자문 등 수요가 있었다며 법 시행으로 그에 관한 대비와 실제 분쟁 발생으로 관련 수요가 늘어날 것이라고 전망했습니다. ",
    date: "2024.07.28",
  },
  {
    title: "[한국경제] 법무법인 광장, 박양호 전 법무부 법무과장 영입",
    content:
      "2024.7.28. 디지털타임스에 법무법인(유) 광장 윤종수 변호사의 멘트가 실렸습니다. 가상자산 이용자보호법 시행과 함께 당국의 감독·제재 권한이 강화되면서 향후 관련 법적 분쟁도 급증할 전망인 가운데, 광장 윤종수 가산자산전담팀 팀장은 이용자보호법 관련 규정의 해석과 실제 적용 범위에 대한 자문 등 수요가 있었다며 법 시행으로 그에 관한 대비와 실제 분쟁 발생으로 관련 수요가 늘어날 것이라고 전망했습니다. ",
    date: "2024.07.28",
  },
  {
    title:
      "[디지털타임스] 가상자산 이용자보호법 시행, 민·형사 법적분쟁도 본격화되나",
    content:
      "2024.7.28. 디지털타임스에 법무법인(유) 광장 윤종수 변호사의 멘트가 실렸습니다. 가상자산 이용자보호법 시행과 함께 당국의 감독·제재 권한이 강화되면서 향후 관련 법적 분쟁도 급증할 전망인 가운데, 광장 윤종수 가산자산전담팀 팀장은 이용자보호법 관련 규정의 해석과 실제 적용 범위에 대한 자문 등 수요가 있었다며 법 시행으로 그에 관한 대비와 실제 분쟁 발생으로 관련 수요가 늘어날 것이라고 전망했습니다. ",
    date: "2024.07.28",
  },
  {
    title:
      "[아시아투데이] [로펌 zip중탐구] 국내 첫 가상자산법 시행…분주한 6대 로펌",
    content:
      "2024.7.28. 디지털타임스에 법무법인(유) 광장 윤종수 변호사의 멘트가 실렸습니다. 가상자산 이용자보호법 시행과 함께 당국의 감독·제재 권한이 강화되면서 향후 관련 법적 분쟁도 급증할 전망인 가운데, 광장 윤종수 가산자산전담팀 팀장은 이용자보호법 관련 규정의 해석과 실제 적용 범위에 대한 자문 등 수요가 있었다며 법 시행으로 그에 관한 대비와 실제 분쟁 발생으로 관련 수요가 늘어날 것이라고 전망했습니다. ",
    date: "2024.07.28",
  },
  {
    title: "[한국경제] 법무법인 광장, 박양호 전 법무부 법무과장 영입",
    content:
      "2024.7.28. 디지털타임스에 법무법인(유) 광장 윤종수 변호사의 멘트가 실렸습니다. 가상자산 이용자보호법 시행과 함께 당국의 감독·제재 권한이 강화되면서 향후 관련 법적 분쟁도 급증할 전망인 가운데, 광장 윤종수 가산자산전담팀 팀장은 이용자보호법 관련 규정의 해석과 실제 적용 범위에 대한 자문 등 수요가 있었다며 법 시행으로 그에 관한 대비와 실제 분쟁 발생으로 관련 수요가 늘어날 것이라고 전망했습니다. ",
    date: "2024.07.28",
  },
  {
    title:
      "[디지털타임스] 가상자산 이용자보호법 시행, 민·형사 법적분쟁도 본격화되나",
    content:
      "2024.7.28. 디지털타임스에 법무법인(유) 광장 윤종수 변호사의 멘트가 실렸습니다. 가상자산 이용자보호법 시행과 함께 당국의 감독·제재 권한이 강화되면서 향후 관련 법적 분쟁도 급증할 전망인 가운데, 광장 윤종수 가산자산전담팀 팀장은 이용자보호법 관련 규정의 해석과 실제 적용 범위에 대한 자문 등 수요가 있었다며 법 시행으로 그에 관한 대비와 실제 분쟁 발생으로 관련 수요가 늘어날 것이라고 전망했습니다. ",
    date: "2024.07.28",
  },
  {
    title:
      "[아시아투데이] [로펌 zip중탐구] 국내 첫 가상자산법 시행…분주한 6대 로펌",
    content:
      "2024.7.28. 디지털타임스에 법무법인(유) 광장 윤종수 변호사의 멘트가 실렸습니다. 가상자산 이용자보호법 시행과 함께 당국의 감독·제재 권한이 강화되면서 향후 관련 법적 분쟁도 급증할 전망인 가운데, 광장 윤종수 가산자산전담팀 팀장은 이용자보호법 관련 규정의 해석과 실제 적용 범위에 대한 자문 등 수요가 있었다며 법 시행으로 그에 관한 대비와 실제 분쟁 발생으로 관련 수요가 늘어날 것이라고 전망했습니다. ",
    date: "2024.07.28",
  },
  {
    title: "[한국경제] 법무법인 광장, 박양호 전 법무부 법무과장 영입",
    content:
      "2024.7.28. 디지털타임스에 법무법인(유) 광장 윤종수 변호사의 멘트가 실렸습니다. 가상자산 이용자보호법 시행과 함께 당국의 감독·제재 권한이 강화되면서 향후 관련 법적 분쟁도 급증할 전망인 가운데, 광장 윤종수 가산자산전담팀 팀장은 이용자보호법 관련 규정의 해석과 실제 적용 범위에 대한 자문 등 수요가 있었다며 법 시행으로 그에 관한 대비와 실제 분쟁 발생으로 관련 수요가 늘어날 것이라고 전망했습니다. ",
    date: "2024.07.28",
  },
];
