import React, { useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const KakaoLogin = () => {
  const REST_API_KEY = "9e4f845d58d89d194353e6cf169d9f73";
  const REDIRECT_URI = `http://localhost:3000/oauth/payment`;
  // const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  // const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <button style={{ paddingTop: `150px` }} onClick={handleLogin}>
      hi
    </button>
  );
};

export default KakaoLogin;
