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
<<<<<<< HEAD
import RegisterActivity from "../components/RegisterActivity/RegisterActivity";
=======
import { MyPageUser } from "../pages/MyPageUser";
import CustomerEdit from "../components/CustomerEdit/CustomerEdit";
>>>>>>> 81e37ec9527984565b5aee9861f5980c58285a8c

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
<<<<<<< HEAD
            <Route path="/registeractivity" element={<RegisterActivity />} />
=======
            <Route path="/customeredit" element={<CustomerEdit />} />
>>>>>>> 81e37ec9527984565b5aee9861f5980c58285a8c
          </Routes>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Router;
