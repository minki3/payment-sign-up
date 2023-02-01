// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Profile = ({ accessToken }) => {
//   console.log(accessToken);
//   const [user_id, setUserId] = useState();
//   const [nickName, setNickName] = useState();
//   const [profileImage, setProfileImage] = useState();
//   const APP_ADMIN_KEY = `3eaa5214a1718e0b3281ea360a9f44ad`;
//   console.log(user_id);
//   console.log(nickName);
//   console.log(profileImage);

//   // const getProfile = async () => {
//   //   try {
//   //     // Kakao SDK API를 이용해 사용자 정보 획득
//   //     let data = await window.Kakao.API.request({
//   //       url: "/v2/user/me",
//   //       Authorization: `Bearer ${accessToken}/KakaoAK ${APP_ADMIN_KEY}`,
//   //     });
//   //     // 사용자 정보 변수에 저장
//   //     console.log(data);
//   //     setUserId(data.id);
//   //     setNickName(data.properties.nickname);
//   //     setProfileImage(data.properties.profile_image);
//   //   } catch (err) {
//   //     console.log(err);
//   //   }
//   // };
//   // useEffect(() => {
//   //   getProfile();
//   // }, []);
//   const getProfile = async () => {
//     try {
//       let response = await axios.get("https://kapi.kakao.com/v2/user/me", {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           "Content-type": "application/x-www-form-urlencoded",
//         },
//       });
//       let data = response.data;
//       console.log(data);
//       setUserId(data.id);
//       setNickName(data.nickname);
//       setProfileImage(data.profile_image);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   useEffect(() => {
//     getProfile();
//   }, [accessToken]);

//   return <div></div>;
// };

// export default Profile;
