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
import { PurpleText, VerticalText } from "../theme/themedComponents";
import { GlobalContext } from "../context/GlobalProvider";
import { BasicComponentProps, openInNewTab } from "../utils";

interface NavBtnTextProps extends BasicComponentProps {
  currTab?: string;
  name: string;
}

const NavBtn = styled.button<NavBtnTextProps>`
  position: relative;
  margin-left: 1em;
  margin-right: 1em;
  font-size: 20px;
  transition: color 0.3s ease-in-out, font-weight 0.3s ease-in-out;
  ${({ currTab, name, theme }) =>
    currTab === name
      ? `color : ${theme.themePurple};
   font-weight: 500;
    `
      : `color :  ${theme.themeBlack};; 
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

const fadeInOut = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const NavContainer = styled.div<BasicComponentProps>`
  border: 2px solid ${({ theme }) => theme.themeBlack};
  margin-top: 2vh;
  margin-left: 2%;
  margin-right: 1%;
  border-bottom-left-radius: ${({ theme }) => theme.radiusXs};
  border-top-left-radius: ${({ theme }) => theme.radiusXs};
  border-top-right-radius: ${({ theme }) => theme.radiusXs};
  position: fixed;
  color: ${({ theme }) => theme.themeBlack};
  background-color: ${({ theme }) => theme.themeWhite};
  z-index: 9999;
  width: 97%;
  height: 80px;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ThemeBtnWrapper = styled.div<BasicComponentProps>`
  border-left: 2px solid ${(props) => props.theme.themeBlack};
  border-top-right-radius: ${theme.radiusXxs};
  height: 100%;
  width: 78px;
  transition: background-color 0.3s ease-in-out;
  background-color: ${(props) => props.theme.themeBlack};
`;

const ThemeBtn = styled.button<{ darkmode: boolean }>`
  flex-grow: 1;
  border: 1px solid ${theme.themeBlack};
  border-radius: ${theme.radiusXxs};
  transition: background-color 0.3s ease-in-out;
  background-color: ${(props) =>
    props.darkmode ? theme.themePurple : theme.themeWhite};
  color: ${(props) => (props.darkmode ? theme.themeWhite : theme.themeBlack)};
  animation: ${fadeInOut} 0.3s ease-in-out;
  pointer: cursor;
`;

const Logo = styled.img`
  width: 48px;
  height: 48px;
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

const SingleIconWrapper = styled.div<BasicComponentProps>`
  align-items: center;
  display: flex;
  justify-content: center;
  img{
    color: ${({theme}) => theme.themeWhite}
  }
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

export const SocialIcon = styled.img`
  margin: 4px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: 0.3s all ease-in;

  &:hover {
    filter: brightness(0) saturate(100%) invert(12%) sepia(85%) saturate(7402%)
      hue-rotate(263deg) brightness(84%) contrast(130%);
  }
`;

const NavImg = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 16px;
  filter: brightness(0) saturate(100%) invert(12%) sepia(85%) saturate(7402%)
    hue-rotate(263deg) brightness(84%) contrast(130%);
`;

const Dot = styled.div<BasicComponentProps>`
  position: absolute;
  top: 80px;
  transition: left 0.5s ease-in-out, top 0.5s ease-in-out,
    width 0.5s ease-in-out;
  height: 10px;
  background-color: ${({theme}) => theme.themePurple};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  z-index: 999;
`;

const SideNavTabWrapper = styled.div<BasicComponentProps>`
  margin-left: 2vw;
  margin-right: 1vw;
  border: 2px solid ${({theme}) => theme.themeBlack};
  border-top-left-radius: ${({theme}) =>theme.radiusXs};
`;

const SideNavIconWrapper = styled.div<BasicComponentProps>`
  height: 20vh;
  align-self: flex-start;
  margin-left: 2vw;
  margin-right: 1vw;
  width: 100%;
  div {
    border-bottom: 2px solid ${({theme}) => theme.themeBlack};
    border-left: 2px solid ${({theme}) => theme.themeBlack};
    width: 100%;
    padding: 10px;
  }
`;

interface SideNavProps extends BasicComponentProps {
  isOpen: boolean;
  shouldAnimate: boolean;
}
const SideNav = styled.div<SideNavProps>`
  position: fixed;
  top: 80px;
  right: 0;
  width: 100vw;
  height: calc(100vh - 80px);
  background-color: ${({theme}) => theme.themeWhite};
  transform: translateX(100%);
  z-index: 999;
  animation: ${({ isOpen, shouldAnimate }) =>
    shouldAnimate
      ? css`
          ${isOpen
            ? slideInAnimation
            : slideOutAnimation} 0.3s ease-in-out forwards
        `
      : "none"};
`;

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

