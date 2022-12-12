import styled from "styled-components";
import DatePicker from "react-datepicker";

export const DetailContainer = styled.div`
	display: flex;
	/* flex-direction: row; */
	justify-content: space-between;
	margin: 3rem;
	min-height: 100vh;
	@media screen and (max-width: 1024px) {
		display: flex;
		justify-content: space-around;
		flex-direction: column-reverse;
	}
`;

export const DetailContent = styled.div`
	float: left;
	width: 30%;
	min-width: 600px;
	padding: 2rem;
	/* color: ${props => props.theme.textColor}; */
	& h1 {
		font-size: 2rem;
	}
	& h3 {
		font-size: 1.6rem;
		margin: 3rem 1rem 2rem 0rem;
	}
	@media screen and (max-width: 1024px) {
		margin-top: 5rem;
	}
`;

export const RegisterDatePicker = styled(DatePicker)`
	margin: 0.5rem;
	font-size: 15px;
	padding: 20px;
	width: 99%;
	border: 1px solid #66885d;
	border-radius: 30px;
	outline: none;
	background: ${props => props.theme.btnColor};
`;

export const TextArea = styled.textarea`
	margin: 1rem;
	width: 95%;
	border: none;
	border-radius: 10px;
	outline: none;
	resize: none;
	padding: 1rem;

	height: 200px;

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
