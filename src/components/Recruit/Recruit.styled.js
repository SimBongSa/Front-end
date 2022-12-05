import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import DatePicker from "react-datepicker";

export const RecruitContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	width: 100%;
	font-weight: 300;
	position: relative;
	margin-top: 10rem;
	margin-bottom: 10rem;
	color: ${props => props.theme.textColor};
	& form {
		width: 80%;
		& h2 {
			font-size: 2rem;
			margin-bottom: 1rem;
		}
	}
	& p {
		margin: 1rem;
	}
	@media (max-width: 1024px) {
		flex-direction: column;
	}
`;

export const RecruitNav = styled.nav`
	position: fixed;
	height: 100%;
	padding: 30px;
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-end;
	margin: 0 0 100px 30px;
	& a {
		//nav 안 a 태그
		text-decoration: none;
	}
	& .counter {
		//nav 안 classname = counter에게
		font-size: 24px;
		transition: all 0.15s ease-out;
	}
	& .title {
		font-size: 24px;
		font-weight: 300;
		margin: 0 0 0.25em;
		width: 300px;
		overflow: hidden;
		transition: height 0.3s ease-out;
	}
	& .body {
		font-weight: 100;
		font-size: 12px;
		width: 300px;
		overflow: hidden;
		transition: height 0.3s ease-out;
	}
	& li {
		position: relative;
		transition: all 0.3s ease-out;
		margin-bottom: 3rem;
		&:after {
			content: "";
			display: block;
			border-left: 2px solid ${props => props.theme.textColor};
			border-top: 2px solid ${props => props.theme.textColor};
			height: 250px;
			width: 20px;
			position: absolute;
			left: -30px;
			top: 15px;
		}
		& a {
			display: block;
			padding: 0;
			color: ${props => props.theme.textColor};
			transition: all 0.15s ease-out;
			&:hover {
				padding-left: 1em;
			}
		}
		& .active {
			pointer-events: none;
			padding-left: 1em;
			&:after {
				width: 35px;
				height: 400px;
				top: 35px;
			}
			.counter {
				font-size: 48px;
			}
			.title {
				height: 40px;
				opacity: 1;
				overflow: visible;
			}
			.body {
				height: 100px;
				opacity: 1;
				overflow: visible;
			}
		}
	}
	@media (max-width: 1024px) {
		display: none;
	}
`;

export const RecruitSec = styled.section`
	height: 100vh;
	font-size: 40px;
	font-weight: 100;
	display: flex;
	flex-direction: column;
	justify-content: center;
	& h1 {
		margin-bottom: 3rem;
	}
`;

export const ScrollDown = styled(IoIosArrowDown)`
	position: fixed;
	left: 48%;
	font-size: 3rem;
`;

export const AreaBtn = styled.button`
	width: 150px;
	margin-bottom: 1rem;
`;

export const RecruitTA = styled.textarea`
	margin: 1rem;
	width: 350px;
	border: none;
	border-radius: 2px;
	height: 150px;
`;

export const ImgSize = styled.img`
	width: 350px;
	height: 150px;
	margin: 1rem;
`;

// export const CustomeDatePicker = styled(DatePicker)({
// 	margin: "12px",
// 	fontSize: "15px",
// 	padding: "20px",
// 	width: "360px",
// 	paddingLeft: "20px",
// 	border: "none",
// 	borderRadius: "15px",
// 	outline: "none",
// 	marginBottom: "1rem",
// 	background: `${props => props.theme.textColor}`,
// });

export const PickerBox = styled.div`
	display: flex;
	flex-direction: column;
`;

export const StLeftWrap = styled.div`
	width: 40%;
	float: left;
	& h1 {
		font-size: 25px;
		text-align: center;
		border-bottom: 1px solid gray;
		margin: 0px;
		padding: 20px;
	}

	& h3 {
		margin: 1rem;
		font-size: 1.2rem;
		& span {
			font-weight: 500;
			color: ${props => props.theme.btnColor};
		}
	}

	& p {
		margin: 1rem;
		font-size: 1rem;
		& span {
			font-weight: 500;
			color: ${props => props.theme.btnColor};
		}
	}

	& label {
		margin: 1rem;
	}
	@media (max-width: 1024px) {
		width: 80%;
		float: none;
	}
`;

export const StRightWrap = styled.div`
	width: 40%;
	float: right;
	& h1 {
		font-size: 45px;
		text-align: center;
		border-bottom: 1px solid gray;
		margin: 0px;
		padding: 20px;
	}

	& h3 {
		margin: 1rem;
		font-size: 1.2rem;
		& span {
			font-weight: 500;
			color: ${props => props.theme.btnColor};
		}
	}

	& p {
		margin: 1rem;
		font-size: 1rem;
		& span {
			font-weight: 500;
			color: ${props => props.theme.btnColor};
		}
	}

	@media (max-width: 1024px) {
		width: 80%;
		float: none;
	}
`;

export const ImageUploadBox = styled.div`
	& input[type="file"] {
		display: none;
	}
	& label {
		cursor: pointer;
		display: flex;
		width: 100%;
		justify-content: center;
		margin: 0 auto;
		margin: 1rem;
		padding: 1rem;
		background: #aaaaaa;
		& .uploadBtn {
			font-size: 2rem;
			margin-left: 1.5rem;
		}
		& .textBox {
		}
	}
`;

export const TextArea = styled.textarea`
	margin: 1rem;
	width: 100%;
	border: none;
	border-radius: 10px;
	outline: none;
	resize: none;
	padding: 1rem;
	height: 150px;

	&:focus {
		outline: 2px solid ${props => props.theme.btnColor};
	}
	button {
		width: 300px;
		height: 60px;
		border-radius: 30px;
		background-color: #66885d;
		border: none;
	}
`;

export const RegisterDatePicker = styled(DatePicker)`
	margin: 0.1rem;
	font-size: 15px;
	padding: 20px;
	width: 100%;
	// paddingLeft: "20px",
	border: 1px solid #66885d;
	border-radius: 30px;
	outline: none;
	background: ${props => props.theme.btnColor};
`;

export const CustomeDatePicker = styled(DatePicker)`
	margin: 12px;
	font-size: 15px;
	padding: 20px;
	width: 360px;
	padding-left: 20px;
	border: none;
	border-radius: 15px;
	outline: none;
	margin-bottom: 1rem;
	background: ${props => props.theme.textColor};
`;
