import React, { useState } from "react";
import search from "../../assets/images/icons/searchIcon.png";
import phone from "../../assets/images/icons/phone.png";
import fax from "../../assets/images/icons/fax.png";
import blueBus from "../../assets/images/icons/blueBus.png";
import greenBus from "../../assets/images/icons/greenBus.png";
import threeLine from "../../assets/images/icons/threeLine.png";
import copy from "../../assets/images/icons/copy.png";
import share from "../../assets/images/icons/shareBlue.png";
import Kakaomap from "./KakaoMap";

declare global {
  interface Window {
    kakao: any;
  }
}

const LawvaxMap: React.FC = () => {
  const [departure, setDeparture] = useState<string>("");
  const destinationCoords = {
    lat: 37.4874330809783,
    lng: 127.012219208568,
  };

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDeparture(e.target.value);
  }

  const handleFindDirection = () => {
    const geocoder = new window.kakao.maps.services.Geocoder();
    const ps = new window.kakao.maps.services.Places();

    // 주소 검색
    geocoder.addressSearch(departure, (result: any, status: any) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const coords = {
          lat: parseFloat(result[0].y),
          lng: parseFloat(result[0].x),
        };

        const kakaoUrl = `https://map.kakao.com/link/from/${departure},${coords.lat},${coords.lng}/to/로백스,${destinationCoords.lat},${destinationCoords.lng}`;
        window.open(kakaoUrl, "_blank");
      } else {
        // 장소 키워드 검색
        ps.keywordSearch(departure, (result: any, status: any) => {
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = {
              lat: parseFloat(result[0].y),
              lng: parseFloat(result[0].x),
            };

            console.log(`입력한 장소명: ${departure}`);
            console.log(`위도: ${coords.lat}, 경도: ${coords.lng}`);

            const kakaoUrl = `https://map.kakao.com/link/from/${departure},${coords.lat},${coords.lng}/to/로백스,${destinationCoords.lat},${destinationCoords.lng}`;
            window.open(kakaoUrl, "_blank");
          } else {
            alert("주소나 장소를 찾을 수 없습니다. 다시 시도해주세요.");
          }
        });
      }
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleFindDirection();
    }
  };

  const handleCopy = () => {
    const textToCopy = "서울특별시 서초구 서초동 1596-3";
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("주소가 복사되었습니다.");
      })
      .catch((err) => {
        console.error("복사 실패:", err);
      });
  };

  const handleShare = () => {
    const textToCopy = "https://kko.to/F1EOjJNSyv";
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("위치 공유 링크가 복사되었습니다.");
      })
      .catch((err) => {
        console.error("복사 실패:", err);
      });
  };

  return (
    <section className="lawvax-map-section">
      <div className="title">
        <div>
          <p className="blue">Lawvax</p>
          <p style={{ fontSize: "2em" }}>
            <span className="blue" style={{ fontSize: "2em" }}>
              M
            </span>
            AP
          </p>
        </div>
      </div>
      <div className="content">
        <div className="text-section">
          <div className="route">
            <p className="sub-title">경로탐색</p>
            <div className="search-bar">
              <img src={search} alt="" onClick={handleFindDirection} />
              <input
                type="text"
                placeholder="출발지를 입력해주세요."
                value={departure}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />
              <button className="search-button">X</button>
            </div>
          </div>
          <div className="sub-wrap adress">
            <p className="sub-title">주소</p>
            <p className="gray">
              지번:서울특별시 서초구 서초동 1596-3
              <img
                src={copy}
                alt=""
                style={{ marginLeft: "5px" }}
                onClick={handleCopy}
              />
            </p>
            <p>서울특별시 서초구 사임당로 18 석오빌딩 3층, 9층</p>
          </div>
          <div className="sub-wrap call">
            <p className="sub-title">연락처</p>
            <span>
              <img src={phone} alt="" />
              대표번호 02-583-6300
              <img src={fax} alt="" style={{ marginLeft: "5px" }} />
              팩스 02-583-6303
            </span>
          </div>
          <div className="sub-wrap traffic">
            <p className="sub-title">대중교통</p>
            <p>
              <img src={blueBus} alt="" style={{ marginLeft: "2px" }} />
              350, 742 서울교대사거리 정류장 22160
            </p>
            <p>
              <img src={greenBus} alt="" style={{ marginLeft: "2px" }} />
              서초21청호나이스 정류장 22935
            </p>
            <p>
              <img src={threeLine} alt="" />
              남부터미널역 6번 출구 하차
            </p>
          </div>
        </div>
        <div className="map-section">
          <Kakaomap />
        </div>
        <div className="share" onClick={handleShare}>
          <img src={share} alt="" />
          공유하기
        </div>
      </div>
    </section>
  );
};

export default LawvaxMap;
