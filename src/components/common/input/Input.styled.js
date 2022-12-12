import styled from "styled-components";

export const StInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
`;

export const StInput = styled.input`
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

export const StErrorMsg = styled.span`
	color: tomato;
`;

export const DupleCheck = styled.span`
	position: absolute;
	cursor: pointer;
	width: 6rem;
	height: 2.5rem;
	border-radius: 24px;
	align-items: center;
	padding-top: .85rem;
	margin-left: calc(100% - 115px);
	margin-top: 21.5px;
	font-size: .8rem;
	background: ${props => props.theme.btnColor};
	border: 1px solid ${props => props.theme.btnColor};
	color: ${props => props.theme.bgColor};
`;