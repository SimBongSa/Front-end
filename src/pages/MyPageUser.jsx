import Header from "../components/Header/Header";
import Mypage from "../components/CustomerMypage/CustomerProfile/CustomerMypage";
import CustomerCalendr from "../components/Calendar/CustomerCalendar";
import Card from "../components/Cards/Cards";
import styled from "styled-components";
import CustomerReview from "../components/CustomerMypage/CustomerReview/CustomerReview";
import Footer from "../components/Footer/Footer";

export const MyPageUser = () => {
  return (
    <>
      <Header />
      <Mypage />
      <CustomerCalendr />
      <Text>Upcoming Activity</Text>
      <CustomerReview />
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
