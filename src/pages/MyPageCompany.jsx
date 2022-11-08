import styled from "styled-components";
import Header from "../components/Header/Header"
import Profile from "../components/MyPage/Profile/Profile"
import Cards from "../components/Cards/Cards"

export const MyPageCompany = () => {
  return (
    <div>
      <Header/>
      <Profile/>
      <Test>My Activity</Test>
      <Cards/>
    </div>
  )
};

export const Test = styled.h1`
  display: flex;
  margin-top: 10rem;
  margin-left: 3rem;
  width: 80%;
  float: right;
  text-align: left;
  @media ( max-width: 1515px) {
    width: 79%;
  }
  @media ( max-width: 1400px) {
    width: 70%;
  }
`