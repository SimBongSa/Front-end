import styled from "styled-components";

export const MainSlider = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 10rem;
  height: 40rem;
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 15px;
    display: inline-block;
    content: "";
  }
`