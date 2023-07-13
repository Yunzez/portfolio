import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { useTransition, animated } from "@react-spring/web";
import { GlobalContext } from "../context/GlobalProvider";

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

  const ModalBox = styled(animated.div)`
    background-color: ${theme.themeWhite};
    border: 2px solid ${theme.themePurple};
    border-radius: 0.5rem;
    padding: 2rem;
    min-width: 80vw;
    min-height: 50vh;
  `;

  const CloseButton = styled.button`
    float: right;
    background-color: transparent;
    border: none;
    cursor: pointer;
    border: 2px solid ${theme.themePurple};
    padding: ${theme.gapSm};
    border-radius: ${theme.radiusSm};
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
            <CloseButton onClick={onRequestClose}>&times;</CloseButton>
            {children}
          </ModalBox>
        </Backdrop>
      )
  );
};

export default ModalComponent;
