import styled from "styled-components";
import { FaRegUserCircle } from "react-icons/fa";
import Input from "../../common/input/Input";

export const MainComponent = styled.div`
	margin: 2.5rem;
`;
export const CommentWriteWrap = styled.div`
	display: flex;
	align-items: center;
	border-radius: 30px;
	height: 4rem;
	& div {
		cursor: pointer;
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

export const Button = styled.button`
	background: ${props => props.theme.btnColor};
	border: 1px solid ${props => props.theme.btnColor};
	color: ${props => props.theme.bgColor};
	border-radius: 24px;
	width: 8rem;
	height: 2.5rem;
	margin-left: auto;
	margin-right: 0.5rem;
	cursor: pointer;
`;

export const UserIcon = styled(FaRegUserCircle)`
	display: flex;
	float: right;
	justify-content: right;
	font-size: 3rem;
	color: grey;
	min-width: 40px;
`;

export const CommentIcon = styled(FaRegUserCircle)`
	font-size: 3rem;
	color: grey;
	margin-right: 0.5rem;
`;

export const CommentInput = styled.input`
	margin-top: 1rem;
	margin-left: 3.5rem;
	height: 2rem;
	margin-bottom: 1rem;
	width: 95vh;
	background-color: transparent;
	border: transparent;
	border-bottom: 0.5px solid ${props => props.theme.textColor};
`;

export const Div = styled.div`
	margin-left: 0.3rem;
`;

export const Date = styled.div`
	margin-top: 0.5rem;
`;

export const CommentDiv = styled.div`
	margin-top: 1rem;
	margin-left: 3.5rem;
	height: 2rem;
	flex-wrap: wrap;
	border-bottom: 0.5px solid ${props => props.theme.textColor};
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

export const StComment = styled(Input)`
	/* background-color: black; */
`;
