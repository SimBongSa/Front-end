import styled, { css } from "styled-components";

export const StCardGridContainer = styled.section`
	${({ variant }) => {
		switch (variant) {
			case "Board":
				return css`
					display: grid;
					width: 70%;
					grid-template-columns: 0fr repeat(12, minmax(auto, 60px)) 12fr;
					margin: 3rem 0px 2rem 10rem;
					justify-items: center;
				`;
			case "userEnroll":
				return css`
					grid-template-columns: 0fr repeat(0, minmax(auto, 60px)) 10fr;
					justify-items: center;
					margin-bottom: 2rem;
				`;
			case "Company":
				return css`
					grid-template-columns: 0fr repeat(0, minmax(auto, 60px)) 10fr;
					justify-items: center;
					margin-bottom: 2rem;
				`;
			default:
				break;
		}
	}}
`;

export const StCards = styled.div`
	${({ variant }) => {
		switch (variant) {
			case "Board":
				return css`
					display: grid;
					grid-column: ${props => props.gridColumn} / span 14;
					grid-template-columns: repeat(16, minmax(auto, 120px));
					grid-gap: 1.5rem;
					gap: 5rem;
					@media screen and (max-width: 1440px) {
						grid-template-columns: repeat(16, minmax(auto, 60px));
					}
					@media screen and (max-width: 1024px) {
						grid-column: ${props => props.gridColumn} / span 4;
						grid-template-columns: repeat(12, minmax(auto, 60px));
					}
				`;
			case "userEnroll":
				return css`
					display: grid;
					grid-column: ${props => props.gridColumn} / span 12;
					grid-template-columns: repeat(20, minmax(auto, 120px));
					grid-gap: 1.5rem;
					@media screen and (max-width: 1440px) {
						grid-template-columns: repeat(12, minmax(auto, 60px));
					}
					@media screen and (max-width: 1024px) {
						grid-template-columns: repeat(12, minmax(auto, 60px));
					}
				`;
			case "Company":
				return css`
					display: grid;
					grid-column: ${props => props.gridColumn} / span 2;
					grid-template-columns: repeat(3, minmax(auto, 120px));
					grid-gap: 1.5rem;
					@media screen and (max-width: 1440px) {
						grid-template-columns: repeat(3, minmax(auto, 60px));
					}
					@media screen and (max-width: 1024px) {
						grid-template-columns: repeat(12, minmax(auto, 60px));
					}
				`;
			default:
				break;
		}
	}}
`;

export const StCard = styled.div`
	${({ variant }) => {
		switch (variant) {
			case "Board":
				return css`
					grid-column-end: span 5;
					border-radius: 6px;
					max-width: 25rem;
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
			case "userEnroll":
				return css`
					border-radius: 6px;
					width: 18rem;
					height: fit-content;
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
			case "Company":
				return css`
					border-radius: 6px;
					width: 18rem;
					height: fit-content;
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
			default:
				break;
		}
	}}
`;

export const StImgWrapper = styled.div`
	${({ variant }) => {
		switch (variant) {
			case "Board":
				return css`
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
			case "userEnroll":
				return css`
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
			case "Company":
				return css`
					width: 100%;
					overflow: hidden;
					border-radius: 12px;
					position: relative;
					& img {
						width: 100%;
						height: 300px;
						object-fit: cover;
					}
					:hover {
						& img {
							-webkit-filter: blur(20px);
						}
					}
				`;
			default:
				break;
		}
	}}
`;

export const StContent = styled.div`
	${({ variant }) => {
		switch (variant) {
			case "Board":
				return css`
					padding: 1rem;
					padding-top: 20px;
					background-color: transparent;
					& .title {
						text-align: start;
						font-size: 1.5rem;
						font-weight: 500;
						color: ${props => props.theme.textColor};
						margin-bottom: 20px;
					}
				`;
			case "userEnroll":
				return css`
					padding-top: 12px;
					background-color: transparent;
					& .title {
						text-align: start;
						font-size: 1rem;
						font-weight: 500;
						color: ${props => props.theme.textColor};
						margin-bottom: 20px;
					}
				`;
			case "Company":
				return css`
					padding-top: 12px;
					background-color: transparent;
					& .title {
						text-align: start;
						font-size: 1rem;
						font-weight: 500;
						color: ${props => props.theme.textColor};
						margin-bottom: 20px;
					}
				`;
			default:
				break;
		}
	}}
