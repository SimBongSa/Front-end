import styled from "styled-components";

export const MyPageEditSec = styled.section`
	/* height: 100vh;
	font-size: 15px;
	font-weight: 100;
	display: flex;
	flex-direction: column;
	justify-content: left;
	align-items: center;
	& h1 {
		margin-bottom: 3rem;
	}

	& h4 {
		font-size: 15px;
		margin: 5px auto;
	} */
`;

export const MyPageEditContainer = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 0.1rem;
	position: relative;
	align-items: center;
	overflow: hidden;
	width: 100%;
	margin-bottom: 10rem;
	margin-top: 10rem;
`;

export const ImgSize = styled.img`
	flex-direction: column;
	width: 350px;
	height: 150px;
	margin: 1rem;
`;

export const MyPageEditBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	text-align: center;
	align-items: center;
	width: 100%;
	& img {
		width: 100px;
		height: 100px;
		object-fit: cover;
	}
	& div {
		width: 40%;
		min-width: 350px;
	}
	& div > p {
		font-weight: 300;
		font-size: 12px;
		color: ${props => props.theme.btnColor};
	}
`;

export const MyPageEditForm = styled.div`
	text-align: center;
	padding-top: 5rem;
	width: 100%;
`;

export const TextArea = styled.textarea`
	margin: 12px;
	font-size: 15px;
	padding: 20px;
	width: 100%;
	height: 200px;
	padding-left: 20px;
	border: 1px solid ${props => props.theme.textColor};
	border-radius: 30px;
	outline: none;
	margin-bottom: 1rem;
	margin-left: -0.15rem;
	resize: none;
	&:focus {
		border: 1px solid ${props => props.theme.btnColor};
		color: ${props => props.theme.btnColor};
		&::-webkit-input-placeholder {
			color: ${props => props.theme.btnColor};
		}
	}
`;

export const Input = styled.input`
	margin: 12px;
	font-size: 15px;
	padding: 20px;
	width: 100%;
	padding-left: 20px;
	border: 1px solid ${props => props.theme.textColor};
	border-radius: 30px;
	outline: none;
	margin-bottom: 1rem;
	margin-left: -0.15rem;
	&:focus {
		border: 1px solid ${props => props.theme.btnColor};
		color: ${props => props.theme.btnColor};
		&::-webkit-input-placeholder {
			color: ${props => props.theme.btnColor};
		}
	}
`;
