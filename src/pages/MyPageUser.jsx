import Header from "../components/Header/Header";
import Mypage from "../components/Mypage/Mypage";
import CustomerCalendr from "../components/Calendar/CustomerCalendar";
import Card from "../components/Cards/Cards";
import styled from "styled-components";
import Review from "../components/Review/Review";
import Footer from "../components/Footer/Footer";

export const MyPageUser = () => {
  return (
    <>
      <Header />
      <Mypage />
      <CustomerCalendr />
      <Text>Upcoming Activity</Text>
      <Card />
      <Text>My Reviews</Text>
      <Review />
      <Review />
      <Review />
      <Review />
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
  @media (max-width: 1515px) {
    width: 79%;
  }
  @media (max-width: 1400px) {
    width: 70%;
  }
`;
