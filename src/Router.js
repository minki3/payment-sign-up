import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payment from "./pages/payment/Payment";
import KakaoLogin from "./pages/KakaoLogin/KakaoLogin";
import Login from "./pages/KakaoLogin/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/payment" element={<Payment />} />
        <Route path="/kakaologin" element={<KakaoLogin />} />
        <Route path="/auth/kakao/callback" element={<KakaoLogin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
