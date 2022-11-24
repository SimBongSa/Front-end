import styled from "styled-components";

export const CardGridContainer = styled.section`
	display: grid;
	grid-template-columns: 2fr repeat(6, minmax(auto, 60px)) 12fr;
	grid-gap: 1rem;
	margin: 1rem;
	margin-bottom: 5rem;
	justify-items: center;
`;

export const Cards = styled.div`
	display: grid;
	grid-column: ${props => props.gridColumn} / span 10;
	grid-template-columns: repeat(20, minmax(auto, 120px));
	grid-gap: 1.5rem;
	@media screen and (max-width: 1440px) {
		grid-template-columns: repeat(8, minmax(auto, 60px));
	}
	@media screen and (max-width: 1024px) {
		grid-template-columns: repeat(12, minmax(auto, 60px));
	}
`;

export const Card = styled.div`
	grid-column-end: span 4;
	background-color: #39393b;
	border-radius: 6px;
	cursor: pointer;
	min-width: 300px;
	transition: all 0.5s ease;
	min-height: 450px;
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

export const ImgWrapper = styled.div`
	width: 100%;
	overflow: hidden;
	border-radius: 6px 6px 0 0;
	position: relative;
	background: #232323;
	& img {
		width: 100%;
		height: 250px;
		object-fit: cover;
	}
`;

export const Content = styled.div`
	padding: 1.5rem;
	& .title {
		font-size: 1.4rem;
		color: #fff;
		margin-bottom: 1rem;
	}
`;

export const CardInfo = styled.div`
  display: flex;
  font-size: .8rem;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.textColor};
  & p {
    max-width: 180px;
    overflow: hidden;
  }
  & .price {
    width: 65px;
    text-align: center;
    padding: 0.5rem 1rem;
    border-radius: 12rem;
    color: ${(props) => props.theme.notiColor};
    background-color: #303032;
  }
`

export const TagBox = styled.ul`
  display: flex;
  flex-flow: row wrap;
  font-size: 12px;
  margin: 10px 0 0 0;
  padding: 0;
  justify-content: center;
  margin-top: 1rem;
  & li {
    display: inline-block;
    background: ${(props) => props.theme.subTextColor};
    color: ${(props) => props.theme.textColor};
    border-radius: 3px;
    padding: 2.5px 10px;
    margin: 0 10px 10px 0;
    cursor: pointer;
    user-select: none;
    transition: background-color 0.3s;
    &:hover {
      background: ${(props) => props.theme.btnColor};
      color: ${(props) => props.theme.bgColor};
    }
  }
`
