import styled from "styled-components";
import MainCalendar from "../components/Calendar/MainCalendar";
// import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainBg from "../components/MainBg/MainBg";
import MainCard from "../components/MainCard/MainCard";
import Carousel from "../components/common/carousel/Carousel";

export const MainPage = () => {

  // const boardList = useSelector((state) => state.boards.boards);

  return (
    <>
      <Header />
      <MainBg />
      <Carousel />
      {/* <MainCard/> */}
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
