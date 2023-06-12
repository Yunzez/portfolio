import styled from "styled-components";
import theme from "./theme";

export const OutlinedText = styled.h2`
  color: white;
  font-size: 40px;
  margin-bottom: 20px;
  text-shadow: -1px 1px 1px ${theme.themePurple},
    1px 1px 1px ${theme.themePurple}, 1px -1px 0 ${theme.themePurple},
    -1px -1px 0 ${theme.themePurple};
`;

export const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  top: 80px;
  margin-right: 1%;
  border-left: 2px solid ${theme.themeBlack};
  border-right: 2px solid ${theme.themeBlack};
  border-bottom: 2px solid ${theme.themeBlack};
  margin-top: 2vh;
  width: 80px;
  border-bottom-left-radius: ${theme.radiusXs};
  border-bottom-right-radius: ${theme.radiusXs};
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  }

   @media (max-width: 568px) {
  position: fixed;
  top: 85vh;
  bottom: 10px;
  margin-right: 1%;
  margin-left: 1%;
  border-left: 2px solid ${theme.themeBlack};
  border-top: 2px solid ${theme.themeBlack};
  border-right: 2px solid ${theme.themeBlack};
  border-bottom: 2px solid ${theme.themeBlack};
  margin-bottom: 1%;
  width: 98%;
  border-radius: ${theme.radiusXs};
  max-height: 12vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  }
 
`;

export const AdjustedDivForFooter = styled.div`
  margin-right: calc(1% + 80px) !important;
  @media (max-width: 568px) {
    margin-right: 0 !important;
  }
`;

export const VerticalText = styled.div`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
`;


interface PurpleTextProps {
  fontStyle?: string;
  fontWeight?: number;
  fontSize?: string;
  lineHeight?: string;
}

export const PurpleText = styled.small<PurpleTextProps>`
  color: ${theme.themePurple};
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
