import styled from "styled-components";

export const InputContainer = styled.div`
	width: 600px;
	margin: auto;
	box-shadow: 2px 10px 40px rgba(22, 20, 19, 0.4);
	border-radius: 10px;
	background: #aaaaaa;
	transition: all 0.5s;
`;

export const InputForm = styled.div`
	text-align: center;
	padding: 5rem;
`;

export const InputBox = styled.div`
	width: calc(385px - 50px * 2);
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	text-align: center;
	align-items: center;
	& img {
		width: 100px;
		height: 100px;
		object-fit: cover;
	}
`;
