import { useNavigate } from "react-router-dom";
import { HeaderContainer, HeaderLogo, HeaderMenu, HeaderMenuItem, HeaderRegister, LightThemeBtn } from "./Header.styled";
import { BsFillMoonFill } from "react-icons/bs";
import { useState } from "react";
import { useTheme } from "../../context/themeProvider";

const Header = () => {

  const navigate = useNavigate();
  const [ThemeMode, toggleTheme] = useTheme();
  // const [theme, setTheme] = useState(window.localStorage.getItem('theme'));

  // const toggleTheme = () => {
  //   if (theme === "dark") {
  //     setTheme("light");
  //     window.localStorage.setItem('theme', "light");
  //   } else {
  //     setTheme("dark");
  //     window.localStorage.setItem('theme', "dark")
  //   }
  // };
  // console.log(theme)

  return (
    <HeaderContainer>
      <HeaderLogo>VONGOLE</HeaderLogo>

      <HeaderMenu>
        <LightThemeBtn onClick={toggleTheme}>
          <BsFillMoonFill/>
        </LightThemeBtn>
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