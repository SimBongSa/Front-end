import styled from "styled-components";

export const CarouselContainer = styled.div`
	margin: auto;
  margin-top: 5rem;
  min-height: fit-content;
  width: 80%;
	overflow: hidden;
  & h1 {
    font-size: 1.8rem;
    color: ${(props) => props.theme.textColor};
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
`

export const SlideTrack = styled.div`
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px * 10);
  @keyframes scroll {
    0% { transform: translateX(0); }
	  100% { transform: translateX(calc(-250px * 5))}
  }
`

export const Slide = styled.div`
  margin: 1rem;
  width: 350px;
  color: black;
`
