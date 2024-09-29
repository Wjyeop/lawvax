import img from "../../assets/images/img";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { lawyerList } from "../../const/lawyerList";

const ServicesDetail = () => {
  const introduce = useRef(null);
  const workSectionRef = useRef(null);
  const membersSectionRef = useRef(null);
  const newsSectionRef = useRef(null);
  const [showAll, setShowAll] = useState(false);
  const visibleLawyers = showAll ? lawyerList : lawyerList.slice(0, 6); // 처음엔 6명만 표시

  const handleToggle = () => {
    setShowAll((prevState) => !prevState); // 상태 토글
  };

  const scrollToSection = (sectionRef: any) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="services-detail-page">
      <div className="process">
        <img src={img.icons.home} alt="home" />
        <span>HOME</span>
        <span>{">"}</span>
        <span>업무분야</span>
        <span>{">"}</span>
        <span>형사</span>
      </div>
      <div className="title">
        <p>
          <span className="blue">F</span>
          IELD
          <br />
          OF WORK
        </p>
      </div>
      <div className="sub-title" ref={introduce}>
        <p>형사</p>
        <img src={img.field01} alt="" />
      </div>
      <div className="content-wrap">
        <div className="content-left">
          <div className="sub-title-ment">
            <p>
              LawVax의 대표변호사들은 대기업 등의 분식회계, 횡령, 배임, 탈세,
              자본시장법위반 등 회계 비리와 관련된 수많은 사건의 수사나 변론에
              관여한 특별한 경력을 가지고 있습니다. 또한 LawVax는 우수한 역량을
              보유한회계·세무법인과도 업무 협력 체계를 구축해 놓고 있으며,
              앞으로 회계, 조세 분야 전문가를 추가로 영입할 계획입니다. 따라서
              LawVax는 회계, 횡령, 배임, 탈세 등 회계 관련 법률 리스크에 대하여
              누구보다도 탁월한 법적 조언을 드릴 수 있을 것입니다.
            </p>
          </div>
          <div className="main-field-of-work" ref={workSectionRef}>
            <h1>대표사례</h1>
            <ul>
              <li>
                2023
                <span>
                  건설소송 하자 관련 변론, IT 도급사건 지체상금 분쟁 관련 변론
                </span>
              </li>
              <li>
                2022-2024<span>외국환거래법 김치코인 프리미엄 사건 변론</span>
              </li>
              <li>
                2022-2024<span>태광그룹 감사업무 대행 및 고소·고발 대리</span>
              </li>
              <li>
                2022-2024
                <span>카카오의 SM 엔터테인먼트 인수 관련 사건 변론</span>
              </li>
              <li>
                2023-2024<span>태광그룹 감사업무 대행 및 고소·고발 대리</span>
              </li>
              <li>
                2022-2024
                <span>테라·루나 공동 창업자 신현성 전 티몬 의장 변론</span>
              </li>
              <li>
                2022-2024
                <span>
                  헬기추락과 관련된 방산업체의 업무상과실치사 사건 변론
                </span>
              </li>
              <li>
                2022-2024
                <span>
                  제일모직과 삼성물산 합병 등 사건 관련 이재용 회장 변론
                </span>
              </li>
            </ul>
            <p>- S전자 기술유출 혐의 사건 관련 피의자 대리</p>
            <p>- 쪼개기 후원금을 이유로 한 선거법 위반 혐의 사건 피의자 대리</p>
            <p>
              - OO 수협 조합장 재직 당시 본소 이전, 업무용부동산을 부적정 취득,
              자숙해삼판매사업과 관련한 특경(배임) 혐의 사건 피의자 대리
            </p>
            <p>
              - 가족 주식회사 대표이사 재직 당시, 특경(업무상횡령),
              특경법(국외재산유출), 업무방해, 공전자기록불실기재등 및 동행사
              혐의와 관련한 피의자 대리
            </p>
            <p>
              - 들러리 업체를 통한 입찰방해 및 뇌물공여 혐의 사건 피의자 대리
            </p>
            <p>
              - 타 법인에서 고소대리 후 불송치결정된 사건에 대한 이의신청   [①
              정통망법위반(명예훼손), ② 모욕, ③업무방해, ④무고]
            </p>
            <p>
              - 검찰에서 불기소 결정난 사건 항고 대리 (OO재개발조합총회의 의결을
              거치지 않고 OOO으로부터 580억 원을 차입한 것을 이유로 조합장 ooo을
              도시정비법 제45조 제1항 위반, 업무상배임 등으로 고소한 사건)
            </p>
            <p>
              - 회사 직원이 퇴사하면서 OOO 기업 회장 등을 대상으로 한 공갈미수,
              OOO 기업에 대한 업무상배임 사건 고소대리
            </p>
            <p>
              - 그 외 폭행, 특경(사기, 횡령, 배임), 음주운전 및 교특법 위반 사건
              피의자 대리 등
            </p>
          </div>
          <div className="members" ref={membersSectionRef}>
            <h1>주요 구성원</h1>
            <div className="members-grid">
              {visibleLawyers.map((lawyer, index) => (
                <div key={index}>
                  <img src={lawyer.img} alt="" />
                  <p className="p1">
                    <span>{lawyer.name}</span>
                    <span>({lawyer.name2})</span>
                  </p>
                  <p className="p2">{lawyer.title}</p>
                  {lawyer.mark.map((mark, index) => (
                    <p key={index} className="p3">
                      {mark}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="toggle-button-wrap">
            <button className="toggle-button" onClick={handleToggle}>
              {showAll ? "접기" : "더보기"}
              {showAll ? (
                <img src={img.icons.up} alt="" />
              ) : (
                <img src={img.icons.down} alt="" />
              )}
            </button>
          </div>

          <div className="recent-news" ref={newsSectionRef}>
            <h1>뉴스레터</h1>
            <div className="swiper-container">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                // navigation
                slidesPerView={4}
                spaceBetween={5}
                scrollbar={{ draggable: true }}
                slidesOffsetBefore={0}
                slidesOffsetAfter={0}
                breakpoints={{
                  300: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
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
        <div className="content-right">
          <p onClick={() => scrollToSection(introduce)}>01 소개</p>
          <p onClick={() => scrollToSection(workSectionRef)}>02 대표사례</p>
          <p onClick={() => scrollToSection(membersSectionRef)}>
            03 주요 구성원
          </p>
          <p onClick={() => scrollToSection(newsSectionRef)}>04 최근소식</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetail;
