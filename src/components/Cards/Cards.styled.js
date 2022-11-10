import styled from "styled-components";

export const CardContainer = styled.section`
  z-index: 0;
  width: 80%;
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 1rem;
  margin-bottom: 5rem;
  float: right;
  @media ( max-width: 1410px) {
    width: 70%;
  }
`

export const Card = styled.article`
  margin: 30px auto;
  width: 300px;
  height: 350px;
  border-radius: 20px;
  background: #aaaaaa;
  cursor: pointer;
  transition: 0.4s;
  margin: 0.5rem;
  &:hover {
    transform: translateY(-5%);
  }
  /* @media ( max-width: 1610px) {
    width: 250px;
    height: 250px;
    margin-top: 1.4rem;
  }
  @media ( max-width: 1400px) {
    width: 650px;
    height: 250px;
    margin-top: 1.4rem;
  }
  @media ( max-width: 1024px) {
    width: 650px;
    height: 250px;
    margin-top: 1.4rem;
  }
  @media ( max-width: 768px) {
    width: 350px;
    height: 250px;
    margin-top: 1.4rem;
  } */
`

export const CardImg = styled.div`
  width: inherit;
  height: inherit;
  border-radius: 20px;
  & img {
    width: inherit;
    height: inherit;
    border-radius: 20px;
    object-fit: cover;
  }
`
export const CardTitle = styled.div`
  text-align: center;
  font-weight: bold;
  margin-top: -80px;
  height: 40px;
  & p {
    color: white;
  }
  & span {
    color: gray;
  }
`

export const CardContent = styled.h2`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 1.4rem;
  font-size: 1.3rem;
  width: 90%;
`