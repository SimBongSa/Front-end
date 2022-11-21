import styled from "styled-components"

export const MyActivityContainer = styled.section`
  padding: 4rem 0;
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 60px)) 1fr;
  grid-gap: 2rem;
`

export const MyActivityCards = styled.div`
  grid-column: 2 / span 12;
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 60px));
  grid-gap: 2rem;
`

export const Card = styled.div`
  grid-column-end: span 4;
  background-color: #39393b;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.5s ease;
  @media screen and (max-width: 768px) {
    grid-column-end: span 6;
  }
  @media screen and (max-width: 425px) {
    grid-column-end: span 12;
  }
  &:hover {
    transform: translateY(-0.5rem);
  }
`

export const ImgWrapper = styled.div`
  width: 100%;
  padding-top: 56.5%;
  overflow: hidden;
  border-radius: 6px 6px 0 0;
  position: relative;
  background: #aaaaaa;
`

export const Content = styled.div`
  padding: 1.5rem;
  & .title {
    font-size: 1.4rem;
    color: #fff;
    margin-bottom: 1.5rem;
  }
`

export const CardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .price {
    padding: 0.5rem 1rem;
    border-radius: 12rem;
    background-color: #303032;
  }
`