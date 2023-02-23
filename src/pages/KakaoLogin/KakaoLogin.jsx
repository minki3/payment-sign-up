import React from "react";
import styled from "styled-components";
import Route from "react-router-dom";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const KakaoLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split("=")[1];
  const REST_API_KEY = "a7f6c9d4f53141acadeaacc24b6df9ad";
  const REDIRECT_URI = `http://localhost:3000/oauth/Kakaologin`;
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

  // const HadleLogin = () => {
  //   window.location.href = KAKAO_AUTH_URI;
  // };
  // console.log(window.location.href);

  return (
    <LoginBox>
      <LoginButton href={KAKAO_AUTH_URI}>{"code"}</LoginButton>
    </LoginBox>
  );
};

export default KakaoLogin;

const LoginBox = styled.div`
  width: 500px;
  height: 50px;
  background-color: aqua;
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: space-between;
`;

const LoginButton = styled.div`
  width: 100%;
  height: 40px;
  background-color: yellow;
  align-items: center;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;
