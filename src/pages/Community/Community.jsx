import React from "react";
import styled from "styled-components";
import CommunityNav from "./CommunityNav";
import Modal from "./CommunityNav";

const Community = () => {
  return (
    // <div>123123</div>
    <BigBox>
      <BigOneBox>
        <CommunityNav />
      </BigOneBox>
    </BigBox>
  );
};

export default Community;

const BigBox = styled.div`
  width: 100vw;
`;

const BigOneBox = styled.div`
  width: 100%;
  height: 800px;
  background-color: azure;
`;
