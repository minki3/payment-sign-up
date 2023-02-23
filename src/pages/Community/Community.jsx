import React from "react";
import styled from "styled-components";
import CommunityNav from "./CommunityNav";
import CommunityModal from "./CommunityNav";

const Community = ({ onIsOpen }) => {
  return (
    <BigBox>
      <BigOneBox>
        <CommunityNav onIsOpen={onIsOpen} />
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
