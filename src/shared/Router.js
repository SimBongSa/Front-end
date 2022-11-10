import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { MyPageCompany } from "../pages/MyPageCompany";
import { RegisterPage } from "../pages/RegisterPage";
import { MyPageUser } from "../pages/MyPageUser";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/mypage" element={<MyPageCompany />} />
        <Route path="/usermypage" element={<MyPageUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
