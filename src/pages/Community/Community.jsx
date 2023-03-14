import React from "react";
import styled from "styled-components";
import CommunityNav from "./CommunityNav";
import { useState, useRef, useEffect } from "react";
import Slider from "../Slider/Slider";

const Community = () => {
  return (
    // <div>123123</div>
    <BigBox>
      <BigOneBox>
        <CommunityNav />
      </BigOneBox>
      <BigTwoBox>
        <Slider />
      </BigTwoBox>
      <BigToBox>123</BigToBox>
    </BigBox>
  );
};

export default Community;

const BigBox = styled.div`
  width: 100vw;
`;

const BigOneBox = styled.div`
  width: 100%;
  background-color: azure;
`;

const BigTwoBox = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid black;
`;

const BigToBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: beige;
`;

const sliderData = [
  { id: 1, text: "일번" },
  { id: 2, text: "이번" },
  { id: 3, text: "삼번" },
  { id: 4, text: "사번" },
  { id: 5, text: "오번" },
  { id: 6, text: "육번" },
  { id: 7, text: "칠번" },
  { id: 8, text: "팔번" },
  { id: 9, text: "구번" },
];
