import styled from "styled-components";

export const VoidContainer = styled.div``;

export const ContentWrap = styled.div`
	& h1 {
		margin-top: 30px;
		font-size: 18px;
		color: white;
		display: flex;
		flex-direction: row;
		text-align: right;
	}
`;

export const TitleWrap = styled.div`
	margin-top: 30px;
	font-size: 18px;
	line-height: 1.5;
	color: white;
	display: flex;
	flex-direction: column;
	text-align: center;

	& h1 {
		text-align: center;
		font-size: 40px;
		& span {
			color: ${props => props.theme.btnColor};
		}
	}

	& h2 {
		text-align: center;
		font-size: 30px;
		padding-bottom: 30px;
		border-bottom: 2px solid ${props => props.theme.btnColor};
		margin-bottom: 20px;

		& span {
			color: ${props => props.theme.btnColor};
		}
	}
`;

export const Image = styled.img`
	cursor: pointer;
	width: 400px;
	height: 350px;
	border-radius: 30px;
	padding: 10px;
	margin: 10px 30px 20px 60px;
`;
