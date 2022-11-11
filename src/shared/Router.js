import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { LoginPage } from "../pages/LoginPage";
import { MyPageCompany } from "../pages/MyPageCompany";
import { RegisterPage } from "../pages/RegisterPage";
import { GloblaStyle } from "../theme/GlobalStyle";
import { ThemeProvider } from "../context/themeProvider";
import CombinedMap from "../components/Map/CombinedMap";
import List from "../components/List/List";

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
            <Route path="/usermypage" element={ <MyPageUser/> } />
            <Route path="/map" element={<CombinedMap />} />
            <Route path="/list" element={<List />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Router;