import React from "react";
import styled from "styled-components";
import Route from "react-router-dom";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const API_KEY = `${process.env.REACT_APP_REST_API_KEY}`;
const REDIRECT_URI = `${process.env.REACT_APP_REDIRECT_URI}`;
const KAKAO_AUTH_URI = `https://kauth.kakao.com/auth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
window.location.href = KAKAO_AUTH_URI;

console.log(KAKAO_AUTH_URI);

const KakaoLogin = () => {
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code");
    // const grant_type = "authorization_code";
    const REDIRECT_URI = `${process.env.REACT_APP_REDIRECT_URI}`;
    const API_KEY = `${process.env.REACT_APP_REST_API_KEY}`;

    axios
      .get(
        `https://kauth.kakao.com/auth/token?grant_type=authorization_code&client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code=${code}`,
        {},
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        console.log(res);
        const { data } = res;
        const { access_token } = data;
        if (access_token) {
          console.log(`Bearer ${access_token}`);
          axios
            .get(
              "http://kapi.kakao.com/v2/user/me ",
              {},
              {
                headers: {
                  Authorization: `Bearer ${access_token}`,
                  "Content-type": "application/x-www-form-urlencoded",
                },
              }
            )
            .then((res) => {
              console.log("suc data");
              console.log(res);
            });
        }
      });
  }, []);

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
