/*global kakao */
import React, { useEffect, useState } from "react";
import { MapMarker, Map } from "react-kakao-maps-sdk";

const KaMarker = ({ boards }) => {
  console.log(boards);
  console.log(1);
  const positions = [{}];

  console.log(5);
  return (
    <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: 37.566826,
        lng: 126.9786567,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "100%",
      }}
      level={3} // 지도의 확대 레벨
    >
      {positions.map((position, index) => (
        <MapMarker
          key={`${position.area}-${position.latlng}`}
          position={position.latlng} // 마커를 표시할 위치
          image={{
            src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
            size: {
              width: 24,
              height: 35,
            }, // 마커이미지의 크기입니다
          }}
          title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        />
      ))}
    </Map>
  );
};
export default KaMarker;
