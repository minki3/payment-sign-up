import React from "react";
import styled from "styled-components";
import { useState } from "react";
import CommunityModal from "./Community";

const CommunityNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Div>
      <DivBox2>
        {isOpen ? <CommunityModal /> : ""}
        <ButtonBox
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        ></ButtonBox>
        <ButtonBox2>안녕</ButtonBox2>

        <ButtonBox3>123</ButtonBox3>
      </DivBox2>
    </Div>
  );
};

export default CommunityNav;

const Div = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  border: 1px solid #717171;
`;

const DivBox2 = styled.div`
  width: 80%;
  height: 100px;
  background-color: bisque;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const ButtonBox = styled.div`
  width: 200px;
  height: 100px;
  background-color: aqua;
  border-radius: 30%;
`;

const ButtonBox2 = styled.div`
  width: 200px;
  height: 100px;
  background-color: yellow;
  border-radius: 30%;
`;

const ButtonBox3 = styled.div`
  width: 200px;
  height: 100px;
  background-color: yellowgreen;
  border-radius: 30%;
`;
