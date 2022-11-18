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
  z-index: 4;
  &:hover {
    bottom: 0;
  }
  @media ( max-width: 768px) {
    position: fixed;
    bottom: -120px;
  }
`