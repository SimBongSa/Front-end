import React, { useState } from "react";
import DaumPostCode from "react-daum-postcode";
import styled from "styled-components";

const KaPost = ({}) => {
	const handleComplete = data => {
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

	};

	return (
		<div>
			<PostWrap>
				<DaumPostCode onComplete={handleComplete} className="post-code" />;
			</PostWrap>
		</div>
	);
};
export default KaPost;

const PostWrap = styled.div`
	width: 500px;
	height: 200px;
`;
