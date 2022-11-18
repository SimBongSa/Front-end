import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  position: relative;
  margin: 2.5rem;
  min-height: 100vh;
`

export const DetailContent = styled.div`
  float: left;
  width: 60%;
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
`

export const MapWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
`

export const DetailNav = styled.div`
  display: flex;
  flex-direction: column;
  float: right;
  width: 40%;
  z-index: 1;
  height: 300px;
  margin: 1rem;
  padding: 1rem;
  background: #aaaaaa;
  & h2 {
    font-size: 1.4rem;
    text-align: center;
    padding: 1rem;
    border-bottom: 1px solid #232323;
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