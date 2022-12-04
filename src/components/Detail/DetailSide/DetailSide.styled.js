import styled from "styled-components";

export const DetailSide = styled.div`
	position: sticky;
	position: -webkit-sticky;
	top: 7rem;
	right: 1rem;
	bottom: 10rem;
	width: 28rem;
	height: 25rem;
	margin: 0rem 5rem 1rem 1rem;
	padding: 1rem;
	background: ${props => props.theme.bgColor};
	@media screen and (max-width: 1024px) {
		position: relative;
		width: 600px;
		margin-bottom: 5rem;
	}
	box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
	border-radius: 12px;
`;

export const StDateBox = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 1rem;

	& div {
		font-size: 1.5rem;
		font-weight: 500;
		margin-right: 1rem;
		margin-left: 1rem;
		padding: 5px 12px;
		border-radius: 16px;
		border: 0.5px solid ${props => props.theme.subBtnColor};
		color: "#484848";
	}
`;
export const DetailNavBtn = styled.div`
	border: 1px solid solid ${props => props.theme.subBtnColor};
	border-radius: 15px;
	background: white;
	color: ${props => props.theme.textColor};
	margin: 0.4rem;
	cursor: pointer;
`;

export const StBtnBox = styled.div`
	margin-top: 3rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export const StApplyBtn = styled.div`
	text-align: center;
	padding: 15px 20px;
	margin-bottom: 1rem;
	width: 20rem;
	height: 3rem;
	border-radius: 24px;
	color: ${props => props.theme.bgColor};
	background-color: ${props => props.theme.btnColor};
	cursor: pointer;
`;

export const StChatBtn = styled.div`
	text-align: center;
	padding: 15px 20px;
	margin-bottom: 1rem;
	width: 20rem;
	height: 3rem;
	border-radius: 24px;
	color: ${props => props.theme.btnColor};
	background-color: ${props => props.theme.bgColor};
	border: 1px solid ${props => props.theme.btnColor};
	cursor: pointer;
`;

export const DetailSideItem = styled.div`
	margin: 1rem;
	margin-top: 1rem;
	padding-top: 2rem;
	& div {
		line-height: 1.5em;
		color: ${props => props.theme.textColor};
	}
`;
