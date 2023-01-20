import React from "react";
import styled from "styled-components";

export const API_KEY = process.env.REACT_APP_REST_API_KEY;
export const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
export const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const KakaoLogin = () => {
  const HadleLogin = () => {
    window.location.href = KAKAO_AUTH_URI;
  };
  console.log(window.location.href);

  return (
    <LoginBox>
      <LoginTitle>Login</LoginTitle>
      <LoginButton onClick={HadleLogin}>로그인</LoginButton>
    </LoginBox>
  );
};

export default KakaoLogin;

const LoginBox = styled.div`
  width: 400px;
  height: 500px;
  background-color: aqua;
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: space-between;
`;

const LoginTitle = styled.div`
  font-size: 20px;
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
