import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";

export const LoginContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 80%;
	margin: 0 auto;
	margin-top: 12rem;
	margin-bottom: 15rem;
	justify-content: space-between;
	align-items: center;
`;

export const LoginBackLeft = styled.div`
	width: 50%;
	left: 0;
	height: 100%;
	background-color: #aaaaaa;
	background-size: cover;
	background-repeat: no-repeat;
`;

export const LoginFrontRight = styled.div`
	width: 50%;
	right: 0;
	height: 100%;
`;

export const LoginOverlay = styled.div`
	padding: 30px;
	width: 100%;
	height: 100%;
	overflow: hidden;
	& h1 {
		font-size: 7vmax;
		line-height: 1;
		font-weight: 900;
		margin-top: 150px;
		margin-bottom: 20px;
	}
	& p {
		margin-top: 30px;
		font-weight: 900;
	}
`;

export const LoginBox = styled.div`
	display: flex;
	margin: 0 auto;
	padding: 50px;
	max-width: 600px;
	min-width: 600px;
	height: 40vh;
	min-height: 600px;
	overflow: hidden;
	border-radius: 15px;
	flex-direction: column;
	justify-content: space-evenly;
	font-size: 3rem;
	color: ${props => props.theme.textColor};
	background-color: ${props => props.theme.subBgColor};
	transition: all 0.5s;
	& span {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 1rem;
		padding-left: 10px;
		font-size: 1rem;
	}
`;
export const LoginBoxTitle = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 1rem;
	border-bottom: 3px solid ${props => props.theme.textColor};
`;
export const LoginArrowBack = styled(BiArrowBack)`
	cursor: pointer;
	display: flex;
	font-size: 1.8rem;
	color: ${props => props.theme.textColor};
	transition: all 0.3s;
	&:hover {
		transform: translateX(-10%);
	}
`;

export const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
`;

export const LoginBtn = styled.button`
	cursor: pointer;
	margin-top: 1.2rem;
	width: 100%;
	font-size: 1rem;
	border: none;
	border-radius: 25px;
	outline: none;
	padding: 15px;
	background-color: ${props => props.theme.textColor};
	color: ${props => props.theme.bgColor};
	transition: all 0.3s;
	&:hover {
		transform: translateY(-7%);
	}
`;

export const LoginTitle = styled.h4`
	cursor: pointer;
	color: ${props => props.theme.textColor};
`;

export const StLoginOptions = styled.div`
	display: flex;
	width: 40%;
	flex-direction: row;
	justify-content: space-evenly;
	> .selected {
		border-bottom: 4px solid ${props => props.theme.btnColor};
	}
	> .not-selected {
		border-bottom: 4px solid ${props => props.theme.subTextColor};
	}
	& span {
		cursor: pointer;
		min-width: 5rem;
		text-align: center;
		margin: 1rem;
		padding-bottom: 5px;
		transition: all 0.4s;
		&:hover {
			transform: translateY(-5%);
			border-bottom: 4px solid ${props => props.theme.btnColor};
		}
	}
`;

export const StToRegister = styled.span`
	font-weight: 300;
	font-size: 1.2rem;
	margin-top: 2rem;
	margin-bottom: 15rem;
	& b {
		cursor: pointer;
		color: orange;
	}
`;
