import React, { useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const KakaoLogin = () => {
  const REST_API_KEY = "a7f6c9d4f53141acadeaacc24b6df9ad";
  const REDIRECT_URI = `http://localhost:3000/oauth/payment`;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const REACT_APP_JABASCRIPT_KEY = "d497b10866ffc562cae95b59aa66cbd1";

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return <LoginBox onClick={handleLogin}></LoginBox>;
};

export default KakaoLogin;

const LoginBox = styled.div`
  width: 200px;
  height: 300px;
  background-color: blue;
`;
