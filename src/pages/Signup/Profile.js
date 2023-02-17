import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split("=")[1];
  const [user_id, setUserId] = useState();
  const [nickName, setNickName] = useState();
  const [profileImage, setProfileImage] = useState();

  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

  const getKakaoToken = async () => {
    try {
      let response = await fetch(`https://kauth.kakao.com/oauth/token`, {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
      });
      let data = await response.json();
      if (data.access_token) {
        localStorage.setItem("token", data.access_token);
        console.log(`Bearer ${data.access_token}`);
        navigate("/payment");
        return data.access_token;
      } else {
        navigate("/payment");
      }
    } catch (error) {
      console.error(error);
    }
  };

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
      setUserId(data.id);
      setNickName(data.properties.nickName);
      setProfileImage(data.properties.profile_image);
    } catch (error) {
      console.error(error);
    }
  };

  // const getProfile = async () => {
  //   try {
  //     // Kakao SDK API를 이용해 사용자 정보 획득
  //     let data = await window.Kakao.API.request({
  //       url: "/v2/user/me",
  //       type: "get",
  //       headers: { "content-type": "application/x-www-form-urlencoded" },
  //     });
  //     // 사용자 정보 변수에 저장
  //     console.log(data);
  //     setUserId(data.id);
  //     setNickName(data.properties.nickname);
  //     setProfileImage(data.properties.profile_image);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    getProfile();
  }, [localStorage.token]);

  return (
    <div>
      <h2>{user_id}</h2>
      <h2>{nickName}</h2>
      <img src={profileImage}></img>
    </div>
  );
};

export default Profile;
