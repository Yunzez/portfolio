"use client";

import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styled, { css, keyframes } from "styled-components";
import { useRouter } from "next/navigation";
import theme from "../theme/theme";
import Image from "next/image";
import { PurpleText } from "../theme/themedComponents";
import { GlobalContext } from "../context/GlobalProvider";

const NavContainer = styled.div`
  position: fixed;
  background-color: white;
  z-index: 9999;
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
`;

const slideInAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOutAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

const NavImg = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 16px;
  filter: brightness(0) saturate(100%) invert(12%) sepia(85%) saturate(7402%)
    hue-rotate(263deg) brightness(84%) contrast(130%);
`;

const scaleAnimationOpen = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const scaleAnimationClose = keyframes`
  0% {
    transform: scale(1);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

interface NavBtnTextProps {
  currTab?: string;
  name: string;
}

const NavBtn = styled.button<NavBtnTextProps>`
  margin-left: 1em;
  margin-right: 1em;
  font-size: 20px;
  transition: color 0.3s ease-in-out, font-weight 0.3s ease-in-out;
  ${({ currTab, name }) =>
    currTab === name
      ? `color : ${theme.themePurple};
   font-weight: 500;
    `
      : `color : black; 
  font-weight: 200;
  `}
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 48px;
    width: 100%;
    text-align: left;
  }

  &:hover {
    font-weight: 500;
  }
`;

const Navbar = () => {
  const { isOpen, setIsOpen, initialRender } = useContext(GlobalContext);
  const sideNavRef = useRef<HTMLDivElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const MenuButton = styled.div<{ isOpen: boolean; initialRender: boolean }>`
    display: inline-block;
    transition: transform 0.3s ease-in-out;
    ${({ isOpen, initialRender }) =>
      !initialRender &&
      isOpen &&
      css`
        animation: ${scaleAnimationOpen} 1s forwards;
      `}

    ${({ isOpen, initialRender }) =>
      !initialRender &&
      !isOpen &&
      css`
        animation: ${scaleAnimationClose} 1s forwards;
      `}
  `;
  const SideNav = styled.div<{ isOpen: boolean; shouldAnimate: boolean }>`
    position: fixed;
    top: 80px;
    right: 0;
    width: 100vw;
    height: calc(100vh - 80px);
    background-color: white;
    transform: translateX(100%);
    animation: ${({ isOpen, shouldAnimate }) =>
      shouldAnimate
        ? css`
            ${isOpen
              ? slideInAnimation
              : slideOutAnimation} 0.3s ease-in-out forwards
          `
        : "none"};
  `;

  const handleOpenNav = () => {
    console.log("open nav");
    if (shouldAnimate === false) setShouldAnimate(true);
    if (isOpen === undefined) setIsOpen(false);
    setIsOpen(!isOpen);
  };

  const router = useRouter();
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
          <div className="hidden md:flex">
            <NavBtn
              name="Work"
              currTab={currTab}
              onClick={() => {
                setCurrTab("Work");
                router.push("/");
              }}
            >
              Work
            </NavBtn>
            <NavBtn
              name="About"
              currTab={currTab}
              onClick={() => {
                setCurrTab("About");
                router.push("/about");
              }}
            >
              About
            </NavBtn>
            <NavBtn
              name="Resume"
              currTab={currTab}
              onClick={() => {
                setCurrTab("Resume");
                router.push("/resume");
              }}
            >
              Resume
            </NavBtn>
            <SocialIcon src="/asset/Github.png" alt="Logo" />
            <SocialIcon src="/asset/Linkedin.png" alt="Logo" />
            <SocialIcon src="/asset/mail.png" alt="Logo" />
          </div>
        </section>
        <MenuButton isOpen={isOpen} initialRender={initialRender}>
          {isOpen ? (
            <NavImg
              src="navbar/menu-open.svg"
              className="md:hidden"
              onClick={handleOpenNav}
            />
          ) : (
            <NavImg
              src="navbar/menu-close.svg"
              className="md:hidden"
              onClick={handleOpenNav}
            />
          )}
        </MenuButton>
      </NavContainer>

      <SideNav
        ref={sideNavRef}
        className="md:hidden"
        isOpen={isOpen}
        shouldAnimate={shouldAnimate}
      >
        <div className="flex flex-col justify-between" style={{height: 'calc(90vh - 120px)'}}>

          <div >
          <NavBtn
            name="Work"
            currTab={currTab}
            onClick={() => {
              setCurrTab("Work");
              router.push("/");
              handleOpenNav();
            }}
          >
            Work
          </NavBtn>
          <NavBtn
            name="About"
            currTab={currTab}
            onClick={() => {
              setCurrTab("About");
              router.push("/about");
              handleOpenNav();
            }}
          >
            About
          </NavBtn>
          <NavBtn
            name="Resume"
            currTab={currTab}
            onClick={() => {
              setCurrTab("Resume");
              router.push("/resume");
              handleOpenNav();
            }}
          >
            Resume
          </NavBtn>
          </div>
          <div className="flex justify-end mt-auto ms-auto">
            <SocialIcon src="/asset/Github.png" alt="Logo" />
            <SocialIcon src="/asset/Linkedin.png" alt="Logo" />
            <SocialIcon src="/asset/mail.png" alt="Logo" />
          </div>
        </div>
      </SideNav>
    </>
  );
};

export default Navbar;
