import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BoardList from "../components/BoardList/BoardList";
// import Loading from "../components/Loadaing/Loading";
import { useSelector } from "react-redux";

export const BoardListPage = () => {
	const isLoading = useSelector(state => state.boards.boards);
	console.log(isLoading);
	return (
		<>
			<Header />
			<BoardList />
			{/* <Loading /> */}
			<Footer />
		</>
	);
};

export default BoardListPage;
