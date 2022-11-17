import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BoardList from "../components/BoardList/BoardList";
import KaMap from "../components/Map/KaMap";

export const BoardListPage = () => {
  return (
    <>
      <Header />
      <BoardList />
      <KaMap />
      <Footer />
    </>
  );
};

export default BoardListPage;
