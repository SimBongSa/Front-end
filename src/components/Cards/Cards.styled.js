import styled from "styled-components";

export const CardContainer = styled.div`
  z-index: 0;
  width: 75%;
  min-width: 1160px;
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 1rem;
  margin-bottom: 5rem;
  float: right;
  overflow: auto;
  white-space: nowrap;
  transition: all 0.5s;
  overflow: hidden;
`

export const Card = styled.article`
  margin: 0px auto;
  width: 250px;
  height: 300px;
  border-radius: 20px;
  background: #aaaaaa;
  cursor: pointer;
  transition: 0.4s;
  margin: 0.5rem;
  &:hover {
    transform: translateY(-5%);
  }
  @media ( max-width: 1610px) {
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
  }
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

export const CardMoveLeftBtn = styled.button`
  position: absolute;
  cursor: pointer;
  top: 60rem;
  left: 17rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  background-color: rgba(0,0,0,0.7);
  color: white;
  z-index: 6;
  user-select: none;
`

export const CardMoveRightBtn = styled.button`
  position: absolute;
  cursor: pointer;
  top: 60rem;
  right: 5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  background-color: rgba(0,0,0,0.7);
  color: white;
  z-index: 6;
  user-select: none;
`