import styled from "styled-components";

export const ReviewContainer = styled.div`
  width: 80rem;
  height: 8rem;
  background-color: #ffffff;
  border-radius: 15px;
  border-style: outset;
  margin-bottom: 3rem;
  display: inline-block;
  margin-left: 25rem;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    transform: translateY(-5%);
  }
`;

export const StartBox = styled.div`
  display: flex;
  float: right;
  margin-right: 0.5rem;
`;
