import styled from "styled-components"
import theme from "./theme"


export const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  border-top: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  }
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

    @media (max-width: 768px) { /* Adjust the breakpoint as needed */
    font-size: ${({ fontSize }) =>  "14px"};
    font-weight: ${({ fontWeight }) =>  500};
    line-height: ${({ lineHeight }) =>  "15px"};
  }
  `;