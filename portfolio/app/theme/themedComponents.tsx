import styled from "styled-components";
import theme from "./theme";
import { BasicComponentProps } from "../utils";

export const OutlinedText = styled.h2`
  color: white;
  font-size: 40px;
  margin-bottom: 20px;
  text-shadow: -1px 1px 1px ${theme.themePurple},
    1px 1px 1px ${theme.themePurple}, 1px -1px 0 ${theme.themePurple},
    -1px -1px 0 ${theme.themePurple};
`;

export const FooterWrapper = styled.div<BasicComponentProps>`
  position: fixed;
  bottom: 0;
  right: 0;
  top: 80px;
  margin-right: 1%;
  border-left: 2px solid  ${({ theme }) => theme.themeBlack};
  border-right: 2px solid  ${({ theme }) => theme.themeBlack};
  border-bottom: 2px solid  ${({ theme }) => theme.themeBlack};
  margin-top: 2vh;
  width: 80px;
  border-bottom-left-radius: ${({ theme }) => theme.radiusXs};
  border-bottom-right-radius: ${({ theme }) => theme.radiusXs};
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.themeWhite};
  }

   @media (max-width: 568px) {display: none;}
 
`;

export const ResumeBtn = styled.div`
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
    transition: all 0.15s ease;
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
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 2px;
      height: 2px;
      background-color: #0f1923;
    }

    .button_lg::after {
      content: "";
      display: block;
      position: absolute;
      right: 0;
      bottom: 0;
      width: 4px;
      height: 4px;
      background-color: #0f1923;
      transition: all 0.2s ease;
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
      transition: all 0.3s ease-in-out;
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


export const AdjustedDivForFooter = styled.div`
  margin-right: calc(1% + 80px) !important;
  @media (max-width: 568px) {
    margin-right: 0 !important;
  }
`;

export const VerticalText = styled.div<BasicComponentProps>`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  color: ${({theme}) => theme.themeBlack}
`;


interface PurpleTextProps {
  fontStyle?: string;
  fontWeight?: number;
  fontSize?: string;
  lineHeight?: string;
}

export const PurpleText = styled.small<PurpleTextProps>`
  color:${theme.themePurple};
  font-style: ${({ fontStyle }) => fontStyle || "normal"};
  font-weight: ${({ fontWeight }) => fontWeight || 500};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  line-height: ${({ lineHeight }) => lineHeight || "20px"};

  @media (max-width: 768px) {
    /* Adjust the breakpoint as needed */
    font-size: ${({ fontSize }) => "14px"};
    font-weight: ${({ fontWeight }) => 500};
    line-height: ${({ lineHeight }) => "15px"};
  }
`;
