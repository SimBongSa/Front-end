import { useNavigate } from "react-router-dom";
import { HeaderContainer, HeaderLogo, HeaderMenu, HeaderMenuItem, HeaderRegister, LightThemeBtn } from "./Header.styled";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "../../context/themeProvider";

const Header = () => {

  const navigate = useNavigate();
  const [ThemeMode, toggleTheme] = useTheme();
  console.log(ThemeMode)

  return (
    <HeaderContainer>
      <HeaderLogo>VONGOLE</HeaderLogo>

      <HeaderMenu>
      <LightThemeBtn onClick={toggleTheme}><BsFillMoonFill/></LightThemeBtn>
        <HeaderMenuItem>Notice</HeaderMenuItem>
        <HeaderMenuItem>Message</HeaderMenuItem>
        <HeaderRegister
          onClick={() => {
            navigate("/login");
          }}
        >Login</HeaderRegister>
      </HeaderMenu>

    </HeaderContainer>
  )
};

export default Header;