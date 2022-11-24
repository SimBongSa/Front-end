import { MainSlider } from "./MainBg.styled";

const MainBg = ({ image }) => {
  return (
    <MainSlider>
      <img src={image} loading="lazy" alt="" />
    </MainSlider>
  )
};

export default MainBg;