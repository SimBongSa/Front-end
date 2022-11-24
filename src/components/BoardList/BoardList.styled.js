import styled from "styled-components";

export const BoardContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const BoardContent = styled.div``;

export const BtnBox = styled.div`
	margin-top: 10rem;
	display: flex;
`;

export const Button = styled.button`
	display: flex;
	justify-items: center;
	justify-content: center;
	font-size: 20pt;
	border: 1px solid ${props => props.theme.btnColor};
	border-radius: 50px;
	margin-left: 1rem;
	padding-top: 0.5rem;
	width: 50px;
	height: 50px;
	background: ${props => props.theme.subBtnColor};
	color: ${props => props.theme.textColor};
	cursor: pointer;
	transition: all 0.5s ease;
	&:hover {
		transform: translateY(-0.5rem);
	}
`;
