// import React, { useEffect, useState } from "react";
// import styled from "styled-components";

// const Slider = () => {
//   const [slider, setSlider] = useState(0);
//   const [imgData, setImgData] = useState({ id: 0, image_url: [] });

//   const arr = [imgData];

//   const

//   useEffect(() => {
//     fetch("./data/sliderimg.json")
//       .then((response) => response.json())
//       .then((result) => setImgData(result[0]));
//   }, []);

//   useEffect(() => {
//     if (imgData.image_url.length > 0) {
//       console.log("imgData is initialized");
//     }
//   }, []);
//   return (
//     <Bx>
//       {imgData.image_url.length > 0 && (
//         <Box key={imgData.id}>
//           <Box1 src={imgData.image_url[0]} alt="img" />
//           <Box2 src={imgData.image_url[1]} alt="img" />
//           <Box3 src={imgData.image_url[2]} alt="img" />
//         </Box>
//       )}
//     </Bx>
//   );
// };

// export default Slider;

// const Bx = styled.div`
//   width: 800px;
//   background-color: aquamarine;
//   display: flex;
//   justify-content: center;
// `;

// const Box = styled.div`
//   height: 300px;
//   background-color: black;
//   display: flex;
//   justify-content: space-between;
// `;

// const Box1 = styled.img`
//   width: 300px;
//   height: 300px;
//   background-color: green;
//   margin-right: 10px;
// `;

// const Box2 = styled.div`
//   width: 300px;
//   height: 300px;
//   background-color: yellow;
//   margin-right: 10px;
// `;

// const Box3 = styled.div`
//   width: 300px;
//   height: 300px;
//   background-color: pink;
//   margin-right: 10px;
// `;
import { useState, useEffect } from "react";
import styled from "styled-components";

const Slider = () => {
  const [imgData, setImgData] = useState({
    id: null,
    image_url: [],
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [activeImg, setActiveImg] = useState(0);

  const slideImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imgData.image_url.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleButton = () => {
    setActiveImg((prevIndex) => (prevIndex + 1) % imgData.image_url.length);
  };

  useEffect(() => {
    fetch("./data/sliderimg.json")
      .then((response) => response.json())
      .then((result) => setImgData(result[0]));
  }, []);

  useEffect(() => {
    const firstImageUrl = imgData.image_url[0];
    setImgData((prevImgData) => ({
      id: prevImgData.id,
      image_url: [...prevImgData.image_url.slice(1), firstImageUrl],
    }));
  }, []);

  useEffect(() => {
    const id = setInterval(slideImage, 3000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imgData.image_url.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imgData.image_url.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getTransformValue = (index) => {
    const diff = index - currentIndex;
    if (diff === 0) return "translateZ(0)";
    else if (diff === 1) return "rotateY(-45deg) translateZ(150px)";
    else if (diff === -1) return "rotateY(45deg) translateZ(150px)";
    else return "translateZ(-300px)";
  };

  return (
    <Bx>
      <PrevButton onClick={handlePrevClick}>+</PrevButton>
      <NextButton onClick={handleNextClick}>-</NextButton>
      <Box currentIndex={currentIndex}>
        {imgData.image_url.map((url, index) => (
          <BoxItem key={index} transformValue={getTransformValue(index)}>
            <Box1 src={url} alt="img" />
          </BoxItem>
        ))}
      </Box>
    </Bx>
  );
};

export default Slider;

const Bx = styled.div`
  width: 800px;
  height: 800px;
  overflow: hidden;
  position: relative;
`;

const Box = styled.div`
  width: ${({ currentIndex }) => currentIndex * 500}px;
  height: 300px;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s ease-in-out;
`;

const BoxItem = styled.div`
  width: 500px;
  height: 300px;
  position: relative;
  transform: ${({ transformValue }) => transformValue};
`;

const Box1 = styled.img`
  width: 500px;
  height: 300px;
`;

const Box2 = styled.div`
  width: 100px;
  height: 100px;
  background-color: gray;
`;

const Box3 = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;

const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;
