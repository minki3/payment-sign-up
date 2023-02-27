import React, { useState } from "react";
import styled from "styled-components";
import CommunityModal from "./CommunityModal";
import ComModal from "./ComModal";
import { useNavigate } from "react-router-dom";
import Ckeditor from "../Ckeditor/Ckeditor";

const CommunityNav = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const navigate = useNavigate();

  const Editor = () => {
    navigate("/ckeditor");
  };

  return (
    <Div>
      <DivBox2>
        <ButtonBox
          onClick={() => {
            setIsOpen(true);
          }}
        ></ButtonBox>
        {isOpen && <CommunityModal setIsOpen={setIsOpen} />}
        <ButtonBox2
          onClick={() => {
            setModal(true);
          }}
        >
          ac-tie
        </ButtonBox2>
        {modal && <ComModal setModal={setModal} modal={modal} />}

        <ButtonBox3
          onClick={() => {
            Editor();
          }}
        >
          게시판 올리기
        </ButtonBox3>
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
  height: 45px;
  display: flex;
  justify-content: space-between;
`;

const ButtonBox = styled.div`
  width: 100px;
  height: 45px;
  border: 1px solid #717171;
  border-radius: 30%;
  box-shadow: inset;
`;

const ButtonBox2 = styled.div`
  width: 100px;
  height: 45px;
  background-color: yellow;
  border-radius: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonBox3 = styled.div`
  width: 100px;
  height: 45px;
  background-color: yellowgreen;
  border-radius: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
