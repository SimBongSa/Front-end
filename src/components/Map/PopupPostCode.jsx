import React from "react";
import DaumPostcode from "react-daum-postcode";
import styled from "styled-components";
import Stbtn from "../common/button/Button";
const PopupPostCode = ({ setAddress, onClose, ...props }) => {
	// 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
	const handlePostCode = data => {
		let fullAddress = data.address;
		let extraAddress = "";

		if (data.addressType === "R") {
			if (data.bname !== "") {
				extraAddress += data.bname;
			}
			if (data.buildingName !== "") {
				extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
			}
			fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
		}
		// 주소값
		setAddress(fullAddress);
		onClose();
		console.log(data);
		console.log(fullAddress);
	};

	return (
		<PopupWrap>
			<DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
			{/* // 닫기 버튼 생성 */}
			<Stbtn
				variant="post-popup-close"
				type="button"
				onClick={() => {
					onClose();
				}}
				className="postCode_btn"
			>
				닫기
			</Stbtn>
		</PopupWrap>
	);
};

export default PopupPostCode;

const postCodeStyle = {
	display: "block",
	position: "absolute",
	top: "10%",
	width: "600px",
	height: "600px",
	padding: "7px",
};

const PopupWrap = styled.div`
	position: relative;
	width: 586px;
	height: 586px;
`;
