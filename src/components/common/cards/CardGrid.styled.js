import styled from "styled-components";

export const StCardGridContainer = styled.section`
	display: grid;
	grid-template-columns: 0fr repeat(0, minmax(auto, 60px)) 10fr;
	margin: 3rem 1rem 1rem 1rem;
	justify-items: center;
`;

export const StCards = styled.div`
	display: grid;
	grid-column: ${props => props.gridColumn} / span 12;
	grid-template-columns: repeat(20, minmax(auto, 120px));
	grid-gap: 1.5rem;
	@media screen and (max-width: 1440px) {
		grid-template-columns: repeat(16, minmax(auto, 60px));
	}
	@media screen and (max-width: 1024px) {
		grid-template-columns: repeat(12, minmax(auto, 60px));
	}
`;

export const StCard = styled.div`
	grid-column-end: span 5;
	border-radius: 6px;
	min-width: 280px;
	min-height: 300px;
	margin-bottom: 2rem;
	cursor: pointer;
	transition: all 0.5s ease;
	background-color: ${props => props.theme.bgColor};

	@media screen and (max-width: 1024px) {
		grid-column-end: span 6;
	}
	@media screen and (max-width: 768px) {
		grid-column-end: span 12;
	}
	&:hover {
		transform: translateY(-0.5rem);
	}
`;

export const StImgWrapper = styled.div`
	width: 100%;
	overflow: hidden;
	border-radius: 12px;
	position: relative;
	& img {
		width: 100%;
		height: 300px;
		object-fit: cover;
	}
`;

export const StContent = styled.div`
	padding-top: 12px;
	background-color: transparent;
	& .title {
		text-align: start;
		font-size: 1.5rem;
		font-weight: bolder;
		color: ${props => props.theme.textColor};
		margin-bottom: 20px;
	}
`;

export const StCardInfo = styled.div`
	display: flex;
	font-size: 0.8rem;
	align-items: center;
	/* color: ${props => props.theme.textColor}; */
	text-align: center;
`;

export const StArea = styled.div`
	max-width: 250px;
	min-width: 50px;
	color: ${props => props.theme.bgColor};
	background-color: ${props => props.theme.subTextColor};
	border-radius: 17px;
	padding: 5px 10px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;

export const StDetailArea = styled.div`
	color: ${props => props.theme.textColor};
	padding: 5px;
	text-align: center;
	margin-left: 1rem;
`;

export const StDate = styled.div`
	width: 4rem;
	height: 2rem;
	padding-top: 8px;
	margin-top: 18px;
	margin-left: 20px;
	text-align: center;
	border-radius: 12rem;
	color: ${props => props.theme.notiColor};
	background-color: ${props => props.theme.bgColor};
	z-index: 1;
	position: absolute;
	font-weight: bolder;
`;

export const StTagBox = styled.ul`
	display: flex;
	font-size: 12px;
	margin: 10px 0 0 0;
	padding: 0;
	margin-top: 1rem;
	& li {
		display: inline-block;
		background-color: ${props => props.theme.subTextColor};
		/* color: ${props => props.theme.textColor}; */
		color: white;
		border-radius: 3px;
		padding: 2.5px 10px;
		margin: 0 10px 10px 0;
		cursor: pointer;
		user-select: none;
		transition: background-color 0.3s;
		&:hover {
			background-color: ${props => props.theme.btnColor};
			color: ${props => props.theme.bgColor};
		}
	}
`;
