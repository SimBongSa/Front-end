import styled from "styled-components";
import MainCalendar from "../components/Calendar/MainCalendar";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainBg from "../components/MainBg/MainBg";
import { useSelector } from "react-redux";

export const MainPage = () => {

  const maindate = useSelector((state) => state.calendarList.calendarList);
  const boardList = useSelector((state) => state.boards.boards);
  console.log(boardList)

  return (
    <>
      <Header />
      <MainBg />
      <MainPageText>Urgent Activity</MainPageText>
      <Cards />
      <MainPageText>Search by Date</MainPageText>
      <MainCalendar />
      <Footer />
    </>
  );
};

export const MainPageText = styled.span`
  display: flex;
  align-items: center;
  margin: 1rem;
  float: left;
  width: 15%;
  font-size: 2.8rem;
  vertical-align: middle;
  height: 350px;
`;
