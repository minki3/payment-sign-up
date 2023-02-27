import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";

const ComModal = ({ modal, setModal }) => {
  const [data, setData] = useState({});
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    fetch("./data/community.json")
      .then((response) => response.json())
      .then((result) => setData(result[0]));
  }, []);
  const close = () => {
    setModal(false);
  };

  const handleButton = () => {
    setActiveImg((prevIndex) => (prevIndex + 1) % data.image_url.length);
  };

  return (
    <Box>
      <Box2>
        <Down
          onClick={() => {
            close();
          }}
        >
          x
        </Down>
        <BigBox>
          <Box4>{data.name && data.name[0]}</Box4>
          <Box3 src={data.image_url && data.image_url[activeImg]} alt="img" />
        </BigBox>
        <BigBox2>
          <Box4>{data.name && data.name[1]}</Box4>
          <Box3
            src={data.image_url && data.image_url[1 - activeImg]}
            alt="img"
          />
        </BigBox2>
        <Button onClick={handleButton}> - </Button>
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
  position: absolute;
  left: -1;
  top: 50px;
  border: 1px solid #717171;
  background-color: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
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

const Down = styled.button`
  font-weight: bold;
  cursor: pointer;
  align-items: center;
  border: none;
  background-color: transparent;
  top: 20px;
`;