`;

export const StCardInfo = styled.div`
	${({ variant }) => {
		switch (variant) {
			case "Board":
				return css`
					display: flex;
					justify-content: space-between;
					align-items: center;
					/* color: ${props => props.theme.textColor}; */
					text-align: center;
				`;
			case "userEnroll":
				return css`
					display: flex;
					align-items: center;
					text-align: center;
				`;
			case "Company":
				return css`
					display: flex;
					align-items: center;
					text-align: center;
				`;
			default:
				break;
		}
	}}
`;

export const StArea = styled.div`
	${({ variant }) => {
		switch (variant) {
			case "Board":
				return css`
					font-size: .8rem;
					max-width: 200px;
					min-width: 50px;
					color: ${props => props.theme.bgColor};
					background-color: ${props => props.theme.subTextColor};
					border-radius: 17px;
					padding: 5px 10px;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				`;
			case "userEnroll":
				return css`
					font-size: 0.5rem;
					max-width: 150px;
					min-width: 50px;
					color: ${props => props.theme.bgColor};
					background-color: ${props => props.theme.subTextColor};
					border-radius: 17px;
					padding: 5px 10px;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				`;
			case "Company":
				return css`
					font-size: 0.5rem;
					max-width: 150px;
					min-width: 50px;
					color: ${props => props.theme.bgColor};
					background-color: ${props => props.theme.subTextColor};
					border-radius: 17px;
					padding: 5px 10px;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				`;
			default:
				break;
		}
	}}
`;

export const StDetailArea = styled.div`
	${({ variant }) => {
		switch (variant) {
			case "Board":
				return css`
					color: ${props => props.theme.textColor};
					padding: 5px;
					text-align: center;
					margin-left: 1rem;
				`;
			case "userEnroll":
				return css`
					color: ${props => props.theme.textColor};
					padding: 5px;
					text-align: center;
					font-size: 0.5rem;
					margin-left: 0.5rem;
				`;
			case "Company":
				return css`
					color: ${props => props.theme.textColor};
					padding: 5px;
					text-align: center;
					font-size: 0.5rem;
					margin-left: 0.5rem;
				`;
			default:
				break;
		}
	}}
`;

export const StDate = styled.div`
	${({ variant }) => {
		switch (variant) {
			case "Board":
				return css`
					width: 4rem;
					height: 2rem;
					font-weight: 500;
					padding-top: 8px;
					margin-top: 15px;
					margin-left: 15px;
					text-align: center;
					border-radius: 12rem;
					color: ${props => props.theme.notiColor};
					background-color: ${props => props.theme.bgColor};
					z-index: 1;
					position: absolute;
				`;
			case "userEnroll":
				return css`
					width: 3rem;
					height: 1.5rem;
					font-size: small;
					font-weight: 500;
					padding: 5px 5px;
					margin-top: 15px;
					margin-left: 15px;
					text-align: center;
					border-radius: 12rem;
					color: ${props => props.theme.notiColor};
					background-color: ${props => props.theme.bgColor};
					z-index: 1;
					position: absolute;
				`;
			case "Company":
				return css`
					width: 3rem;
					height: 1.5rem;
					font-size: small;
					font-weight: 500;
					padding: 5px 5px;
					margin-top: 15px;
					margin-left: 15px;
					text-align: center;
					border-radius: 12rem;
					color: ${props => props.theme.notiColor};
					background-color: ${props => props.theme.bgColor};
					z-index: 1;
					position: absolute;
				`;
			default:
				break;
		}
	}}
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
		color: ${props => props.theme.bgColor};
		font-weight: 400;
		border-radius: 3px;
		padding: 2.5px 10px;
		margin: 0 10px 10px 0;
		padding-top: 4px;
		cursor: pointer;
		user-select: none;
		transition: background-color 0.3s;
		&:hover {
			background-color: ${props => props.theme.btnColor};
			color: ${props => props.theme.bgColor};
		}
	}
`;

export const StHoverBox = styled.div`
	display: flex;
	justify-content: space-evenly;
	gap: 12px;

	:hover {
	}
	& div {
		width: 4rem;
		height: 4rem;
		border: 1px solid ${props => props.theme.btnColor};
		border-radius: 50%;
		text-align: center;
		padding: 22px 10px;
		position: absolute;
		z-index: 99;
		top: 40%;
		left: 20%;
		display: block;
		margin-right: 2rem;
		color: ${props => props.theme.bgColor};
		background: ${props => props.theme.btnColor};
	}
	& span {
		width: 4rem;
		height: 4rem;
		border: 1px solid ${props => props.theme.notiColor};
		border-radius: 50%;
		text-align: center;
		padding: 22px 10px;
		position: absolute;
		z-index: 99;
		top: 40%;
		right: 20%;
		display: block;
		margin-left: 2rem;
		color: ${props => props.theme.bgColor};
		background: ${props => props.theme.notiColor};
	}
`;
