import styled from "styled-components";

export const StInputContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const StInput = styled.input`
	margin: 12px;
	font-size: 15px;
	padding: 20px;
	width: 100%;
	padding-left: 20px;
	border: 1px solid ${(props) => props.theme.textColor};
	border-radius: 30px;
	outline: none;
	margin-bottom: 1rem;
	&:focus {
		border: 1px solid ${props => props.theme.btnColor};
	}
`;

export const StErrorMsg = styled.span`
	color: tomato;
`;

export const DupleCheck = styled.span`
	width: 100px;
	position: absolute;
	right: 10px;
	cursor: pointer;
`;
