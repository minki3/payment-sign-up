import React from "react";
import styled from "styled-components";
import { useState } from "react";

const CommunityModal = () => {
  return (
    <ComModal>
      <ComModal2>123123123123123123</ComModal2>
    </ComModal>
  );
};

export default CommunityModal;

const ComModal = styled.div`
  width: 300px;
  height: 300px;
`;

const ComModal2 = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid #717171;
  background-color: white;
  position: relative;
  top: 50px;
`;
