import React from "react";
import styled from "styled-components";
import Route from "react-router-dom";
import { useNavigate, useSearchParams } from "react-router-dom";

const API_KEY = `${process.env.REACT_APP_REST_API_KEY}`;
const REDIRECT_URI = `${process.env.REACT_APP_REDIRECT_URI}`;
const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
window.location.href = KAKAO_AUTH_URI;

const KakaoLogin = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  // const getToken =async() =>{
  //   const kakaoToken = await fetch("http://localhost:3000/oauth/token"),{
  //     method : 'post',
  //     headers : { 'Content-type': 'application/x-www-form-urlencoded'},

  //   }

  // }

  const HadleLogin = () => {
    window.location.href = KAKAO_AUTH_URI;
  };
  console.log(window.location.href);

  return (
    <LoginBox>
      <LoginButton onClick={HadleLogin}>로그인</LoginButton>
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
