import { useState } from "react";
import home from "../../assets/images/icons/home.png";
import up from "../../assets/images/icons/up02.png";
import down from "../../assets/images/icons/down02.png";
import up2 from "../../assets/images/icons/up.png";
import down2 from "../../assets/images/icons/down.png";
import work01 from "../../assets/images/work01.png";
import work02 from "../../assets/images/work02.png";

const ServicesPage = () => {
  const [isBusinessExpanded, setBusinessExpanded] = useState(false);
  const [isTechnologyExpanded, setTechnologyExpanded] = useState(false);
  const [isFinanceExpanded, setFinanceExpanded] = useState(false);

  const [isBusiness01Expanded, setBusiness01Expanded] = useState(false);
  const [isBusiness02Expanded, setBusiness02Expanded] = useState(false);
  const [isBusiness03Expanded, setBusiness03Expanded] = useState(false);
  const [isBusiness04Expanded, setBusiness04Expanded] = useState(false);
  const [isBusiness05Expanded, setBusiness05Expanded] = useState(false);
  const [isBusiness06Expanded, setBusiness06Expanded] = useState(false);

  const toggleExpand = (section: any) => {
    switch (section) {
      case "business":
        setBusinessExpanded(!isBusinessExpanded);
        break;
      case "finance":
        setFinanceExpanded(!isFinanceExpanded);
        break;
      case "technology":
        setTechnologyExpanded(!isTechnologyExpanded);
        break;
      default:
        break;
    }
  };

  const toggleBusinessDetailExpand = (section: any) => {
    switch (section) {
      case "business01":
        setBusiness01Expanded(!isBusiness01Expanded);
        break;
      case "business02":
        setBusiness02Expanded(!isBusiness02Expanded);
        break;
      case "business03":
        setBusiness03Expanded(!isBusiness03Expanded);
        break;
      case "business04":
        setBusiness04Expanded(!isBusiness04Expanded);
        break;
      case "business05":
        setBusiness05Expanded(!isBusiness05Expanded);
        break;
      case "business06":
        setBusiness06Expanded(!isBusiness06Expanded);
        break;
      default:
        break;
    }
  };

  return (
    <div className="services-page">
      <div className="process">
        <img src={home} alt="home" />
        <span>HOME</span>
        <span>{">"}</span>
        <span>업무분야</span>
      </div>
      <div className="title">
        <p style={{ fontSize: "2.5em" }}>
          <span className="blue" style={{ fontSize: "2em" }}>
            F
          </span>
          IELD
          <br />
          OF WORK
        </p>
      </div>
      <div className="content-wrap">
        <div className="content01">
          <div className="title">
            <span>기업 분야</span>
            <img
              src={isBusinessExpanded ? up : down}
              alt=""
              onClick={() => toggleExpand("business")}
            />
          </div>
          {isBusinessExpanded && (
            <>
              <div className="content">
                <div>
                  <div>
                    <p>회계 관련 법률 리스크</p>
                    <img
                      src={isBusiness01Expanded ? up2 : down2}
                      alt=""
                      onClick={() => toggleBusinessDetailExpand("business01")}
                    />
                  </div>
                  {isBusiness01Expanded && (
                    <>
                      <img src={work01} alt="" />
                      <p>
                        LawVax의 대표변호사들은 대기업 등의 분식회계, 횡령,
                        배임, 탈세, 자본시장법위반 등 회계 비리와 관련된 수많은
                        사건의 수사나 변론에 관여한 특별한 경력을 가지고
                        있습니다.
                        <br />
                        <br /> 또한 LawVax는 우수한 역량을
                        보유한회계·세무법인과도 업무 협력 체계를 구축해 놓고
                        있으며, 앞으로 회계, 조세 분야 전문가를 추가로 영입할
                        계획입니다. <br />
                        <br />
                        따라서 LawVax는 회계, 횡령, 배임, 탈세 등 회계 관련 법률
                        리스크에 대하여 누구보다도 탁월한 법적 조언을 드릴 수
                        있을 것입니다.
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div className="content">
                <div>
                  <div>
                    <p>중대 재해 관련 리스크</p>
                    <img
                      src={isBusiness02Expanded ? up2 : down2}
                      alt=""
                      onClick={() => toggleBusinessDetailExpand("business02")}
                    />
                  </div>
                  {isBusiness02Expanded && (
                    <>
                      <img src={work02} alt="" />
                      <p>
                        2022년 1월 27일부터 중대재해처벌법이 시행되면서,
                        사망사고 등 중대재해가 발생했을 때 대표이사나 대주주가
                        모든 사고에 대하여 사실상 결과 책임을 지게 되는 것은
                        아닌지 기업들의 불안과 우려가 매우 커지고 있습니다.{" "}
                        <br />
                        <br />
                        현재로서는 신설된 법 규정을 숙지하고, 그 취지에
                        맞추어 기업의 인력, 조직, 예산 등 안전보건관리 시스템을
                        정비하면서 차분히 대응해 나가는 것이 최선의 방책입니다.
                        <br />
                        <br /> ① 기업의 안전보건확보의무 이행을 위해
                        신속하게 담당 조직을 구성·정비하고, ② 경영책임자 등의
                        안전보건 관련 지시가 기업 내에서 제대로 시행될 수
                        있도록 안전보건 관련 지시·보고체계를 강화하며, ③
                        책임소재를 명확히 하기 위해 안전보건확보의무 이행에 관한
                        자료를 문서화하고 보존하는 등 입증자료를 체계적으로
                        관리하며, ④ 위험요인을 파악하여 중대재해를 예방하고
                        신속한 사고 수습 및 피해를 최소화할 수 있는 구체적이고
                        실효성 있는 중대재해 대응 매뉴얼을 수립하는 등 대책을
                        마련해야 할 것입니다. <br />
                        <br />
                        LawVax의 대표변호사들은 현행법상 중대재해로 볼 수 있는
                        많은 사건들을 수사나 재판을 통하여 수행한 경험이
                        있습니다. <br />
                        <br />
                        LawVax는 풍부한 경험을 바탕으로 기업들이 중대재해를
                        예방하고 사후적으로 대처할 수 있도록 최적의 솔루션을
                        제공해 드리겠습니다.
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div className="content">
                <div>
                  <div>
                    <p>경영권 승계나 M&A 관련 법률 리스크</p>
                    <img
                      src={isBusiness03Expanded ? up2 : down2}
                      alt=""
                      onClick={() => toggleBusinessDetailExpand("business03")}
                    />
                  </div>
                  {isBusiness03Expanded && (
                    <>
                      <img src={work02} alt="" />
                      <p>
                        2022년 1월 27일부터 중대재해처벌법이 시행되면서,
                        사망사고 등 중대재해가 발생했을 때 대표이사나 대주주가
                        모든 사고에 대하여 사실상 결과 책임을 지게 되는 것은
                        아닌지 기업들의 불안과 우려가 매우 커지고 있습니다.{" "}
                        <br />
                        <br />
                        현재로서는 신설된 법 규정을 숙지하고, 그 취지에
                        맞추어 기업의 인력, 조직, 예산 등 안전보건관리 시스템을
                        정비하면서 차분히 대응해 나가는 것이 최선의 방책입니다.
                        <br />
                        <br /> ① 기업의 안전보건확보의무 이행을 위해
                        신속하게 담당 조직을 구성·정비하고, ② 경영책임자 등의
                        안전보건 관련 지시가 기업 내에서 제대로 시행될 수
                        있도록 안전보건 관련 지시·보고체계를 강화하며, ③
                        책임소재를 명확히 하기 위해 안전보건확보의무 이행에 관한
                        자료를 문서화하고 보존하는 등 입증자료를 체계적으로
                        관리하며, ④ 위험요인을 파악하여 중대재해를 예방하고
                        신속한 사고 수습 및 피해를 최소화할 수 있는 구체적이고
                        실효성 있는 중대재해 대응 매뉴얼을 수립하는 등 대책을
                        마련해야 할 것입니다. <br />
                        <br />
                        LawVax의 대표변호사들은 현행법상 중대재해로 볼 수 있는
                        많은 사건들을 수사나 재판을 통하여 수행한 경험이
                        있습니다. <br />
                        <br />
                        LawVax는 풍부한 경험을 바탕으로 기업들이 중대재해를
                        예방하고 사후적으로 대처할 수 있도록 최적의 솔루션을
                        제공해 드리겠습니다.
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div className="content">
                <div>
                  <div>
                    <p>부동산 / 건설 관련 법률 리스크</p>
                    <img
                      src={isBusiness04Expanded ? up2 : down2}
                      alt=""
                      onClick={() => toggleBusinessDetailExpand("business04")}
                    />
                  </div>
                  {isBusiness04Expanded && (
                    <>
                      <img src={work02} alt="" />
                      <p>
                        2022년 1월 27일부터 중대재해처벌법이 시행되면서,
                        사망사고 등 중대재해가 발생했을 때 대표이사나 대주주가
                        모든 사고에 대하여 사실상 결과 책임을 지게 되는 것은
                        아닌지 기업들의 불안과 우려가 매우 커지고 있습니다.{" "}
                        <br />
                        <br />
                        현재로서는 신설된 법 규정을 숙지하고, 그 취지에
                        맞추어 기업의 인력, 조직, 예산 등 안전보건관리 시스템을
                        정비하면서 차분히 대응해 나가는 것이 최선의 방책입니다.
                        <br />
                        <br /> ① 기업의 안전보건확보의무 이행을 위해
                        신속하게 담당 조직을 구성·정비하고, ② 경영책임자 등의
                        안전보건 관련 지시가 기업 내에서 제대로 시행될 수
                        있도록 안전보건 관련 지시·보고체계를 강화하며, ③
                        책임소재를 명확히 하기 위해 안전보건확보의무 이행에 관한
                        자료를 문서화하고 보존하는 등 입증자료를 체계적으로
                        관리하며, ④ 위험요인을 파악하여 중대재해를 예방하고
                        신속한 사고 수습 및 피해를 최소화할 수 있는 구체적이고
                        실효성 있는 중대재해 대응 매뉴얼을 수립하는 등 대책을
                        마련해야 할 것입니다. <br />
                        <br />
                        LawVax의 대표변호사들은 현행법상 중대재해로 볼 수 있는
                        많은 사건들을 수사나 재판을 통하여 수행한 경험이
                        있습니다. <br />
                        <br />
                        LawVax는 풍부한 경험을 바탕으로 기업들이 중대재해를
                        예방하고 사후적으로 대처할 수 있도록 최적의 솔루션을
                        제공해 드리겠습니다.
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div className="content">
                <div>
                  <div>
                    <p>공정거래 관련 법률 리스크</p>
                    <img
                      src={isBusiness05Expanded ? up2 : down2}
                      alt=""
                      onClick={() => toggleBusinessDetailExpand("business05")}
                    />
                  </div>
                  {isBusiness05Expanded && (
                    <>
                      <img src={work02} alt="" />
                      <p>
                        2022년 1월 27일부터 중대재해처벌법이 시행되면서,
                        사망사고 등 중대재해가 발생했을 때 대표이사나 대주주가
                        모든 사고에 대하여 사실상 결과 책임을 지게 되는 것은
                        아닌지 기업들의 불안과 우려가 매우 커지고 있습니다.{" "}
                        <br />
                        <br />
                        현재로서는 신설된 법 규정을 숙지하고, 그 취지에
                        맞추어 기업의 인력, 조직, 예산 등 안전보건관리 시스템을
                        정비하면서 차분히 대응해 나가는 것이 최선의 방책입니다.
                        <br />
                        <br /> ① 기업의 안전보건확보의무 이행을 위해
                        신속하게 담당 조직을 구성·정비하고, ② 경영책임자 등의
                        안전보건 관련 지시가 기업 내에서 제대로 시행될 수
                        있도록 안전보건 관련 지시·보고체계를 강화하며, ③
                        책임소재를 명확히 하기 위해 안전보건확보의무 이행에 관한
                        자료를 문서화하고 보존하는 등 입증자료를 체계적으로
                        관리하며, ④ 위험요인을 파악하여 중대재해를 예방하고
                        신속한 사고 수습 및 피해를 최소화할 수 있는 구체적이고
                        실효성 있는 중대재해 대응 매뉴얼을 수립하는 등 대책을
                        마련해야 할 것입니다. <br />
                        <br />
                        LawVax의 대표변호사들은 현행법상 중대재해로 볼 수 있는
                        많은 사건들을 수사나 재판을 통하여 수행한 경험이
                        있습니다. <br />
                        <br />
                        LawVax는 풍부한 경험을 바탕으로 기업들이 중대재해를
                        예방하고 사후적으로 대처할 수 있도록 최적의 솔루션을
                        제공해 드리겠습니다.
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div className="content">
                <div>
                  <div>
                    <p>감사업무 대행</p>
                    <img
                      src={isBusiness06Expanded ? up2 : down2}
                      alt=""
                      onClick={() => toggleBusinessDetailExpand("business06")}
                    />
                  </div>
                  {isBusiness06Expanded && (
                    <>
                      <img src={work02} alt="" />
                      <p>
                        2022년 1월 27일부터 중대재해처벌법이 시행되면서,
                        사망사고 등 중대재해가 발생했을 때 대표이사나 대주주가
                        모든 사고에 대하여 사실상 결과 책임을 지게 되는 것은
                        아닌지 기업들의 불안과 우려가 매우 커지고 있습니다.{" "}
                        <br />
                        <br />
                        현재로서는 신설된 법 규정을 숙지하고, 그 취지에
                        맞추어 기업의 인력, 조직, 예산 등 안전보건관리 시스템을
                        정비하면서 차분히 대응해 나가는 것이 최선의 방책입니다.
                        <br />
                        <br /> ① 기업의 안전보건확보의무 이행을 위해
                        신속하게 담당 조직을 구성·정비하고, ② 경영책임자 등의
                        안전보건 관련 지시가 기업 내에서 제대로 시행될 수
                        있도록 안전보건 관련 지시·보고체계를 강화하며, ③
                        책임소재를 명확히 하기 위해 안전보건확보의무 이행에 관한
                        자료를 문서화하고 보존하는 등 입증자료를 체계적으로
                        관리하며, ④ 위험요인을 파악하여 중대재해를 예방하고
                        신속한 사고 수습 및 피해를 최소화할 수 있는 구체적이고
                        실효성 있는 중대재해 대응 매뉴얼을 수립하는 등 대책을
                        마련해야 할 것입니다. <br />
                        <br />
                        LawVax의 대표변호사들은 현행법상 중대재해로 볼 수 있는
                        많은 사건들을 수사나 재판을 통하여 수행한 경험이
                        있습니다. <br />
                        <br />
                        LawVax는 풍부한 경험을 바탕으로 기업들이 중대재해를
                        예방하고 사후적으로 대처할 수 있도록 최적의 솔루션을
                        제공해 드리겠습니다.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
        <div className="content02">
          <div className="title">
            <span>금융 분야</span>
            <img
              src={isFinanceExpanded ? up : down}
              alt=""
              onClick={() => toggleExpand("finance")}
            />
          </div>
          {isFinanceExpanded && <div />}
        </div>
        <div className="content03">
          <div className="title">
            <span>첨단 분야</span>
            <img
              src={isTechnologyExpanded ? up : down}
              alt=""
              onClick={() => toggleExpand("technology")}
            />
          </div>
          {isTechnologyExpanded && <div />}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
