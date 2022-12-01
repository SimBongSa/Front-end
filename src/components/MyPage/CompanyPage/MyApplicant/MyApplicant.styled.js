import styled from "styled-components";

export const AppliCard = styled.article`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  position: relative;
  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.66);
  border-radius: 10px;
  width: 80%;
  max-width: 1180px;
  margin: 0 0 2rem 0;
  overflow: hidden;
  cursor: pointer;
  color: ${(props) => props.theme.textColor};
  background: ${(props) => props.theme.bgColor};
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(-70deg, #424242, transparent 50%);
    opacity: 1;
    border-radius: 10px;
  }
  & .bar {
    width: 100px;
    height: 20px;
    margin: 10px 0;
    border-radius: 5px;
    background-color: #424242;
    transition: all 0.5s ease;
  }
  &:hover .bar {
    background: ${(props) => props.theme.btnColor};
    width: 250px;
  }
  &:hover img {
    transform: scale(1.1);
  }
  &:hover h1 {
    color: ${(props) => props.theme.btnColor};
  }
  &:nth-child(2) {
    margin-top: 5rem;
  }
  @media screen and (max-width: 1280px){
    width: 500px;
  }
  @media screen and (max-width: 768px){
    width: 400px;
  }
`

export const AppliCardImg = styled.div`
  display: contents;
  max-height: 180px;
  width: 100%;
  object-fit: cover;
  position: relative;
  & img {
    height: 250px;
    width: 150px;
    object-fit: cover;
    position: relative;
    transition: all 0.3s linear;
    @media screen and (max-width: 1350px){
      width: 100%;
    }
  }
`

export const AppliCardText = styled.div`
  padding: 1.5rem;
  width: 80%;
  position: relative;
  display: flex;
  flex-direction: column;
  & h1 {
    font-size: 1.2rem;
    margin-bottom: 5px;
    transition: color 0.5s ease;
  }
  & time {
    font-size: 80%;
  }
  @media screen and (min-width: 1024px){
    padding: 2rem 3.5rem;
    &::before {
      content: "";
      position: absolute;
      display: block;
      top: -20%;
      height: 130%;
      width: 55px;
    }
  }
`

export const PreviewText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
  height: 100%;
`

export const AppliBtnWrap = styled.div`
  display: flex;
  position: absolute;
  right: -1px;
  & button {
    cursor: pointer;
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 15px;
    margin-right: 1rem;
  }
  @media screen and (max-width: 1350px){
    right: -8rem;
  }
  @media screen and (max-width: 1280px){
    right: -5rem;
  }
`