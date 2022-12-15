import styled from "styled-components";
import { ImMap2 } from "react-icons/im";
import { MdKeyboardArrowUp } from "react-icons/md";

export const BoardContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 3rem;
	margin-left: 2rem;
	margin-bottom: 15rem;
`;

export const StTitle = styled.div`
	margin-top: 5rem;
	margin-right: 1rem;
	text-align: center;
	& > div {
		padding-bottom: 1rem;
		font-weight: 300;
		font-size: 1.6rem;
	}
`;

export const BoardContent = styled.div`
	text-align: right;
	position: relative;
`;

export const StBtnBox = styled.div`
	margin-top: 12rem;
	margin-bottom: 5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	font-size: 2rem;
	transition: all 0.5s;
	&:hover {
		transform: translateY(-5%);
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

export const StMap = styled(ImMap2)`
	font-size: 0.9rem;
`;

export const StArrow = styled(MdKeyboardArrowUp)`
	font-size: 1.8rem;
`