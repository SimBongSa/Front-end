import { Stbtn } from "./button.styled";

const Button = ({ children, ...props }) => {
	return <Stbtn {...props}>{children}</Stbtn>;
};

export default Button;
