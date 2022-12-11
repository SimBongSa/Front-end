import styled from "styled-components";

export const CarouselContainer = styled.div`
	margin: auto;
	margin-top: 8rem;
	min-height: fit-content;
	width: 80%;
	overflow: hidden;
	background-color: ${props => props.theme.subBgColor};
	& h1 {
		font-size: 1.6rem;
		font-weight: 300;
		color: ${props => props.theme.textColor};
	}
	&::before,
	&::after {
		content: "";
		height: 410px;
		position: absolute;
	}
	&::after {
		right: 0;
		top: 0;
		transform: rotateZ(180deg);
	}
	&::before {
		left: 0;
		top: 0;
	}
`;

export const TitleContainer = styled.div`
	margin: auto;
	width: 80%;
	margin-top: 1rem;
	margin-left: 200rem;
`;

export const SlideTrack = styled.div`
	animation: scroll 40s linear infinite;
	display: flex;
	width: calc(250px * 10);
	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(calc(-250px * 5));
		}
	}
`;

export const Slide = styled.div`
	margin: 1rem;
	width: 350px;
	color: black;
`;

export const StDetailArea = styled.div`
	color: ${props => props.theme.textColor};
	padding: 5px;
	text-align: center;
	margin-left: 1rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;
