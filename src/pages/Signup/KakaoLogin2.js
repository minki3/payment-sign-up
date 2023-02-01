import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const KakaoLogin2 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split("=")[1];

  const REST_API_KEY = "9e4f845d58d89d194353e6cf169d9f73";
  const REDIRECT_URI = `http://localhost:3000/oauth/payment`;

  // const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  // const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

  const getKakaoToken = () => {
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          localStorage.setItem("token", data.access_token);
        } else {
          navigate("/");
        }
      });
  };

  useEffect(() => {
    if (!location.search) return;
    getKakaoToken();
  }, []);
};

export default KakaoLogin2;
