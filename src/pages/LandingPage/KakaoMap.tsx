import { Map, MapMarker } from "react-kakao-maps-sdk";

const Kakaomap = () => {
  return (
    <div className="kakaomap-wrap">
      <Map
        center={{ lat: 37.48553, lng: 127.01421 }} // 지도의 중심 좌표
        style={{ width: "100%", height: "330px" }} // 지도 크기
        level={5} // 지도 확대 레벨
      >
        <MapMarker position={{ lat: 37.48743, lng: 127.01221 }}></MapMarker>
      </Map>
    </div>
  );
};

export default Kakaomap;
