import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payment from "./pages/payment/Payment";
import KakaoLogin from "./pages/KakaoLogin/KakaoLogin";
import KakaoCallBack from "./pages/KakaoLogin/KakaoCallback";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/payment" element={<Payment />} />
        <Route path="/" element={<KakaoLogin />} />
        <Route path="/oauth/kakaologin" element={<KakaoCallBack />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
