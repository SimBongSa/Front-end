import styled from "styled-components";

export const FooterContainer = styled.section`
  width: 80%;
  display: flex;
  margin: 0 auto;
  margin-top: 5rem;
  height: 350px;
  background-color: #aaaaaa;
  border-radius: 15px;
`

export const FooterContent = styled.div`
  width: 55%;
  padding: 80px 0 0 30px;
`

export const FooterBtn = styled.button`
  cursor: pointer;
  width: 250px;
  padding: 1rem;
  border-radius: 15px;
  border: none;
  background-color: #232323;
  color: #fff;
  margin-top: 1rem;
  transition: all 0.4s;
  &:hover {
    transform: translateY(-5%);
  }
`