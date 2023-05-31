"use client";
import React from "react";
import { openInNewTab } from "../utils";
import styled from "styled-components";
import theme from "../theme/theme";
const Resume = () => {
  const ResumeBtn = styled.div`
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border: none;
    background: none;
    color: ${theme.themeBlack};
    cursor: pointer;
    position: relative;
    padding: 18px;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 18px;
    transition: all .15s ease;
    border-radius: ${theme.radiusSm};

  
  &::before {
    top: 0;
    border-bottom-width: 0;
  }
  
  &::after {
    bottom: 0;
    border-top-width: 0;
  }
  
  &:active,
  &:focus {
    outline: none;
  }
  
  &:active::before,
  &:active::after {
    right: 3px;
    left: 3px;
  }
  
  &:active::before {
    top: 3px;
  }
  
  &:active::after {
    bottom: 3px;
  }
  
  .button_lg {
    border-radius: ${theme.radiusSm};

    position: relative;
    display: block;
    padding: 10px 20px;
    color: #fff;
    background-color: #0f1923;
    overflow: hidden;
    box-shadow: inset 0px 0px 0px 5px transparent;
  }
  
  .button_lg::before {

    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    background-color: #0f1923;
  }
  
  .button_lg::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 4px;
    height: 4px;
    background-color: #0f1923;
    transition: all .2s ease;
  }
  
  .button_sl {
    display: block;
    position: absolute;
    top: 0;
    bottom: -1px;
    left: -8px;
    width: 0;
    background-color: ${theme.themePurple};
    transform: skew(-20deg);
    transition: all .3s ease-in-out;
  }
  
  .button_text {
    position: relative;
  }
  
  &:hover {
    color: #0f1923;
  }
  
  &:hover .button_sl {
    width: calc(100% + 15px);
  }
  
  &:hover .button_lg::after {
    background-color: #fff;
  }
  
  `;
  return (
    <div className="flex justify-center w-screen" style={{height: '80vh'}}>
      <div className=" flex flex-col justify-center h-90" >
        <ResumeBtn
          onClick={() =>
            openInNewTab(
              "https://drive.google.com/file/d/1cO7eQHl432WPivxTcsLnZh_-r-7yeTec/view?usp=sharing"
            )
          }
        >
            <span className="button_lg">
        <span className="button_sl"></span>
        <span className="button_text"> View my resume</span>
    </span>
         
        </ResumeBtn>
        <ResumeBtn
          onClick={() =>
            openInNewTab(
              "https://drive.google.com/file/d/1cO7eQHl432WPivxTcsLnZh_-r-7yeTec/view?usp=sharing"
            )
          }
        >
          {" "}
          <span className="button_lg">
        <span className="button_sl"></span>
        <span className="button_text"> Download my resume</span>
    </span>
          
        </ResumeBtn>
      </div>
    </div>
  );
};

export default Resume;
