"use client";
import React from "react";
import theme from "../theme/theme";
import styled from "styled-components";
import { PurpleText, FooterWrapper } from "../theme/themedComponents";


const Footer = () => {
  return (
    <FooterWrapper>
      <div className="md:flex justify-between flex-1 px-5">
        <section className="flex flex-col">
          <div className="self-center md:self-start" >
            <PurpleText fontWeight={700} fontSize="32px" lineHeight="44px">
              Impressed with my work?
            </PurpleText>
          </div>
          <div className="flex self-center md:self-start items-center">
            <small className="text-sm">Contact me - </small>{" "}
            <PurpleText  fontWeight={300} fontSize="15px">
              zhao.yunzeabh@gmail.com
            </PurpleText>
          </div>
        </section>
        <section className="flex flex-col mt-2">
          <div className=" self-center md:self-end md:text-base text-xs">Made with passion using Next.js</div>
          <div className="self-center md:self-end md:text-sm text-xs">© 2023 Fred Zhao</div>
        </section>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
