import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <>
      <Header>login & payment</Header>
      <Outlet />
    </>
  );
};

export default Nav;

const Header = styled.div`
  top: 0;
  position: fixed;
  text-align: center;
  border-bottom: 1px solid gray;
  font-weight: bold;
  width: 100%;
  padding: 20px;
  background-color: white;
`;
