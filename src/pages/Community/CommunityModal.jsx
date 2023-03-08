import React from "react";
import styled from "styled-components";
import { useState } from "react";

const CommunityModal = ({ setIsOpen, isOpen }) => {
  return (
    <ComModal>
      <ComModal2>
        <Cancle
          onClick={() => {
            setIsOpen(false);
          }}
        >
          x
        </Cancle>
      </ComModal2>
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
  position: absolute;
  left: 0;
  top: 60px;
  border: 1px solid #717171;
  background-color: white;
  border-radius: 20px;
`;

const Cancle = styled.button`
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
`;
