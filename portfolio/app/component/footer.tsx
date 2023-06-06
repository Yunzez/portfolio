"use client";
import React from "react";
import theme from "../theme/theme";
import styled from "styled-components";
import { PurpleText, FooterWrapper } from "../theme/themedComponents";
import { openInNewTab } from "../utils";

const SocialIcon = styled.img`
  margin: 4px;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  cursor: pointer;
  transition: 0.3s all ease-in;

  &:hover {
    filter: brightness(0) saturate(100%) invert(12%) sepia(85%) saturate(7402%)
      hue-rotate(263deg) brightness(84%) contrast(130%);
  }
`;
const Footer = () => {
  return (
    <FooterWrapper>
      <div className="grow-0 py-2 " style={{ borderBottom: "2px solid black", width:'100%'}}>
        <div className="flex w-100 py-1 cursor-pointer justify-center">
          <SocialIcon
            src="/asset/Github.png"
            alt="Logo"
            onClick={() => openInNewTab("https://github.com/Yunzez")}
          />
        </div>

        <div className="flex w-100 py-1 cursor-pointer justify-center" >
          <SocialIcon
            src="/asset/Linkedin.png"
            alt="Logo"
            onClick={() =>
              openInNewTab("https://www.linkedin.com/in/yunze-zhao-351687224/")
            }
          />
        </div>

        <div className="flex w-100 py-1 cursor-pointer justify-center">
          <SocialIcon
            src="/asset/mail.png"
            alt="Logo"
            onClick={() => openInNewTab("mailto:zhao.yunzeabh@gmail.com")}
          />
        </div>
      </div>
      <div className=" md:text-sm text-xs grow-1 " style={{writingMode: 'vertical-rl', textOrientation: 'mixed'}}>
        Made with passion using Next.js
      </div>
      <div className="py-2 md:text-sm text-xs grow-1 " style={{borderTop: "2px solid black", writingMode: 'vertical-rl', textOrientation: 'mixed'}}>
      © 2023 Fred Zhao
      </div>
    </FooterWrapper>
  );
};

export default Footer;
