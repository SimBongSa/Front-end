import Header from "../components/Header/Header";
import CustomerCalendr from "../components/Calendar/CustomerCalendar";
import styled from "styled-components";
import CustomerCard from "../components/CustomerMypage/CustomerCard/CustomerCard";
import Footer from "../components/Footer/Footer";
import CustomerMypage from "./../components/CustomerMypage/CustomerProfile/CustomerMypage";

export const MyPageUser = () => {
  return (
    <>
      <Header />
      <CustomerMypage />
      <CustomerCalendr />
      <Text>Upcoming Activity</Text>
      <CustomerCard />
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
