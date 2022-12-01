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

	const isLogin = cookies["access-token"];
	const authority = cookies["authority"];

	return (
		<HeaderContainer>
			<SearchBar />
			<HeaderLogo onClick={() => navigate("/")}>Vongole</HeaderLogo>
			<LightThemeBtn onClick={toggleTheme}>
				<BsFillMoonFill>Theme</BsFillMoonFill>
			</LightThemeBtn>
			<HeaderMenu>
				<HeaderMenuItem onClick={() => navigate("/boards")}>Boards</HeaderMenuItem>
				{isLogin && authority === "ROLE_MEMBER" ? (
					<>
						<HeaderMenuItem>메시지</HeaderMenuItem>
						<HeaderMenuItem>알림</HeaderMenuItem>
						<UserIcon
							onClick={() => {
								navigate("/usermypage");
							}}
						/>
					</>
				) : isLogin && authority === "ROLE_ADMIN" ? (
					<>
						<HeaderMenuItem>메시지</HeaderMenuItem>
						<HeaderMenuItem>알림</HeaderMenuItem>
						<HeaderMenuItem
							onClick={() => {
								navigate("/recruit");
							}}
						>
							봉사활동 등록하기
						</HeaderMenuItem>
						<UserIcon
							onClick={() => {
								navigate("/companypage");
							}}
						/>
					</>
				) : (
					<HeaderMenuItem
						onClick={() => {
							navigate("/login");
						}}
					>
						Login
					</HeaderMenuItem>
				)}
			</HeaderMenu>
		</HeaderContainer>
	);
};

export default Header;
