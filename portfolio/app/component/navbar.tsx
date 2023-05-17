"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from 'next/navigation';
import theme from "../theme/theme";
import Image from "next/image";
import { PurpleText } from "../theme/themedComponents";
const NavContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 80px;
  background-color: white;
  border-bottom: 1px solid lightgrey;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 16px;
`;

const SocialIcon = styled.img`
margin: 4px;
width: 20px;
height: 20px;
margin-right: 16px;
`

interface NavBtnTextProps {
  currTab?: string;
  name: string;
}

const NavBtn = styled.button<NavBtnTextProps>`
  margin-left: 1em;
  margin-right: 1em;
  font-size: 20px;
  ${({ currTab, name }) =>
    currTab === name
      ? `color : ${theme.themePurple};
   font-weight: 500;
    `
      : `color : black; 
  font-weight: 200;
  `}
`;

const Navbar = () => {
  const router = useRouter()
  const [currTab, setCurrTab] = useState("Work");
  return (
    <>
      <NavContainer>
        <section className="flex justify-between flex-1 px-5 items-center">
          <div className="flex items-center">
            <Logo src="/asset/logo.svg" alt="Logo" />
            <PurpleText fontWeight={500} fontSize="20px">
              Fred Zhao
            </PurpleText>
          </div>
          <div className="flex">
            <NavBtn name="Work" currTab={currTab} onClick={() => {setCurrTab('Work'); router.push('/')}}>
              Work
            </NavBtn>
            <NavBtn name="About" currTab={currTab} onClick={() => {setCurrTab('About'); router.push('/about')}}>
              About
            </NavBtn>
            <NavBtn name="Resume" currTab={currTab} onClick={() => {setCurrTab('Resume'); router.push('/resume')}}>
              Resume
            </NavBtn>
            <SocialIcon src="/asset/Github.png" alt="Logo" />
            <SocialIcon src="/asset/Linkedin.png" alt="Logo" />
            <SocialIcon src="/asset/mail.png" alt="Logo" />
          </div>
        </section>
      </NavContainer>
    </>
  );
};

export default Navbar;
