import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 3rem;
  min-height: 100vh;
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: space-around;
    flex-direction: column-reverse;
  }
`

export const DetailContent = styled.div`
  float: left;
  width: 60%;
  min-width: 600px;
  padding: 2rem;
  color: ${(props) => props.theme.textColor};
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
`

export const MapWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
`

export const DetailSide = styled.div`
  position: sticky;
  position: -webkit-sticky; 
  top: 7rem;
  right: 1rem;
  bottom: 10rem;
  float: right;
  min-width: 300px;
  width: 400px;
  height: fit-content;
  margin: 0rem 1rem 1rem 1rem;
  padding: 1rem;
  background: #aaaaaa;
  & h2 {
    font-size: 1.2rem;
    text-align: center;
    padding: .4rem;
    border-bottom: 1px solid #232323;
  }
  & img {
    display: flex;
    border-radius: 50%;
    width: 150px;
    margin: 0 auto;
  }
  @media screen and (max-width: 1024px) {
    position: relative;
    width: 600px;
    margin-bottom: 5rem;
  }
`

export const DetailNavBtn = styled.h2`
  cursor: pointer;
  border: none;
  border-radius: 15px;
  background: white;
  color: black;
  margin: 0.4rem;
`