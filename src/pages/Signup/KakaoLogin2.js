import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Profile from "./Profile";
import { post } from "jquery";

const KakaoLogin2 = () => {
  const BASE_URL = `https://kakao.yamuzin.net/kakao/sign-in`;
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split("=")[1];

  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const getProfile = async () => {
    try {
      let token = await localStorage.token;
      let response = await axios.get("https://kapi.kakao.com/v2/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/x-www-form-urlencoded",
        },
      });
      let data = response.data;
      console.log(data);
      getKakaoToken(
        data.id,
        data.properties.nickName,
        data.properties.profile_image
      );
    } catch (error) {
      console.error(error);
    }
  };

  const getKakaoToken = (userId, nickName, profileImage) => {
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          localStorage.setItem("token", data.access_token);

          console.log(`Bearer ${data.access_token}`);
          const getProfile = async () => {
            try {
              let token = await localStorage.token;
              let response = await axios.get(
                "https://kapi.kakao.com/v2/user/me",
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/x-www-form-urlencoded",
                  },
                }
              );
              let data = response.data;
              console.log(data);
              // setUserId(data.id);
              // setNickName(data.properties.nickName);
              // setProfileImage(data.properties.profile_image);
            } catch (error) {
              console.error(error);
            }
          };
          getProfile();
          fetch(`${BASE_URL}`, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nickName: data.properties.nickName,
              profileImage: data.properties.profile_image,
            }),
          });

          navigate("/payment");
        } else {
          navigate("/payment");
        }
      });
  };
  console.log(localStorage.data);

  // useEffect(() => {
  //   getProfile();
  // }, [localStorage.token]);

  useEffect(() => {
    getKakaoToken();
    // getProfile();
  }, []);

  return <div>{/* <Profile /> */}</div>;
};

export default KakaoLogin2;
