import { useEffect, useState } from "react";
import { MapMarker, Map } from "react-kakao-maps-sdk";
import styled from "styled-components";

const KaMap = ({ area, mapHeight, input }) => {
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();
  const [schedule, setSchedule] = useState("");
  const { kakao } = window;
  const geocoder = new kakao.maps.services.Geocoder();
  // console.log("주소 =>", schedule);


  useEffect(() => {
    const onAddScheduleHandler = (e) => {
      // e.preventDefault();
      if (!map) return;
      const ps = new kakao.maps.services.Places();
      geocoder.addressSearch(`${area}`, (data, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가합니다
          const bounds = new kakao.maps.LatLngBounds();
          let markers = [];
  
          for (let i = 0; i < data.length; i++) {
            // @ts-ignore
            markers.push({
              position: {
                lat: data[i].y,
                lng: data[i].x,
              },
              content: data[i].place_name,
            });
            // @ts-ignore
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }
          setMarkers(markers);
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          map.setBounds(bounds);
        }
      });
      setSchedule("");
    };
    setSchedule(area);
    return () => onAddScheduleHandler();
  }, [setSchedule, area, geocoder])

  const onChangeHandler = (e) => {
    setSchedule(e.target.value);
  };

  return (
    <div>
      <form >
        {
          input === true ? (
            <>
              <input
                type="text"
                placeholder="주소"
                name="address"
                // value={area}
                value={schedule}
                onChange={onChangeHandler}
              />
              <button type="submit">작성</button>
            </>
          ) : null
        }

      </form>
      <StMap // 로드뷰를 표시할 Container
        center={{
          lat: 37.566826,
          lng: 126.9786567,
        }}
        level={3}
        onCreate={setMap}
        height={mapHeight}
      >
        {markers.map((marker) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onClick={() => setInfo(marker)}
          >
            {info && info.content === marker.content && (
              <div style={{ color: "#000" }}>{marker.content}</div>
            )}
          </MapMarker>
        ))}
      </StMap>
    </div>
  );
};

export default KaMap;

export const StMap = styled(Map)`
  width: 100%;
  height: ${(props) => props};
`;
