import styled from "styled-components";
import Header from "../components/Header/Header"
import CompanyPage from "../components/MyPage/CompanyPage/CompanyPage"

export const MyPageCompany = () => {
  return (
    <div>
      <Header />
      <CompanyPage/>
    </div>
  );
};

export const Test = styled.h1`
  display: flex;
  margin-top: 10rem;
  margin-left: 3rem;
  width: 80%;
  float: right;
  text-align: left;
  @media (max-width: 1515px) {
    width: 79%;
  }
  @media (max-width: 1400px) {
    width: 70%;
  }
`;
