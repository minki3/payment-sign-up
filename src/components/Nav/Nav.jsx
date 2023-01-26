import React from "react";
import styled from "styled-components";

const Nav = () => {
  return <Header>login & payment</Header>;
};

export default Nav;

const Header = styled.div`
  position: fixed;
  text-align: center;
  border-bottom: 1px solid gray;
  font-weight: bold;
  width: 100%;
  padding: 20px;
  background-color: white;
`;
