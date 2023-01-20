import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payment from "./pages/payment/Payment";
import KakaoLogin from "./pages/SignUp/KakaoLogin";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/payment" element={<Payment />} />
        <Route path="/" element={<KakaoLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
