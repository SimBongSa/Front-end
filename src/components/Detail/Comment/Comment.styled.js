import styled from "styled-components";
import { FaRegUserCircle } from "react-icons/fa";

export const MainComponent = styled.div`
	margin: 2.5rem;
`;

export const CommentWriteWrap = styled.div`
	float: right;
	position: relative;
	width: 85%;
	align-items: center;
	height: 4rem;
	margin-top: -5rem;
	/* & div {
		padding-top: 2rem;
		text-align: center;
		color: ${props => props.theme.textColor};
	} */
`;

export const CommentWriteWraps = styled.div`
	float: right;
	position: relative;
	width: 85%;
	align-items: center;
	height: 4rem;
	margin-top: -5rem;
	& div {
		padding-top: 2rem;
		text-align: center;
		color: ${props => props.theme.textColor};
	}
`;

export const CommentTitleWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 2rem;
	& > div {
		display: flex;
		align-items: center;
	}
	& > div > img {
		margin-right: 1rem;
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
	& > div > div {
		flex-wrap: wrap;
	}
`;

export const CommentBtnWrap = styled.div`
	display: flex;
	align-items: center;
	& > div {
		cursor: pointer;
	}
`;
export const Box = styled.div`
	margin: 16px 0;
`;

export const UserIcon = styled(FaRegUserCircle)`
	font-size: 3rem;
	color: grey;
	min-width: 40px;
`;
export const StImgBox = styled.div`
	& img {
		font-size: 3rem;
		width: 70px;
		width: 70px;
		border-radius: 50%;
	}
`;

export const CommentIcon = styled(FaRegUserCircle)`
	font-size: 3rem;
	margin-right: 0.5rem;
	width: 40px;
	height: 40px;
	border-radius: 50%;
`;

export const CommentInput = styled.input`
	font-size: 15px;
	margin-top: 1rem;
	margin-left: 3.5rem;
	height: 2rem;
	margin-bottom: 1rem;
	color: ${props => props.theme.textColor};
	background-color: transparent;
	border: transparent;
	border-bottom: 0.5px solid ${props => props.theme.textColor};
	width: calc(100% - 13px * 2);
`;

export const Div = styled.div`
	margin-left: 0.3rem;
`;

export const Date = styled.div`
	margin-top: 0.5rem;
`;

export const CommentDiv = styled.div`
	word-break: break-all;
	line-height: auto;
	margin-top: 1rem;
	margin-left: 3.5rem;
	height: 2rem;

	flex-wrap: wrap;
	border-bottom: 0.5px solid silver;

`;

export const StPageBtn = styled.div`
	margin-top: 3rem;
	border: 1px solid ${props => props.theme.textColor};
	color: ${props => props.theme.textColor};
	border-radius: 24px;
	width: 8rem;
	height: 2.5rem;
	text-align: center;
	margin-left: 45%;
	padding: 10px 10px;
	cursor: pointer;
`;
