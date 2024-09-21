import { useState } from "react";
import { lawyerList } from "../../const/lawyerList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import img from "../../assets/images/img";
import { Link } from "react-router-dom";

const LandingSearchPage = () => {
  const [keyword, setKeyword] = useState("");
  const [showAll, setShowAll] = useState(false);
  const visibleLawyers = showAll ? lawyerList : lawyerList.slice(0, 8);

  const handleToggle = () => {
    setShowAll((prevState) => !prevState);
  };
  const handleBlur = () => {
    setTimeout(() => {}, 100);
  };

  const handleSearch = () => {
    console.log("검색된 키워드:", keyword);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="landing-search-page">
      <div className="process">
        <img src={img.icons.home} alt="" />
        <span>HOME</span>
        <span className="search">{">"}</span>
        <span className="search">형사</span>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="키워드를 입력해주세요."
          className="search-input"
          onBlur={handleBlur}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <img
          className="search-icon"
          src={img.icons.search}
          alt="search-icon"
          onClick={handleSearch}
        />
      </div>
      <div className="members-section">
        <div className="sub-title">
          <h1>구성원</h1>
        </div>
        <div className="members-wrap">
          {visibleLawyers.map((lawyer, index) => (
            <div key={index} className="lawyer-item">
              <img src={lawyer.img} alt="" />
              <div className="text-wrap">
                <p className="p1">
                  <span>{lawyer.name}</span>
                  <span> {lawyer.name2}</span>
                </p>
                <p className="p2">{lawyer.title}</p>
                {lawyer.mark.map((mark, index) => (
                  <p key={index} className="p3">
                    {mark}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="toggle-button" onClick={handleToggle}>
          {showAll ? "접기" : "더보기"}
          {showAll ? (
            <img src={img.icons.up} alt="" />
          ) : (
            <img src={img.icons.down} alt="" />
          )}
        </button>
      </div>
      <div className="service-section">
        <div className="sub-title">
          <h1>업무분야</h1>
        </div>
        <div className="content">
          <ul>
            <li>형사</li>
          </ul>
        </div>
      </div>
      <div className="news-section01">
        <div className="sub-title">
          <h1>
            법인소식
            <Link to="/landing-search-detail">
              <button className="more">
                <img src={img.more} alt="" />
              </button>
            </Link>
          </h1>
        </div>
        <div className="content">
          {법인소식.map((news, index) => (
            <div key={index} className="news-item">
              <h3 className="title">{news.title}</h3>
              <p className="content">{news.content}</p>
              <p className="date">{news.date}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="news-section02">
        <div className="sub-title">
          <h1>
            언론보도
            <Link to="/landing-search-detail">
              <button className="more">
                <img src={img.more} alt="" />
              </button>
            </Link>
          </h1>
        </div>
        <div className="content">
          {언론보도.map((news, index) => (
            <div key={index} className="news-item">
              <h3 className="title">{news.title}</h3>
              <p className="content">{news.content}</p>
              <p className="date">{news.date}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="news-section03">
        <div className="sub-title">
          <h1>
            인재영입
            <Link to="/landing-search-detail">
              <button className="more">
                <img src={img.more} alt="" />
              </button>
            </Link>
          </h1>
        </div>
        <div className="content">
          {인재영입.map((news, index) => (
            <div key={index} className="news-item">
              <h3 className="title">{news.title}</h3>
              <p className="content">{news.content}</p>
              <p className="date">{news.date}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="newsletter-section">
        <div className="sub-title">
          <h1>뉴스레터</h1>
        </div>
        <div className="content">
          <div className="swiper-container">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              slidesPerView={4}
              spaceBetween={5}
              scrollbar={{ draggable: true }}
              slidesOffsetBefore={0}
              slidesOffsetAfter={0}
            >
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <SwiperSlide key={index}>
                    <div className="newsletter-content">
                      <div className="mark">
                        <span>회계 법률</span>
                      </div>
                      <div className="title">
                        <span>
                          '법률AI'거스를 수 없는 대세...변호사 대체 아닌
                          '협업'으로
                        </span>
                      </div>
                      <div className="bottom">
                        <span className="date">2024.07.01</span>
                        <Link to="/newsletter">
                          <span className="more">자세히 보기</span>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSearchPage;

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
];

const 언론보도 = [
  {
    title:
      "김상곤, 문호준, 김성민, 곽재우 변호사, 'ALB Korea Super 30 Lawyers' 선정",
    content:
      "2024.7.28. 디지털타임스에 법무법인(유) 광장 윤종수 변호사의 멘트가 실렸습니다. 가상자산 이용자보호법 시행과 함께 당국의 감독·제재 권한이 강화되면서 향후 관련 법적 분쟁도 급증할 전망인 가운데, 광장 윤종수 가산자산전담팀 팀장은 이용자보호법 관련 규정의 해석과 실제 적용 범위에 대한 자문 등 수요가 있었다며 법 시행으로 그에 관한 대비와 실제 분쟁 발생으로 관련 수요가 늘어날 것이라고 전망했습니다. ",
    date: "2024.07.28",
  },
  {
    title: "Chambers Asia 2024, 13개 분야 Band 1 선정",
    content:
      "2024.7.28. 디지털타임스에 법무법인(유) 광장 윤종수 변호사의 멘트가 실렸습니다. 가상자산 이용자보호법 시행과 함께 당국의 감독·제재 권한이 강화되면서 향후 관련 법적 분쟁도 급증할 전망인 가운데, 광장 윤종수 가산자산전담팀 팀장은 이용자보호법 관련 규정의 해석과 실제 적용 범위에 대한 자문 등 수요가 있었다며 법 시행으로 그에 관한 대비와 실제 분쟁 발생으로 관련 수요가 늘어날 것이라고 전망했습니다. ",
    date: "2024.07.28",
  },
  {
    title: "박재현 변호사, ALB 'Top 15 North Asia Litigators 2023' 선정",
    content:
      "2024.7.28. 디지털타임스에 법무법인(유) 광장 윤종수 변호사의 멘트가 실렸습니다. 가상자산 이용자보호법 시행과 함께 당국의 감독·제재 권한이 강화되면서 향후 관련 법적 분쟁도 급증할 전망인 가운데, 광장 윤종수 가산자산전담팀 팀장은 이용자보호법 관련 규정의 해석과 실제 적용 범위에 대한 자문 등 수요가 있었다며 법 시행으로 그에 관한 대비와 실제 분쟁 발생으로 관련 수요가 늘어날 것이라고 전망했습니다. ",
    date: "2024.07.28",
  },
];

const 인재영입 = [
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
