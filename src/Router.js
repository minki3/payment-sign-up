import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payment from "./pages/payment/Payment";
import KakaoLogin from "./pages/SignUp/KakaoLogin";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Payment />} />
        {/* <Route path="/kakaologin" element={<KakaoLogin />} /> */}
        {/* <Route path="/auth/kakao/callback" element={<KakaoLogin />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
