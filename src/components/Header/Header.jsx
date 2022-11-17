import { useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderMenu,
  HeaderMenuItem,
  HeaderRegister,
  LightThemeBtn,
  UserIcon,
  AdminBtn,
} from "./Header.styled";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "../../context/themeProvider";
import { getCookieToken } from "../../utils/cookie";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { removeCookie } from "../../utils/cookie";

const Header = () => {
  const navigate = useNavigate();
  const [ThemeMode, toggleTheme] = useTheme();
  const [cookies] = useCookies(["Authorization"]);

  useEffect(() => {
    getCookieToken();
  });

  const isLogin = cookies["access-token"];
  const authority = cookies["authority"];
  const username = cookies["username"];
<<<<<<< HEAD
  const logOut = () => {
    removeCookie(["access-token"], { path: "/" });
    removeCookie(["username"], { path: "/" });
    removeCookie(["authority"], { path: "/" });
    localStorage.removeItem("refresh-token");
    // navigate("/login");
  };
=======
>>>>>>> seokwon

  return (
    <HeaderContainer>
      <HeaderLogo onClick={() => navigate("/")}>VONGOLE</HeaderLogo>
      <HeaderMenu>
        <LightThemeBtn onClick={toggleTheme}>
          <BsFillMoonFill />
        </LightThemeBtn>
        {isLogin && authority === "ROLE_MEMBER" ? (
          <>
            <HeaderMenuItem onClick={() => navigate("/boards")}>Boards</HeaderMenuItem>
            <HeaderMenuItem>Notice</HeaderMenuItem>
            <HeaderMenuItem>Messagse</HeaderMenuItem>
            <HeaderMenuItem>{username}</HeaderMenuItem>
            <UserIcon
              onClick={() => {
                navigate("/mypage");
              }}
            />
          </>
        ) : isLogin && authority === "ROLE_ADMIN" ? (
          <>
            <AdminBtn
              onClick={() => {
                navigate("/registeractivity");
              }}
            >
              봉사등록
            </AdminBtn>
            <HeaderMenuItem>Notice</HeaderMenuItem>
            <HeaderMenuItem>Messagse</HeaderMenuItem>
            <HeaderMenuItem>{username}</HeaderMenuItem>
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
          isLogin && authority === "ROLE_ADMIN" ? (
              <>
                <AdminBtn>봉사등록</AdminBtn>
                <HeaderMenuItem onClick={() => navigate("/boards")}>Boards</HeaderMenuItem>
                <HeaderMenuItem>Notice</HeaderMenuItem>
                <HeaderMenuItem>Messagse</HeaderMenuItem>
                <HeaderMenuItem>{ username }</HeaderMenuItem>
                <UserIcon onClick={() => {
                  navigate("/companypage")
                }}/>
              </>
            ) 
            : <HeaderRegister
                onClick={() => {
                  navigate("/login");
                }}
              >Login</HeaderRegister>
      </HeaderMenu>
    </HeaderContainer>
  );
};

export default Header;
