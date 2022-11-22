import { useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderMenu,
  HeaderMenuItem,
  HeaderRegister,
  LightThemeBtn,
  UserIcon,
} from "./Header.styled";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "../../context/themeProvider";
import { getCookieToken } from "../../utils/cookie";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  const navigate = useNavigate();
  const [ThemeMode, toggleTheme] = useTheme();
  const [cookies] = useCookies(["Authorization"]);

  useEffect(() => {
    getCookieToken();
  });
A
  const isLogin = cookies["access-token"];
  const authority = cookies["authority"];
  const username = cookies["username"];

  return (
    <HeaderContainer>
      <SearchBar/>
      <HeaderLogo onClick={() => navigate("/")}>VONGOLE</HeaderLogo>
      <LightThemeBtn onClick={toggleTheme}>
        <BsFillMoonFill>Theme</BsFillMoonFill>
      </LightThemeBtn>
      <HeaderMenu>
        <HeaderMenuItem onClick={() => navigate("/boards")}>Boards</HeaderMenuItem>
        {isLogin && authority === "ROLE_MEMBER" ? (
          <>
            <HeaderMenuItem>Notice</HeaderMenuItem>
            <HeaderMenuItem>Messagse</HeaderMenuItem>
            <UserIcon
              onClick={() => {
                navigate("/usermypage");
              }}
            />
          </>
        ) : isLogin && authority === "ROLE_ADMIN" ? (
          <>
            <HeaderMenuItem>Notice</HeaderMenuItem>
            <HeaderMenuItem>Messagse</HeaderMenuItem>
            <HeaderMenuItem onClick={() => {
              navigate("/recruit")
            }}>봉사활동 등록하기</HeaderMenuItem>
            <UserIcon
              onClick={() => {
                navigate("/companypage");
              }}
            />
          </>
        ) : (
          <HeaderRegister
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </HeaderRegister>
        )}
      </HeaderMenu>
    </HeaderContainer>
  );
};

export default Header;