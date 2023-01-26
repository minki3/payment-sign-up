import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payment from "./pages/payment/Payment";
import KakaoLogin from "./pages/Signup/KakaoLogin";
import KakaoLogin2 from "./pages/Signup/KakaoLogin2";
import RoutinePay from "./pages/payment/RoutinePay";
import Nav from "./components/Nav/Nav";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Payment />} />
        <Route path="/kakaologin" element={<KakaoLogin />} />
        <Route path="/oauth/kakaologin2" element={<KakaoLogin2 />} />
        <Route path="/routinepay" element={<RoutinePay />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
