import { useNavigate } from "react-router-dom";
import { HeaderContainer, HeaderLogo, HeaderMenu, HeaderMenuItem, HeaderRegister } from "./Header.styled";

const Header = () => {

  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderLogo>VONGOLE</HeaderLogo>

      <HeaderMenu>
        <HeaderMenuItem>Notice</HeaderMenuItem>
        <HeaderMenuItem>Message</HeaderMenuItem>
        <HeaderRegister
          onClick={() => {
            navigate("/register");
          }}
        >Register Organization</HeaderRegister>
      </HeaderMenu>

    </HeaderContainer>
  )
};

export default Header;