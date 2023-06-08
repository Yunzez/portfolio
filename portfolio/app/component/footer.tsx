"use client";
import React from "react";
import theme from "../theme/theme";
import styled from "styled-components";
import {
  PurpleText,
  FooterWrapper,
  VerticalText,
} from "../theme/themedComponents";
import { openInNewTab } from "../utils";

const SocialIcon = styled.img`
  margin: 4px;
  width: 25px;
  height: 25px;
  cursor: pointer;
  transition: 0.3s all ease-in;

  &:hover {
    filter: brightness(0) saturate(100%) invert(12%) sepia(85%) saturate(7402%)
      hue-rotate(263deg) brightness(84%) contrast(130%);
  }

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

export const SocialIconDiv = styled.div`
  border-bottom: 2px solid black;
  width: 100%;

  @media (max-width: 568px) {
    border-bottom: 0px solid black;
  }
`;

const FooterTextDiv = styled.div``;
const Footer = () => {
  return (
    <FooterWrapper>
      <SocialIconDiv className="flex justify-center md:block grow-0 py-2 ">
        <SocialIconWrapper className="flex w-100 cursor-pointer m-1">
          <SocialIcon
            src="/asset/Github.png"
            alt="Logo"
            onClick={() => openInNewTab("https://github.com/Yunzez")}
          />
        </SocialIconWrapper>

        <SocialIconWrapper className="flex w-100 cursor-pointer m-1">
          <SocialIcon
            src="/asset/Linkedin.png"
            alt="Logo"
            onClick={() =>
              openInNewTab("https://www.linkedin.com/in/yunze-zhao-351687224/")
            }
          />
        </SocialIconWrapper>

        <SocialIconWrapper className="flex w-100 cursor-pointer m-1">
          <SocialIcon
            src="/asset/mail.png"
            alt="Logo"
            onClick={() => openInNewTab("mailto:zhao.yunzeabh@gmail.com")}
          />
        </SocialIconWrapper>
      </SocialIconDiv>
      <FooterTextDiv>
        <VerticalText className=" md:text-sm text-xs md:grow-1 ">
          Made with passion using Next.js
        </VerticalText>
        <VerticalText className="py-2 md:text-sm text-xs md:grow-1 ">
          © 2023 Fred Zhao
        </VerticalText>
      </FooterTextDiv>
    </FooterWrapper>
  );
};

export default Footer;
