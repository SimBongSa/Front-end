import styled from "styled-components";

export const StInputContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const StInput = styled.input`
	margin: 12px;
	font-size: 15px;
	padding: 20px;
	width: 360px;
	padding-left: 20px;
	border: none;
	border-radius: 30px;
	outline: none;
	margin-bottom: 1rem;
	background: ${props => props.theme.WHITE};
	color: ${props => props.theme.BLACK};
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
