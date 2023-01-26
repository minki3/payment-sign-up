import React, { useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
const KakaoCallback = () => {
  const REST_API_KEY = "a7f6c9d4f53141acadeaacc24b6df9ad";
  const REDIRECT_URI = `http://localhost:3000/oauth/Kakaologin`;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  // const location = useLocation();
  // const navigate = useNavigate();
  // const KAKAO_CODE = location.search.split("=")[1];
  // const getKakaoToken = () => {
  //   axios(`https://kauth.kakao.com/oauth/token`, {
  //     method: "POST",
  //     headers: { "content-type": "application/x-www-form-urlencoded" },
  //     data: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
  //   }).then((data) => {
  // if (data.access_token) {
  //   localStorage.setItem("token", data.access_token);
  // } else {
  //   navigate("/");
  // }
  //   });
  // };
  // useEffect(() => {
  //   if (!location.search) return;
  //   getKakaoToken();
  // }, []);
  return <button onClick={handleLogin}>hi</button>;
};
export default KakaoCallback;
