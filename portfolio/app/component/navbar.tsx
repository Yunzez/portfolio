"use client";

import React from "react";
import styled from "styled-components";
import theme from "../theme/theme";

const NavContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 86px;
  background-color: white;
  border-bottom: 1px solid lightgrey;
  left: 0px;
  top: 0px;
`;

const Navbar = () => {
  return (
    <>
      <NavContainer>
        <div>Fred Zhao</div>
      </NavContainer>
    </>
  );
};

export default Navbar;
