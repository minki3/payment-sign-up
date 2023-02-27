import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Slider = () => {
  const [slider, setSlider] = useState(0);
  const [imgData, setImgData] = useState({});

  const arr = [imgData];

  console.log(arr);

  useEffect(() => {
    fetch("./data/sliderimg.json")
      .then((response) => response.json())
      .then((result) => setImgData(result[0]));
  }, []);
  return (
    <Bx>
      {arr.map((idx) => (
        <Box key={idx.id[0]}>
          <Box1 src={idx.image_url} alt="img" />
          <Box2>123</Box2>
          <Box3>123</Box3>
        </Box>
      ))}
    </Bx>
  );
};

export default Slider;

const Bx = styled.div`
  width: 800px;
  background-color: aquamarine;
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  height: 300px;
  background-color: black;
  display: flex;
  justify-content: space-between;
`;

const Box1 = styled.div`
  width: 300px;
  height: 300px;
  background-color: green;
  margin-right: 10px;
`;

const Box2 = styled.div`
  width: 300px;
  height: 300px;
  background-color: yellow;
  margin-right: 10px;
`;

const Box3 = styled.div`
  width: 300px;
  height: 300px;
  background-color: pink;
  margin-right: 10px;
`;