const Navbar = () => {
  const { isOpen, setIsOpen, initialRender, darkMode, setDarkMode, theme } =
    useContext(GlobalContext);

  const sideNavRef = useRef<HTMLDivElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const handleOpenNav = () => {
    console.log("open nav");
    if (shouldAnimate === false) setShouldAnimate(true);
    if (isOpen === undefined) setIsOpen(false);
    setIsOpen(!isOpen);
  };

  const router = useRouter();
  const [currTab, setCurrTab] = useState("Work");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const navBtnRefs: Record<string, React.RefObject<HTMLButtonElement>> = {
    Work: useRef(null),
    About: useRef(null),
    Resume: useRef(null),
  };

  const sideNavBtnRefs: Record<string, React.RefObject<HTMLButtonElement>> = {
    Work: useRef(null),
    About: useRef(null),
    Resume: useRef(null),
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    }

    // Run the function once when component mounts
    handleResize();

    // Run it again every time the window size changes
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const selectedItemRef = isMobile
    ? sideNavBtnRefs[currTab]
    : navBtnRefs[currTab];
  return (
    <>
      <NavContainer theme={theme}>
        <section
          className="flex justify-between flex-1 relative"
          style={{ height: "100%" }}
        >
          <div className="flex items-center ms-5">
            <Logo src="/asset/logo.svg" alt="Logo" />
            <PurpleText fontWeight={500} fontSize="20px" className="md:block hidden">
              Fred Zhao
            </PurpleText>
          </div>
          <div className="hidden md:flex">
            <NavBtn
              theme={theme}
              name="Work"
              ref={navBtnRefs.Work}
              currTab={currTab}
              onMouseEnter={() => setHoveredItem("Work")}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => {
                setCurrTab("Work");
                router.push("/");
              }}
            >
              Work
            </NavBtn>
            <NavBtn
              theme={theme}
              name="About"
              ref={navBtnRefs.About}
              currTab={currTab}
              onMouseEnter={() => setHoveredItem("About")}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => {
                setCurrTab("About");
                router.push("/about");
              }}
            >
              About
            </NavBtn>
            <NavBtn
              theme={theme}
              name="Resume"
              ref={navBtnRefs.Resume}
              currTab={currTab}
              onMouseEnter={() => setHoveredItem("Resume")}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => {
                setCurrTab("Resume");
                router.push("/resume");
              }}
            >
              Resume
            </NavBtn>
            <ThemeBtnWrapper className="flex p-2">
              <ThemeBtn
                onClick={() => {
                  setDarkMode(!darkMode);
                }}
                darkmode={!darkMode}
                style={{ height: "100%", width: "100%", marginRight: "5px" }}
              >
                A
              </ThemeBtn>
              <ThemeBtn
                onClick={() => {
                  setDarkMode(!darkMode);
                }}
                darkmode={darkMode}
                style={{ height: "100%", width: "100%" }}
              >
                B
              </ThemeBtn>
            </ThemeBtnWrapper>
          </div>
          {!isMobile && selectedItemRef.current && (
            <Dot
            theme={theme}
              style={{
                left: selectedItemRef.current.offsetLeft,
                width: selectedItemRef.current.offsetWidth,
                top: "68px",
              }}
            />
          )}
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
      theme={theme}
        ref={sideNavRef}
        className="md:hidden"
        isOpen={isOpen}
        shouldAnimate={shouldAnimate}
      >
        <div
          className="flex flex-col justify-start"
          style={{ height: "calc(90vh - 100px)", marginTop: "20px" }}
        >
          <SideNavTabWrapper theme={theme}>
            <NavBtn
              name="Work"
              currTab={currTab}
              ref={sideNavBtnRefs.Work}
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
              ref={sideNavBtnRefs.About}
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
              ref={sideNavBtnRefs.Resume}
              onClick={() => {
                setCurrTab("Resume");
                router.push("/resume");
                handleOpenNav();
              }}
            >
              Resume
            </NavBtn>
            {selectedItemRef.current && (
              <Dot
              theme={theme}
                style={{
                  top:
                    selectedItemRef.current.offsetTop +
                    selectedItemRef.current.offsetHeight / 2 -
                    5,
                }}
              />
            )}
          </SideNavTabWrapper > 
          <div className="flex ">
            <SideNavIconWrapper theme={theme} className="flex justify-start">
              <SingleIconWrapper>
                <SocialIcon src="/asset/Github.png" alt="Logo" />
              </SingleIconWrapper>

              <SingleIconWrapper  theme={theme}>
                <SocialIcon src="/asset/Linkedin.png" alt="Logo" />
              </SingleIconWrapper>
              <SingleIconWrapper  theme={theme}>
                <SocialIcon src="/asset/mail.png" alt="Logo"  />
              </SingleIconWrapper>
            </SideNavIconWrapper>
            <div
              style={{
                borderRight: `2px solid ${theme.themeBlack}`,
                borderLeft: `2px solid ${theme.themeBlack}`,
                borderBottom: `2px solid ${theme.themeBlack}`,
                width: "100%",
                marginRight: "1vw",
                height: "40vh",
                padding: "20px",
              }}
            >
              <div className="flex" style={{ width: "80%", marginLeft: "30%" }}>
                <VerticalText style={{ fontSize: "15px" }}>
                  Contact me -{" "}
                  <small
                    style={{ color: `${theme.themePurple}`, fontSize: "20px" }}
                  >
                    fredzhao@gmail.com
                  </small>
                </VerticalText>
                <VerticalText>Made with passion using Next.js</VerticalText>
              </div>
            </div>
          </div>
        </div>
      </SideNav>
    </>
  );
};

export default Navbar;
