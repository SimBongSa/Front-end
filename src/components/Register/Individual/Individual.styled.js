import styled from "styled-components";

export const InputForm = styled.div`
	text-align: center;
	padding-top: 5rem;
	width: 100%;
`;

export const InputBox = styled.div`
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
	& form {
		width: 40%;
		min-width: 350px;
		& input[type="file"] {
			display: none;
		}
	}
	& form > span {
		font-weight: 300;
		font-size: 12px;
	}
`;

export const StLegend = styled.legend`
	font-size: 1.4em;
	margin-top: 15px;
	margin-bottom: 0px;
	text-align: left;
`;
