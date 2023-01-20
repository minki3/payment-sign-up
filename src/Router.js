import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import Payment from "./pages/payment/Payment";
import KakaoLogin from "./pages/SignUp/KakaoLogin";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/kakaologin" element={<KakaoLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
