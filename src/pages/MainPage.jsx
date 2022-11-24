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
			<MainBg image={"image/banner.png"} />
			<Carousel />
			<MainCalendar />
			<Footer />
		</>
	);
};
