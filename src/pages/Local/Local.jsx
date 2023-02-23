import React from "react";
import styled from "styled-components";

const Local = () => {
  return (
    <TopBox>
      <RowBox>123</RowBox>
    </TopBox>
  );
};

export default Local;

const TopBox = styled.div`
  width: 500px;
  background-color: aqua;
`;

const RowBox = styled.div`
  width: 500px;
  background-color: aquamarine;
`;
