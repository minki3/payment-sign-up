import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payment from "./pages/payment/Payment";
import KakaoLogin from "./pages/Signup/KakaoLogin";
import KakaoLogin2 from "./pages/Signup/KakaoLogin2";
import RoutinePay from "./pages/payment/RoutinePay";
import Nav from "./components/Nav/Nav";
import Profile from "./pages/Signup/Profile";
import Local from "./pages/Local/Local";
import Community from "./pages/Community/Community";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/oauth/payment" element={<Payment />} />
        <Route path="/kakaologin" element={<KakaoLogin />} />
        <Route path="/oauth/kakaologin" element={<KakaoLogin2 />} />
        <Route path="/routinepay" element={<RoutinePay />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/local" element={<Local />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
