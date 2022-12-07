import styled from "styled-components";

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

export const StTitleBox = styled.div`
	display: flex;
	& div {
		margin-left: 1rem;
		padding-top: 8px;
		font-weight: bolder;
		color: ${props => props.theme.notiColor};
	}
`;

export const DetailContent = styled.div`
	float: left;
	width: 60%;
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
export const MapWrapper = styled.div`
	width: 100%;
	margin-top: 2rem;
	margin-bottom: 2rem;
`;

export const StImgWrapper = styled.span`
	width: 40px;
	height: 40px;
	overflow: hidden;
	border-radius: 50%;
	position: relative;
	margin-left: auto;
	& img {
		cursor: pointer;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const StContentBox = styled.span`
	display: flex;
	margin-top: 1.5rem;
	margin-bottom: 2rem;
`;
export const StAreaBox = styled.span`
	display: flex;
	justify-content: space-between;
	margin-top: 1.5rem;
	margin-bottom: 2rem;
	& > div {
		color: ${props => props.theme.textColor};
		padding: 5px 10px;
	}
`;

export const StArea = styled.span`
	padding: 5px 10px;
	border-radius: 15px;
	background-color: gray;
	font-weight: 300;
	max-width: 350px;
	color: ${props => props.theme.bgColor};
`;

export const StDetailTag = styled.div`
	font-size: 1rem;
	display: flex;
	gap: 12px;
	margin-top: 1.5rem;
	margin-bottom: 2rem;
	& div {
		text-align: center;
		min-width: 115px;
		padding: 8px 16px;
		background: #fbfbf9;
		border-radius: 12px;
		color: ${props => props.theme.subBtnColor};
		background-color: whitesmoke;
	}
`;
