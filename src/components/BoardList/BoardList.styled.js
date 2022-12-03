import styled from "styled-components";

export const BoardContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 3rem;
`;

export const StTitle = styled.div`
	margin-top: 5rem;
	text-align: center;
	& > div {
		padding-bottom: 1rem;
		font-weight: bolder;
	}
`;

export const BoardContent = styled.div`
	text-align: right;
`;

export const StBtnBox = styled.div`
	margin-bottom: 5rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Button = styled.button`
	font-size: 15px;
	margin-left: 1rem;
	margin-right: 1rem;
	width: 50px;
	height: 50px;
	background-color: transparent;
	border: none;
	color: ${props => props.theme.textColor};
	cursor: pointer;
	transition: all 0.5s ease;
	&:hover {
		transform: translateY(-0.5rem);
	}
`;

export const StMapBtn = styled.button`
	font-size: 15px;
	border: 1px solid ${props => props.theme.btnColor};
	border-radius: 50px;
	width: 140px;
	height: 40px;
	margin-right: 2rem;
	background: ${props => props.theme.bgColor};
	color: ${props => props.theme.textColor};
	cursor: pointer;
	transition: all 0.5s ease;
	&:hover {
		transform: translateY(-0.5rem);
	}
`;

export const StCloseBtn = styled.button`
	z-index: 99;
	position: absolute;
	color: #fff;
	text-align: right;
	right: 15%;
	top: 10%;
	font-size: 36px;
	background-color: transparent;
	border: none;
	cursor: pointer;
	transition: all 0.5s ease;
	&:hover {
		transform: translateY(-0.5rem);
	}
`;

export const ListMap = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	width: 100%;
	height: 100%;
	transform: translate(-50%, -50%);
	background: rgb(0, 0, 0, 0.7);
	z-index: 99;
`;
