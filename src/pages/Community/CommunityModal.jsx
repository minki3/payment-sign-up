import React from "react";
import styled from "styled-components";
import { useState } from "react";

const CommunityModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onIsOpen = () => {
    isModalOpen(!setIsModalOpen);
  };
  return (
    <ComModal>
      <ComModal2 onIsOpen={onIsOpen}>123123123123123123</ComModal2>
    </ComModal>
  );
};

export default CommunityModal;

const ComModal = styled.div`
  width: 300px;
  height: 300px;
  background-color: azure;
`;

const ComModal2 = styled.div`
  width: 300px;
  height: 300px;
  background-color: black;
`;
