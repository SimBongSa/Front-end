import styled from "styled-components";

export const MyPageCards = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 10rem;
  margin-left: 20rem;
  & h1 {
    font-size: 2rem;
    margin: 1rem;
  }
  @media ( max-width: 1024px) {
    margin: 0 auto;
    margin-top: 10rem;
    margin-left: 5rem;
    /* float: left; */
  }
`