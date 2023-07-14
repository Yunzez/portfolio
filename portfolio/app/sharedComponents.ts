import styled, { css, keyframes } from "styled-components";
import theme from "./theme/theme";
import { BasicComponentProps } from "./utils";

interface displayOptionsProps {
    active: boolean;
  }
  export const DisplayOptionIcon = styled.img<displayOptionsProps>`
    width: 50px;
    height: 50px;
    border: 1px solid
      ${(props) => (props.active ? theme.themePurple : theme.themeBlack)};
    color: ${(props) => (props.active ? theme.themePurple : "black")};
    margin: 0.5em;
    padding: 6px;
    border-radius: ${theme.radiusSm};
    font-size: 16px;
    cursor: pointer;
    transition: box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out,
      color 0.3s ease-in-out;
  
    @media (max-width: ${theme.breakpoints.md}) {
      width: 30px;
      height: 30px;
      padding: 5px;
    }
  `;

  interface SkillBadgeProps extends BasicComponentProps {
    active: boolean;
    button: boolean;
    isHovered?: boolean;
  }
  
  interface SkillBadgeBtnProps {
    active: boolean;
  }

  const borderDisappear = keyframes`
  from, 50% {
    border: 1px solid ${theme.themeBlack};
  }
  to {
    border: 0;
  }
`;

const borderRadiusChange = keyframes`
  from, 50% {
    border-radius: ${theme.radiusXxs};
  }
  to {
    border-radius: 0;
  }
`;

const borderBottomAppear = keyframes`
  from, 50% {
    border-bottom: 0;
  }
  to {
    border-bottom: 2px solid ${theme.themePurple};
  }
`;

// And the reverse animations for the unhover state

const borderBottomDisappear = keyframes`
  from, 50% {
    border-bottom: 2px solid ${theme.themePurple};
  }
  to {
    border-bottom: 0;
  }
`;

const borderRadiusReset = keyframes`
  from, 50% {
    border-radius: 0;
  }
  to {
    border-radius: ${theme.radiusXxs};
  }
`;

const borderAppear = keyframes`
  from, 50% {
    border: 0;
  }
  to {
    border: 2px solid ${theme.themePurple};
  }
`;

  

  export const SkillBadge = styled.div<SkillBadgeProps>`
  border: 2px solid
    ${(props) =>
      props.active ? props.theme.themePurple : props.theme.themeBlack};
  color: ${(props) =>
    props.active ? props.theme.themePurple : props.theme.themeBlack};
  margin: 0.5em;
  padding: 0.4em;
  padding-left: 0.7em;
  padding-right: 0.7em;
  border-radius: ${(props) => props.theme.radiusXxs};
  font-size: 16px;
  align-self: flex-start;
  cursor: ${(props) => (props.button ? "pointer" : "default")};
  transform: scale(1);
  ${(props) =>
    props.button &&
    css`
      &:hover {
        animation: ${css`
            ${borderDisappear} 0.15s ease-in-out forwards`}, ${css`
            ${borderRadiusChange} 0.15s ease-in-out 0.15s forwards`}, ${css`
            ${borderBottomAppear} 0.15s ease-in-out 0.3s forwards`};
        animation-fill-mode: forwards;
        transform: scale(1.05);
        transition: transform 0.3s ease-in-out;
      }
      ${props.isHovered &&
      css`
        animation: ${css`
            ${borderBottomDisappear} 0.15s ease-in-out forwards`}, ${css`
            ${borderRadiusReset} 0.15s ease-in-out 0.15s forwards`}, ${css`
            ${borderAppear} 0.15s ease-in-out 0.3s forwards`};
        animation-fill-mode: forwards;
        transform: scale(1);
        transition: transform 0.3s ease-in-out;
      `}
    `}

  @media (max-width: 768px) {
    padding: 0.3em;
    margin: 0.2em;
    padding-left: 0.75em;
    padding-right: 0.75em;
    font-size: 12px;
  }
`;