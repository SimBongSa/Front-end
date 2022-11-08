import MainCalendar from "../components/Calendar/Calendar"
import Cards from "../components/Cards/Cards"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import MainBg from "../components/MainBg/MainBg"
import SearchBar from "../components/SearchBar/SearchBar"

export const MainPage = () => {
  return (
    <>
      <Header/>
      <MainBg/>
      <SearchBar/>
      <hr/>
      <h2>Urgent Activity</h2>
      <Cards/>
      <hr/>
      <h2>Search by Date</h2>
      <MainCalendar/>
      <hr/>
      <Footer/>
    </>
  )
};