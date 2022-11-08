import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';
import { MyPageCompany } from '../pages/MyPageCompany';
import { RegisterPage } from '../pages/RegisterPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <MainPage/> }/>
        <Route path="/register" element={ <RegisterPage/> } />
        <Route path="/mypage" element={ <MyPageCompany/> }/>
      </Routes>
    </BrowserRouter>
  )
};

export default Router;