import styled from "styled-components";

export const BoardContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 3rem;
	margin-left: 2rem;
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
`;

export const StBtnBox = styled.div`
	margin-bottom: 5rem;
	display: flex;
	align-items: center;
	justify-content: center;
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
