import { MainSlider } from "./MainBg.styled";

const MainBg = ({ image }) => {
	return (
		<MainSlider>
			<img src={image} alt="" />
		</MainSlider>
	);
};

export default MainBg;
