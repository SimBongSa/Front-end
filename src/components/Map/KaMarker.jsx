/*global kakao */
import { useEffect, useState } from "react";
import { MapMarker, Map } from "react-kakao-maps-sdk";
import axios from "axios";

const KaMarker = ({ boards }) => {
	const [positions, setPositions] = useState([]);

	useEffect(() => {
		boards.map(item => {
			axios
				.get(`https://dapi.kakao.com/v2/local/search/address.json?query=${item.area}`, {
					headers: {
						Authorization: "KakaoAK 74477c168841b00df74defcd5d637e40",
					},
				})
				.then(res => {
					if (res.constructor === Object && Object.keys(res).length !== 0) {
						res.data.documents.map(item => {
							setPositions(prev => [
								...prev,
								{
									title: item.address_name,
									latlng: { lat: item.y, lng: item.x },
								},
							]);
						});
					}
				});
		});
	}, []);

	return (
		<Map
			center={{
				lat: 37.566826004661,
				lng: 126.978652258309,
			}}
			style={{
				width: "70%",
				height: "70%",
				position: "fixed",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				backgroundColor: "gray",
				zIndex: "999",
			}}
			level={13}
		>
			{positions.map((position, index) => (
				<MapMarker
					key={`${position.index}-${position.latlng}`}
					position={position.latlng}
					image={{
						src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
						size: {
							width: 24,
							height: 35,
						},
					}}
					title={position.title}
				/>
			))}
		</Map>
	);
};
export default KaMarker;
