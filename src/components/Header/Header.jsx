import { useNavigate } from "react-router-dom";
import { HeaderContainer, HeaderLogo, HeaderMenu, HeaderMenuItem, HeaderRegister, LightThemeBtn, UserIcon } from "./Header.styled";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "../../context/themeProvider";
import { getCookieToken } from "../../utils/cookie";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const Header = () => {

  const navigate = useNavigate();
  const [ThemeMode, toggleTheme] = useTheme();
  const [cookies, setCookie, removeCookie] = useCookies(["Authorization"])

  useEffect(() => {
    getCookieToken();
  })

  const isLogin = cookies['access-token'];
  console.log(isLogin)

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
            <HeaderRegister>봉사등록</HeaderRegister>
            <HeaderMenuItem>Notice</HeaderMenuItem>
            <HeaderMenuItem>Messagse</HeaderMenuItem>
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