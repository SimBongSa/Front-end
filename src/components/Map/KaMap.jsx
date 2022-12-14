import { useEffect, useState } from "react";
import { MapMarker, Map } from "react-kakao-maps-sdk";
import styled from "styled-components";

const KaMap = ({ area, mapWidth, mapHeight, position, input }) => {
	const [info, setInfo] = useState();
	const [markers, setMarkers] = useState([]);
	const [map, setMap] = useState();
	const [schedule, setSchedule] = useState("");
	const { kakao } = window;
	const geocoder = new kakao.maps.services.Geocoder();
	useEffect(() => {
		const onAddScheduleHandler = area => {
			if (!map) return;
			geocoder.addressSearch(`${area}`, (data, status, _pagination) => {
				if (status === kakao.maps.services.Status.OK) {
					const bounds = new kakao.maps.LatLngBounds();
					let markers = [];
					for (let i = 0; i < data.length; i++) {
						markers.push({
							position: {
								lat: data[i].y,
								lng: data[i].x,
							},
							content: data[i].place_name,
						});

						bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
					}
					setMarkers(markers);

					map.setBounds(bounds);
				}
			});
			setSchedule("");
		};
		setSchedule(area);
		return () => onAddScheduleHandler(area);
	}, [setSchedule, area, schedule, map, kakao.maps.LatLng]);

	const onChangeHandler = e => {
		setSchedule(e.target.value);
	};

	return (
		<div>
			<form>
				{input === true ? (
					<>
						<input
							type="text"
							placeholder="주소"
							name="address"
							value={schedule}
							onChange={onChangeHandler}
						/>
						<button type="submit">작성</button>
					</>
				) : null}
			</form>
			<StMap // 로드뷰를 표시할 Container
				center={{
					lat: 37.566826,
					lng: 126.9786567,
				}}
				level={3}
				onCreate={setMap}
				width={mapWidth}
				height={mapHeight}
				position={position}
			>
				{markers.map(marker => (
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
	width: ${props => props.width};
	height: ${props => props.height};
`;
