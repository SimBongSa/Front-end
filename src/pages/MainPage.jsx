import Cards from "../components/Cards/Cards"
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
    </>
  )
}