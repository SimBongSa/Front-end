import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import CombinedMap from "../components/Map/CombinedMap";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/map" element={<CombinedMap />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
