import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { LoginPage } from "../pages/LoginPage";
import { MyPageCompany } from "../pages/MyPageCompany";
import { RegisterPage } from "../pages/RegisterPage";
import { GloblaStyle } from "../theme/GlobalStyle";
import { ThemeProvider } from "../context/themeProvider";
import { MyPageUser } from "./../pages/MyPageUser";
import CombinedMap from "../components/Map/CombinedMap";
import List from "../components/List/List";
import RegisterActivity from "../components/RegisterActivity/RegisterActivity";
import CustomerEdit from "../components/CustomerEdit/CustomerEdit";

const Router = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <GloblaStyle />
        <Suspense fallback={<div>...loading</div>}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/mypage" element={<MyPageCompany />} />
            <Route path="/usermypage" element={<MyPageUser />} />
            <Route path="/map" element={<CombinedMap />} />
            <Route path="/list" element={<List />} />
            <Route path="/registeractivity" element={<RegisterActivity />} />
            <Route path="/customeredit" element={<CustomerEdit />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Router;
