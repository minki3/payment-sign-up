import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import CommunityNav from "./CommunityNav";

const ComModal = ({ setModal }) => {
  const [data, setData] = useState({});
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    fetch("./data/community.json")
      .then((response) => response.json())
      .then((result) => setData(result[0]));
  }, []);

  const handleButton = () => {
    setActiveImg((prevIndex) => (prevIndex + 1) % data.image_url.length);
  };

  const ModalDown = () => {
    setModal(false);
  };

  return (
    <Box>
      <Box2>
        <Down
          onClick={() => {
            setModal(false);
          }}
        >
          Deep
        </Down>
        <BigBox>
          <Box4>{data.name && data.name[0]}</Box4>
          <Box3 src={data.image_url && data.image_url[activeImg]} alt="img" />
        </BigBox>
        <BigBox2>
          <Box4>{data.name && data.name[1]}</Box4>
          <Box3
            src={data.image_url && data.image_url[0 - activeImg]}
            alt="img"
          />
        </BigBox2>
        <Button onClick={handleButton}>Change Image</Button>
      </Box2>
    </Box>
  );
};

export default ComModal;

const Box = styled.div`
  width: 300px;
  height: 300px;
`;

const Box2 = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid #717171;
  /* background-color: white; */
  position: relative;
  top: 30px;
`;

const BigBox = styled.div`
  width: 300px;
  width: 300px;
`;

const Box3 = styled.img`
  width: 100px;
  height: 100px;
`;

const Box4 = styled.div`
  font-size: 20px;
`;

const BigBox2 = styled.div`
  width: 300px;
  width: 300px;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #717171;
  box-shadow: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Down = styled.div`
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
