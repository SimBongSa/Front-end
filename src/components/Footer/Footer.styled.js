import styled from "styled-components";

export const FooterContainer = styled.section`
  display: flex;
  position: fixed;
  bottom: -110px;
  flex-flow: row wrap;
  margin: 0 auto;
  background: rgb(55,55,55);
  width: 100%;
  padding: 1rem;
  transition: all 0.3s;
  z-index: 10;
  &:hover {
    bottom: 0;
  }
  @media ( max-width: 768px) {
    position: fixed;
    bottom: -120px;
  }
`

export const FooterUl = styled.ul`
  width: 33.3333%;
  & li {
    padding-bottom: 10px;
    & h4 {
      transition: all 0.5s;
      padding: 10px 0 5px 0;
      color: #fff;
      font-size: 1.4rem;
    }
  }
`

export const FooterItem = styled.li`
  cursor: pointer;
  width: fit-content;
  font-size: 0.8rem;
  margin-left: 3px;
  color: #8DB9ED;
  transition: all 0.5s;
  &:hover {
    color: #ccc
  }
`

export const FooterBottom = styled.section`
  width: 100%;
  padding: 1rem;
  border-top: 1px solid #ccc;
  margin-top: 10px;
  font-size: 1rem;
`