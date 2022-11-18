import styled from "styled-components";

export const MainSlider = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 15rem;
  width: 80%;
  height: 30rem;
  background: gray;
  border-radius: 15px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    display: inline-block;
    content: "";
  }
`