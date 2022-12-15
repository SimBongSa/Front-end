import MainCalendar from "../components/Calendar/MainCalendar/MainCalendar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainBg from "../components/MainBg/MainBg";
import Carousel from "../components/common/carousel/Carousel";

export const MainPage = () => {
	return (
		<>
			<Header />
			<MainBg image={"image/vongoleBanner.jpeg"} />
			<Carousel />
			<MainCalendar />
			<Footer />
		</>
	);
};
