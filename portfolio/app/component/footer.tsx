"use client";
import React from "react";
import theme from "../theme/theme";
import styled from "styled-components";
import { PurpleText, FooterWrapper } from "../theme/themedComponents";


const Footer = () => {
  return (
    <FooterWrapper>
      <div className="flex justify-between flex-1 px-5">
        <section className="flex flex-col">
          <div>
            <PurpleText fontWeight={700} fontSize="32px" lineHeight="44px">
              Impressed with my work?
            </PurpleText>
          </div>
          <div className="flex">
            <small className="text-sm">Contact me - </small>{" "}
            <PurpleText className="text-base" fontWeight={300} fontSize="15px">
              zhao.yunzeabh@gmail.com
            </PurpleText>
          </div>
        </section>
        <section className="flex flex-col mt-2">
          <div className="md:self-end">Made with passion using Next.js</div>
          <div className="md:self-end text-sm">© 2023 Fred Zhao</div>
        </section>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
