import { Profile } from "./Profileimg.styled";

const Profileimg = ({ children, ...props }) => {
	return <Profile {...props}>{children}</Profile>;
};

export default Profileimg;
