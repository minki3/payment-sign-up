import React from "react";
import styled from "styled-components";

const Community = () => {
  return (
    <BigBox>
      <BigOneBox>123</BigOneBox>
    </BigBox>
  );
};

export default Community;

const BigBox = styled.div`
  width: 100vw;
  background-color: yellowgreen;
`;

const BigOneBox = styled.div`
  width: 800px;
  height: 800px;
  background-color: azure;
`;
