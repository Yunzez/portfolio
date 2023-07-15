import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { useTransition, animated } from "@react-spring/web";
import { GlobalContext } from "../context/GlobalProvider";
import { useChatGPT } from "../context/ChatGPTContext";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
}

const ModalComponent: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  children,
}) => {
  const { theme } = useContext(GlobalContext);

  const Backdrop = styled(animated.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
  `;
  const ModalBox = styled(animated.div)`
    scroll-behavior: smooth;
    background-color: ${theme.themeWhite};
    border: 2px solid ${theme.themePurple};
    border-radius: 0.5rem;
    padding: 2rem;
    width: 70vw;
    height: 70vh;
    overflow-y: scroll;
    overflow-x: hidden;
  `;

  const CloseButton = styled.button`
    width: 45px;
    height: 45px;
    float: right;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    color: ${theme.themePurple};
    border: 3px solid ${theme.themePurple};
    padding: ${theme.gapMd};
    border-radius: ${theme.radiusLg};
    transition: transform 0.2s ease-in-out, border-radius 0.4s  ease-in-out, padding 0.2s  ease-in-out;

    &:hover {
      border-radius: ${theme.radiusXs};
      transform: rotate(-85deg);
      padding: 1px;
      box-shadow: 1px;
    }
  `;

  const transitions = useTransition(isOpen, {
    from: { opacity: 0, transform: "translateY(-200px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0, transform: "translateY(-200px)" },
    config: {
      tension: 210,
      friction: 20,
    },
  });

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onRequestClose();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onRequestClose]);

  return transitions(
    (styles, item) =>
      item && (
        <Backdrop style={styles} onClick={onRequestClose}>
          <ModalBox onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={onRequestClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill={theme.themePurple}
                viewBox="0 0 16 16"
                strokeWidth="10px"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </CloseButton>
            <div className="mt-3">{children}</div>
          </ModalBox>
        </Backdrop>
      )
  );
};

export default ModalComponent;
