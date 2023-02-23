import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const interruptedRoute = ["/community"];

const Nav = () => {
  const { pathname } = useLocation();
  const isHide = interruptedRoute.some((path) => path === pathname);

  if (isHide) return <></>;

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
