import { useNavigate } from "react-router-dom";
import {
	HeaderContainer,
	HeaderLogo,
	HeaderMenu,
	HeaderMenuItem,
	LightThemeBtn,
	UserIcon,
} from "./Header.styled";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "../../context/themeProvider";
import { getCookieToken } from "../../utils/cookie";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../logo/logo.png";

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
			<HeaderLogo onClick={() => navigate("/")}>
				<img src={logo} alt="" />
			</HeaderLogo>
			<LightThemeBtn onClick={toggleTheme}>
				<BsFillMoonFill>Theme</BsFillMoonFill>
			</LightThemeBtn>
			<HeaderMenu>
				<HeaderMenuItem
					onClick={() => {
						navigate("/boards");
					}}
				>
					봉사 전체보기
				</HeaderMenuItem>
				{isLogin && authority === "ROLE_MEMBER" ? (
					<>
						<HeaderMenuItem onClick={() => navigate("/chat")}>메시지</HeaderMenuItem>
						{/* <HeaderMenuItem>알림</HeaderMenuItem> */}
						<UserIcon
							onClick={() => {
								navigate(`/usermypage/${cookies.ID}`);
							}}
						/>
					</>
				) : isLogin && authority === "ROLE_ADMIN" ? (
					<>
						<HeaderMenuItem onClick={() => navigate("/chat")}>메시지</HeaderMenuItem>
						{/* <HeaderMenuItem>알림</HeaderMenuItem> */}
						<HeaderMenuItem
							onClick={() => {
								navigate("/recruit");
							}}
						>
							봉사활동 등록하기
						</HeaderMenuItem>
						<UserIcon
							onClick={() => {
								navigate(`/companypage/${cookies.ID}`);
							}}
						/>
					</>
				) : (
					<HeaderMenuItem
						onClick={() => {
							navigate("/login");
						}}
					>
						로그인
					</HeaderMenuItem>
				)}
			</HeaderMenu>
		</HeaderContainer>
	);
};

export default Header;
