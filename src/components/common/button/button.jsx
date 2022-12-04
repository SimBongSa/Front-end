import { Stbtn } from "./Button.styled";

const Button = ({ children, ...props }) => {
	return <Stbtn {...props}>{children}</Stbtn>;
};

export default Button;
