import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { LoginPage } from "../pages/LoginPage";
import { MyPageCompany } from "../pages/MyPageCompany";
import { RegisterPage } from "../pages/RegisterPage";
import { GloblaStyle } from "../theme/GlobalStyle";
import { ThemeProvider } from "../context/themeProvider";
import { MyPageUser } from "./../pages/MyPageUser";
import BoardListPage from "../pages/BoardListPage";
import DetailPage from "../pages/DetailPage";
import { RecruitPage } from "../pages/RecruitPage";
import DetailEdit from "../components/Detail/DetailEdit";
import { MyPageEdit } from "../pages/MyPageEdit";
import { ChatPage } from "../pages/ChatPage";
import ChatContent from "../components/Chat/ChatContent/ChatContent";
import SearchPage from "../pages/SearchPage";

const Router = () => {
	return (
		<BrowserRouter>
			<ThemeProvider>
				<GloblaStyle />
				<Suspense fallback={<div>...loading</div>}>
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/boards" element={<BoardListPage />} />
						<Route path="/boards/:id" element={<DetailPage />} />
						<Route path="/search" element={<SearchPage />} />
						<Route path="/edit/:id" element={<DetailEdit />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/register" element={<RegisterPage />} />
						<Route path="/companypage" element={<MyPageCompany />} />
						<Route path="/companypage/:id" element={<MyPageCompany />} />
						<Route path="/usermypage" element={<MyPageUser />} />
						<Route path="/usermypage/:id" element={<MyPageUser />} />
						<Route path="/mypageedit" element={<MyPageEdit />} />
						<Route path="/recruit" element={<RecruitPage />} />
						<Route path="/chat" element={<ChatPage />}>
							<Route path="/chat:id" element={<ChatContent />} />
						</Route>
					</Routes>
				</Suspense>
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default Router;
