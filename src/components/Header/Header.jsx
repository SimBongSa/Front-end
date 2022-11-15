import { useNavigate } from "react-router-dom";
import { HeaderContainer, HeaderLogo, HeaderMenu, HeaderMenuItem, HeaderRegister, LightThemeBtn, UserIcon } from "./Header.styled";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "../../context/themeProvider";
import { getCookieToken } from "../../utils/cookie";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { removeCookie } from "../../utils/cookie";

const Header = () => {

  const navigate = useNavigate();
  const [ThemeMode, toggleTheme] = useTheme();
  const [cookies] = useCookies(["Authorization"])

  useEffect(() => {
    getCookieToken();
  })

  const isLogin = cookies['access-token'];

  const logOut = () => {
    removeCookie(['access-token'], { path: '/' });
    removeCookie(['username'], { path: '/' });
    localStorage.removeItem("refresh-token");
    // navigate("/login");
  }

  return (
    <HeaderContainer>
      <HeaderLogo onClick={() => navigate("/")}>VONGOLE</HeaderLogo>
      <HeaderMenu>
      <LightThemeBtn onClick={toggleTheme}>
        <BsFillMoonFill/>
      </LightThemeBtn>
      {
        isLogin ? (
          <>
            <HeaderMenuItem>Notice</HeaderMenuItem>
            <HeaderMenuItem>Messagse</HeaderMenuItem>
            <HeaderMenuItem onClick={logOut}>Log out</HeaderMenuItem>
            <UserIcon onClick={() => {
              navigate("/mypage")
            }}/>
          </>
        ) : (
          <HeaderRegister
            onClick={() => {
              navigate("/login");
            }}
          >Login</HeaderRegister>
        )
      }
      </HeaderMenu>


    </HeaderContainer>
  )
};

export default Header;