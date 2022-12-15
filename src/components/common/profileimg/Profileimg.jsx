import { Profile } from "./Profileimg.styled";

const Profileimg = ({ ...props }) => {
	return <Profile src={process.env.PUBLIC_URL + 'image/64defaultimg.jpg'} {...props} />;
};

export default Profileimg;