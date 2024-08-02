import home from "../../assets/images/icons/home.png";
import lawyerImage from "../../assets/images/lawyer1.png";

const MemberProfilePage = () => {
  return (
    <div className="member-profile-page">
      <div className="title-section">
        <div className="process">
          <img src={home} alt="" />
          <span>HOME</span>
          <span>{">"}</span>
          <span>구성원</span>
          <span className="search">{">"}</span>
          <span className="search">인물검색</span>
        </div>
      </div>
      <div className="profile-main">
        <div className="content-wrap">
          <div className="text-wrap">
            <p className="job">변호사</p>
            <p className="name">
              유성열<span>(柳成烈)</span>
            </p>
            <p className="phone">
              <span>T</span> 02-583-6300
            </p>
            <p className="email">
              <span>E</span> ysl@lawvax.co.kr
            </p>
          </div>
          <div className="img-wrap">
            <img src={lawyerImage} alt="" />
          </div>
        </div>
        <p className="ment">
          검찰 근무 및 변호사 활동 중 공직자 비리, 기업비리 관련 수사 및 변호
          활동을 주로 하였습니다.
          <br />
          최근에는 기업 강사 지원 업무를 수행하여 이 부분에 많은 경험과 역량이
          쌓였습니다. 앞으로 법무법인
          <br />
          로백스의 다른 변호사님들과 협업하여 보다 적극적으로 규모있는 활동을
          하겠습니다.
        </p>
      </div>
      <div className="fold-section">
        <div className="education">
          <div className="title">
            <p>학력</p>
          </div>
          <div className="content">
            <div>
              <span className="year">1988</span>

              <span>인천동산고등학교</span>
            </div>
            <div>
              <span className="year">1988</span>
              <span>인천동산고등학교</span>
            </div>
            <div>
              <span className="year">1988</span>
              <span>인천동산고등학교</span>
            </div>
          </div>
        </div>
        <div className="experience">
          <div className="title">
            <p>경력</p>
          </div>
          <div className="content">
            <div>
              <span className="year">1994-1999</span>

              <span>제36회 사법시험 합격</span>
            </div>
            <div>
              <span className="year">2000-2001</span>
              <span>인천지방검찰청 검사</span>
            </div>
            <div>
              <span className="year">2002-2003</span>
              <span>대구지방검찰청 포항지청 검사</span>
            </div>
          </div>
        </div>
        <div className="experience">
          <div className="title">
            <p>주요 업무분야</p>
          </div>
          <div className="content">
            <div>
              <span>기업감사 - 내부통제 지원센터</span>
            </div>
          </div>
        </div>
        <div className="certification">
          <div className="title">
            <p>자격/회원</p>
          </div>
          <div className="content">
            <div>
              <span>변호사, 대한민국(1999)</span>
            </div>
          </div>
        </div>
        <div className="experience">
          <div className="title">
            <p>언어</p>
          </div>
          <div className="content">
            <div>
              <span>한국어 및 영어</span>
            </div>
          </div>
        </div>
        <div className="experience">
          <div className="title">
            <p>주요 처리사례</p>
          </div>
          <div className="content">
            <div>
              <span>대형주류회사간 허위사실 유포 원인 손해배상청구 사건</span>
              <span>대형주류회사간 허위사실 유포 원인 손해배상청구 사건</span>
              <span>대형주류회사간 허위사실 유포 원인 손해배상청구 사건</span>
            </div>
            <div>
              <span className="year">2000-2001</span>
              <span>인천지방검찰청 검사</span>
            </div>
            <div>
              <span className="year">2002-2003</span>
              <span>대구지방검찰청 포항지청 검사</span>
            </div>
          </div>
        </div>
        <div className="experience">
          <div className="title">
            <p>저서/활동/기타</p>
          </div>
          <div className="content">
            <div>
              <span className="year">1994-1999</span>
              <span>제36회 사법시험 합격</span>
            </div>
            <div>
              <span className="year">2000-2001</span>
              <span>인천지방검찰청 검사</span>
            </div>
            <div>
              <span className="year">2002-2003</span>
              <span>대구지방검찰청 포항지청 검사</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberProfilePage;
