"use client";
import React from "react";
import { openInNewTab } from "../utils";
import styled from "styled-components";
import theme from "../theme/theme";
import { ResumeBtn } from "../theme/themedComponents";


const Resume = () => {
  
  return (
    <div className="flex justify-center w-screen" style={{ height: "80vh" }}>
      <div className=" flex flex-col justify-center h-90">
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
