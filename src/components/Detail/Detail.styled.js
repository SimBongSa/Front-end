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
  background: #aaaaaa;
  padding: 2rem;
  & h1 {
    font-size: 2.3rem;
    color: black;
  }
  & h3 {
    font-size: 1.6rem;
    margin: 3rem 1rem 2rem 0rem;
    color: black;
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
  height: 300px;
  margin: 0rem 1rem 1rem 1rem;
  padding: 1rem;
  overflow: auto;
  background: #aaaaaa;
  & h2 {
    font-size: 1.4rem;
    text-align: center;
    padding: 1rem;
    border-bottom: 1px solid #232323;
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