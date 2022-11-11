import { useEffect, useState } from "react";
import { MapMarker, Map } from "react-kakao-maps-sdk";

const KaMap = () => {
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();
  const [schedule, setSchedule] = useState("");

  const { kakao } = window;
  const geocoder = new kakao.maps.services.Geocoder();

  console.log("주소 =>", schedule);

  const onAddScheduleHandler = (e) => {
    e.preventDefault();
    if (!map) return;
    const ps = new kakao.maps.services.Places();
    geocoder.addressSearch(`${schedule}`, (data, status, _pagination) => {
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

  const onChangeHandler = (e) => {
    // const { name, value } = e.target;
    // setSchedule({ ...schedule, [name]: value });
    setSchedule(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onAddScheduleHandler}>
        <input
          type="text"
          placeholder="주소"
          name="address"
          value={schedule}
          onChange={onChangeHandler}
        />
        <button type="submit">작성</button>
      </form>
      <Map // 로드뷰를 표시할 Container
        center={{
          lat: 37.566826,
          lng: 126.9786567,
        }}
        style={{
          width: "100%",
          height: "350px",
        }}
        level={3}
        onCreate={setMap}
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
      </Map>
    </div>
  );
};

export default KaMap;
