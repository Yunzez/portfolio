import React, { useContext, useEffect, useRef, useState } from "react";
import styled, {css, keyframes} from "styled-components";
import { useTransition, animated } from "@react-spring/web";
import { GlobalContext } from "../context/GlobalProvider";
import { Message, useChatGPT } from "../context/ChatGPTContext";
import {
    communicateWithChatGPT,
  } from "../utils";
interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const ChatModalComponent: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const { theme, dev } = useContext(GlobalContext);
  const containerRef = useRef<HTMLDivElement>(null);
  const questionInputRef = useRef<HTMLInputElement>(null);
  const [isChatGPTLoading, setIsChatGPTLoading] = useState(false);
  const [needScroll, setNeedScroll] = useState(false);
  const { messages, addMessage, questionNumber, setQuestionNumber } =
    useChatGPT();
  const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

  const pushQuestion = keyframes`
  0% {
    transform: translateY(30vw);
    opacity: 0
  }
  60%{
    opacity: 0
  }
  100% {
    transform: translateY(0);
    opacity: 0.7;
  }
`;
  const Question = styled.div<{ loading?: boolean }>`
    margin-bottom: 10px;
    overflow: hidden;
    border: 2px solid ${theme.themePurple};
    padding: 10px;
    border-radius: ${theme.radiusXs};
    max-width: 90%;
    ${({ loading }) =>
      loading &&
      css`
        height: 50px;
        animation: ${pushQuestion} 0.8s cubic-bezier(0.22, 1, 0.36, 1),
          ${resetTextOverflow} 0.5s ease-in 0.8s forwards;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      `};
  `;

  const Answer = styled.div<{ loading: boolean }>`
    margin-bottom: 10px;
    overflow: hidden;
    border: 2px solid ${theme.themeBlack};
    padding: 10px;
    border-radius: ${theme.radiusXs};
    max-width: 90%;
    ${({ loading }) =>
      loading &&
      css`
        height: 50px;
        animation: ${pushQuestion} 0.8s cubic-bezier(0.22, 1, 0.36, 1),
          ${resetTextOverflow} 0.5s ease-in 0.8s forwards;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      `};
  `;

  const LoadingPlaceholder = styled.div`
    background-color: ${theme.themeWhite};
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.radiusXs};
    border: 2px solid ${theme.themePurple};
    color: ${theme.themePurple};

    &::after {
      content: "";
      display: inline-block;
      margin-left: 10px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 2px solid ${theme.themePurple};
      border-color: ${theme.themePurple} transparent ${theme.themePurple}
        transparent;
      animation: ${spinAnimation} 0.8s linear infinite;
    }
  `;

  const resetTextOverflow = keyframes`
  0% {
    opacity: 0.7;
    max-height: 50px;
    overflow: hidden;
    white-space: nowrap;
        text-overflow: ellipsis;
  }
  50% {
    opacity: 0.85;
    max-height: 100px;
    overflow: hidden;
    white-space: nowrap;
  }
  100% {opacity: 1;
    white-space: initial;
    height: auto;
    text-overflow: initial;
    max-height: none;
    overflow: visible;
  }
`;

  const QuestionInput = styled.input`
    display: block;
    width: 100%;
    padding: 1em;
    margin: 1em 0;
    border: 2px solid ${theme.themePurple};
    border-radius: 0.5em;
  `;

  const SubmitButton = styled.button`
    background-color: ${theme.themePurple};
    color: white;
    border: none;
    padding: 1em 2em;
    border-radius: ${theme.radiusXs};
    float: end;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${theme.themeBlack};
    }
  `;
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

    position:relative;
    scroll-behavior: smooth;
    background-color: ${theme.themeWhite};
    border: 2px solid ${theme.themePurple};
    border-radius: ${theme.radiusXs};
    padding-left: 2rem;
    padding-right: 2rem;
    width: 70vw;
    height: 85vh;
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
    transition: transform 0.2s ease-in-out, border-radius 0.4s ease-in-out,
      padding 0.2s ease-in-out;

    &:hover {
      border-radius: ${theme.radiusXs};
      transform: rotate(-85deg);
      padding: 1px;
      box-shadow: 1px;
    }
  `;

  const ModalHeader = styled.div`
  z-index: 999;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: ${theme.themeWhite};
  display: flex;
  justify-content: end;
  align-items: center;
  height: 80px;
    border-bottom: 2px solid ${theme.themePurple};
  `;

  const ChildDiv = styled.div`
  position: relative;
  margin-top: 10px;
  height: calc(90% - 1.5rem);
  `

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
  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight + 10;
      }
    }, 300);

    return () => {
      clearTimeout(scrollTimeout);
    };
  }, [messages]);
  return transitions(
    (styles, item) =>
      item && (
        <Backdrop style={styles} onClick={onRequestClose}>
          <ModalBox onClick={(e) => e.stopPropagation()} ref={containerRef}>
            <ModalHeader>
            {/* <h2 className="text-2xl">Ask any question about me!</h2> */}
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
            </ModalHeader>

            <ChildDiv >
            <div className="mt-5">
                  {messages.length === 1 && (
                    <LoadingPlaceholder>Loading ChatGPT...</LoadingPlaceholder>
                  )}
                  {messages.map((value, index) => (
                    <div key={index}>
                      <div
                        style={
                          value.role === "user"
                            ? {
                                display: "flex",
                                justifyContent: "flex-end",
                              }
                            : {
                                display: "flex",
                                justifyContent: "flex-start",
                              }
                        }
                      >
                        {value.role === "user" && (
                          <>
                            <Question loading={index === messages.length - 1}>
                              {value.content}
                            </Question>
                          </>
                        )}
                        {value.role === "assistant" && (
                          <>
                            <Answer loading={index === messages.length - 1}>
                              {value.content}
                            </Answer>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                  {isChatGPTLoading && (
                    <LoadingPlaceholder>Loading Answer...</LoadingPlaceholder>
                  )}
                </div>

                  <QuestionInput
                    ref={questionInputRef}
                    type="text"
                    placeholder="Enter your question here"
                  />
                  <div className="w-100">
                    <SubmitButton
                     className="mb-5"
                      onClick={async () => {
                        setIsChatGPTLoading(true);
                        if (!questionInputRef.current) {
                          throw new Error("error occured, cannot get text ref");
                        }

                        // ! get enw val
                        const newMessage: Message = {
                          role: "user",
                          content: questionInputRef.current?.value ?? "",
                        };
                        questionInputRef.current.value = "";

                        // ! if we are in dev
                        if(dev) {
                          addMessage(newMessage);
                          const respond = await communicateWithChatGPT([
                            ...messages,
                            newMessage,
                          ]);
                          const gptResponse = respond.choices[0].message;
  
                          addMessage(gptResponse);
                        } else {
                          addMessage(newMessage);
                          const newMessages = [
                            ...messages,
                            newMessage,
                          ]
                          const response = await fetch(
                            'https://www.yunzezhao.com/api/OpenAi',
                            { 
                              method: "POST",
                              body: JSON.stringify({
                                messages: newMessages 
                              })
                            }
                          );
                          
                          const data = await response.json();
                          const GPTResponse = data.data
                          let respondText = GPTResponse.choices[0].message;
                          addMessage(respondText);
                        }
                       
                        setIsChatGPTLoading(false);
                      }}
                    >
                      Ask ChatGPT
                    </SubmitButton>
                  </div>
            </ChildDiv>
          </ModalBox>
        </Backdrop>
      )
  );
};

export default ChatModalComponent;
