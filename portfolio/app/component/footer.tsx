"use client";
import React, { useContext } from "react";
import theme from "../theme/theme";
import styled from "styled-components";
import {
  PurpleText,
  FooterWrapper,
  VerticalText,
} from "../theme/themedComponents";
import { BasicComponentProps, openInNewTab } from "../utils";
import { GlobalContext } from "../context/GlobalProvider";

const SocialIcon = styled.img`
  margin: 3px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  transition: 0.3s all ease-in;

  filter: brightness(0) saturate(100%) invert(12%) sepia(85%) saturate(7402%)
    hue-rotate(263deg) brightness(84%) contrast(130%);
  @media (max-width: 568px) {
    width: 25px;
    height: 25px;
  }
`;

export const SocialIconWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 568px) {
    display: block;
    padding: ${theme.gapMd};
    border: 2px solid ${theme.themeBlack};
    border-radius: ${theme.radiusXxs};
  }
`;

export const SocialIconDiv = styled.div<BasicComponentProps>`
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;
  justify-content: space-between;
  border-left: 2px solid ${({ theme }) => theme.themeBlack};

  div:not(:last-child) {
    border-bottom: 2px solid ${({ theme }) => theme.themeBlack};
  }
  @media (max-width: 568px) {
    border-bottom: 0px solid ${({ theme }) => theme.themeBlack};
  }
`;

const BottomFotterWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const FooterTextDiv = styled.div`
  width: 100%;
`;
const Footer = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <FooterWrapper>
      <div
        className="flex "
        style={{
          width: "100%",
          borderBottom: `2px solid ${theme.themeBlack}`,
        }}
      >
        <VerticalText>
          <small className="p-4">Social / Contacts</small>
        </VerticalText>
        <SocialIconDiv className="  md:block grow-1">
          <SocialIconWrapper className="flex w-100 cursor-pointer py-3">
            <SocialIcon
              src="/asset/Github.png"
              alt="Logo"
              onClick={() => openInNewTab("https://github.com/Yunzez")}
            />
          </SocialIconWrapper>

          <SocialIconWrapper className="flex w-100 cursor-pointer py-3">
            <SocialIcon
              src="/asset/Linkedin.png"
              alt="Logo"
              onClick={() =>
                openInNewTab(
                  "https://www.linkedin.com/in/yunze-zhao-351687224/"
                )
              }
            />
          </SocialIconWrapper>

          <SocialIconWrapper className="flex w-100 cursor-pointer py-3">
            <SocialIcon
              src="/asset/mail.png"
              alt="Logo"
              onClick={() => openInNewTab("mailto:zhao.yunzeabh@gmail.com")}
            />
          </SocialIconWrapper>
        </SocialIconDiv>
      </div>
      <div>🎓</div>
      <FooterTextDiv>
        <BottomFotterWrapper
          style={{
            width: "100%",
            borderBottom: `2px solid ${theme.themeBlack}`,
            borderTop: `2px solid ${theme.themeBlack}`,
          }}
        >
          <VerticalText
            style={{
              width: "100%",
              fontSize: "18px",
              flexGrow: "1",
            }}
            className=" md:text-sm text-xs md:grow-1 p-2"
          >
            Contact me -{" "}
            <small style={{ color: `${theme.themePurple}` }}>
              zhao.yunzeabh@gmail.com
            </small>
          </VerticalText>
          <VerticalText
            style={{
              width: "100%",
              margin: "2px",
            }}
            className="py-2 md:text-sm text-xs md:grow-1 p-1"
          >
            <small>Made with passion using Next.js</small>
          </VerticalText>
        </BottomFotterWrapper>
        <small style={{ fontSize: "8px" }}>© 2023 Fred Zhao</small>
      </FooterTextDiv>
    </FooterWrapper>
  );
};

export default Footer;
