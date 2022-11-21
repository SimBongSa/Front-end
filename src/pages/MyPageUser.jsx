import Header from "../components/Header/Header";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import UserPage from "../components/MyPage/UserPage/UserPage";

export const MyPageUser = () => {
  return (
    <>
      <Header />
      <UserPage/>
      <Footer />
    </>
  );
};

export const Text = styled.h1`
  display: flex;
  margin-top: 5rem;
  margin-left: 3rem;
  width: 80%;
  float: right;
  text-align: left;
`;
