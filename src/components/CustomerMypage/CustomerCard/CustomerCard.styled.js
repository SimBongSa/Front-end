import styled from "styled-components";

// export const CustomerReviewContainer = styled.div`
//   margin-top: 1rem;
//   width: 20rem;
//   height: 8rem;
//   background-color: #ffffff;
//   border-radius: 15px;
//   border-style: outset;
//   margin-bottom: 3rem;
//   display: inline-block;
//   margin-left: 25rem;
//   cursor: pointer;
//   transition: 0.4s;
//   &:hover {
//     transform: translateY(-5%);
//   }
// `;

// export const StartBox = styled.div`
//   display: flex;
//   float: right;
//   margin-right: 0.5rem;
// `;

export const More = styled.span`
  display: inline-block;
  margin-left: 9rem;
  width: 80%;
  text-align: right;
`;

export const CustomerCardContainer = styled.div`
  z-index: 0;
  width: 75%;
  max-width: 100%;
  width: 20rem;
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 1rem;
  margin-bottom: 5rem;
  float: left;
  overflow: auto;
  white-space: nowrap;
  transition: all 0.5s;
`;

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
`;

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
`;
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
`;

export const CardContent = styled.h2`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 1.4rem;
  font-size: 1.3rem;
  width: 90%;
`;
