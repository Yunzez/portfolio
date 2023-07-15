"use client";

import Image from "next/image";
import Link from "next/link";
import { PurpleText, OutlinedText } from "./theme/themedComponents";
import styled, { css, keyframes } from "styled-components";
import { theme } from "./theme/theme";
import { DisplayOptionIcon, SkillBadge } from "./sharedComponents";
import {
  BasicComponentProps,
  communicateWithChatGPT,
  data as workData,
} from "./utils";

import { useContext, useEffect, useRef, useState } from "react";
import { SkillTag } from "./utils";
import { AdjustedDivForFooter } from "./theme/themedComponents";
import { GlobalContext } from "./context/GlobalProvider";
import { ResumeBtn } from "./theme/themedComponents";
import { useTransition } from "react";
import ModalComponent from "./component/ChatGPTModal";
import { Message, useChatGPT } from "./context/ChatGPTContext";
type WorkCardProps = {
  name: string;
  date: string;
  des: string;
  skills: string[];
  siteLink?: string;
  githubLink?: string;
  thumbNailImg: string;
};
const enterAnimation = keyframes`
  from {
    transform: translateY(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const WorkCardWrapper = styled.div`
  animation: ${enterAnimation} 0.5s ease;
  margin: 1em;
  height: 780px;
  width: 700px; // Default to full width on small screens
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 500px;
    height: 650px;
  }
  @media (max-width: 568px) {
    width: 350px;
    height: 630px;
  }
`;

const WorkCardText = styled.div`
  padding-top: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
  @media (max-width: ${theme.breakpoints.md}) {
    width: 100%;
  }
`;
const WorkCardColText = styled.div`
  width: 60%;
  padding-top: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
  @media (max-width: ${theme.breakpoints.md}) {
    width: 100%;
  }
`;

const WorkCardButtons = styled.div`
  display: flex;
  justify-content: center;
  height: 70px;
  font-size: 20px;
  cursor: pointer;
`;

const WorkCardBtn = styled.button`
  text-decoration: underline;
  display: flex;
  justify-content: center;
  width: 100%;
  color: ${theme.themePurple};
  height: 100%;
  align-items: center;
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${theme.themePurple};
  }
  &:not(:last-child) {
    border-right: 1px solid ${theme.themeLightGrey};
    padding-right: 20px; // Add some space between the text and the border
    margin-right: 20px; // Add some space between the border and the next button
  }
`;

const AllWorkBtn = styled.button`
  width: 50%;
  padding-top: 20px;
  padding-bottom: 20px;
  color: ${theme.themePurple};
  font-weight: 500;
  font-size: 2em;
  text-decoration: underline;
  @media (max-width: 768px) {
    padding-top: 8px;
    padding-bottom: 8px;
    font-size: 1.1em;
  }
`;

const linkSvg = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 78 78"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M42.5801 35.7167L68.9011 9.39569"
      stroke="#4A00F2"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M71.4699 22.2339V6.82654H56.0625"
      stroke="#4A00F2"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M36.1565 6.82654H29.7367C13.6873 6.82654 7.26758 13.2463 7.26758 29.2957V48.5549C7.26758 64.6043 13.6873 71.0241 29.7367 71.0241H48.996C65.0454 71.0241 71.4651 64.6043 71.4651 48.5549V42.1352"
      stroke="#4A00F2"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const openInNewTab = (url: string) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

function WorkCard(props: WorkCardProps) {
  const { theme } = useContext(GlobalContext);

  const WorkCardThumb = styled.img<{ background: string }>`
    width: 100%;
    height: 500px;
    border: 2px solid ${theme.themeBlack};
    border-radius: ${theme.radiusXs};
    background-color: ${({ background }) => background || ""};

    @media (max-width: 768px) {
      width: 500px;
      height: 380px;
    }

    @media (max-width: 568px) {
      width: 350px;
      height: 280px;
    }
  `;
  return (
    <WorkCardWrapper>
      <WorkCardThumb background="#EEF5FF" src={props.thumbNailImg} />
      <WorkCardText>
        <div className="md:flex">
          <small className="text-xl md:text-3xl">
            {props.name}
            <div className="text-sm md:text-base font-light">{props.date}</div>
          </small>
          <div className="ms-auto flex items-start">
            {props.skills.map((item, index) => {
              return (
                <SkillBadge
                  theme={theme}
                  button={false}
                  active={false}
                  key={index}
                >
                  {item}
                </SkillBadge>
              );
            })}
          </div>
        </div>

        <div className="mt-2 mb-3 text-sm md:text-base">{props.des}</div>
      </WorkCardText>
      <WorkCardButtons>
        {props.siteLink && (
          <WorkCardBtn onClick={() => openInNewTab(props.siteLink as string)}>
            Live Site
            {<div className="ms-2">{linkSvg}</div>}
          </WorkCardBtn>
        )}
        {props.githubLink && (
          <WorkCardBtn onClick={() => openInNewTab(props.githubLink as string)}>
            Github
            {<div className="ms-2">{linkSvg}</div>}
          </WorkCardBtn>
        )}
      </WorkCardButtons>
    </WorkCardWrapper>
  );
}

const WorkCardColWrapper = styled.div`
  animation: ${enterAnimation} 0.5s ease;
  width: 100%;
  padding-left: 5vw;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  padding-top: 10px;
  padding-bottom: 10px;
  &:not(:last-child) {
    border-top: 1px solid ${theme.themeLightGrey};
  }
  @media (max-width: ${theme.breakpoints.md}) {
    display: block;
  }
`;

const WorkCardColBtn = styled.button`
  width: 100%;
  color: ${theme.themePurple};
  height: 100%;
  align-items: center;
  &:not(:last-child) {
    border-right: 1px solid ${theme.themeLightGrey};
  }
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${theme.themePurple};
  }
  @media (max-width: ${theme.breakpoints.md}) {
    display: block;
    width: 100%;
    height: 25px;
  }
`;

const WorkCardColButtons = styled.div`
  border-right: 1px solid lightgrey;
  display: flex;
  width: 30%;
  min-height: 100%;
  justify-content: center;
  height: 70px;
  font-size: 20px;
  margin-top: 0;
  cursor: pointer;

  @media (max-width: ${theme.breakpoints.md}) {
    border-right: 0px solid lightgrey;
    width: auto;
    height: auto;
    min-height: 22px;
    margin-top: 5px;
    padding: 5px;
    font-size: 15px;
  }
`;

function WorkCardColumn(props: WorkCardProps) {
  const { theme } = useContext(GlobalContext);
  return (
    <WorkCardColWrapper>
      <WorkCardColText>
        <div>
          <small className="text-xl md:text-3xl">
            {props.name}
            <div className="text-sm md:text-base font-light">{props.date}</div>
          </small>
        </div>

        <div className="mt-2 mb-3 text-sm md:text-base">{props.des}</div>
        <div className="ms-auto flex items-start">
          {props.skills.map((item, index) => {
            return (
              <SkillBadge
                theme={theme}
                button={false}
                active={false}
                key={index}
              >
                {item}
              </SkillBadge>
            );
          })}
        </div>
      </WorkCardColText>
      <WorkCardColButtons>
        {props.siteLink && (
          <WorkCardColBtn
            onClick={() => openInNewTab(props.siteLink as string)}
          >
            Live Site
          </WorkCardColBtn>
        )}
        {props.githubLink && (
          <WorkCardBtn onClick={() => openInNewTab(props.githubLink as string)}>
            Github
          </WorkCardBtn>
        )}
      </WorkCardColButtons>
    </WorkCardColWrapper>
  );
}

export default function Home() {
  const WelcomeContainer = styled.div`
    height: calc(60vh - 80px);
    margin-left: 70px;
    margin-top: 30vh;

    @media (max-width: 768px) {
      height: calc(80vh - 80px);
      margin-top: 15vh;
      margin-left: 20px;
    }
  `;

  const { theme, loaded } = useContext(GlobalContext);
  const [showAllWork, setShowAllWork] = useState(false);
  const [selectedTag, setSelectedTag] = useState<SkillTag[]>([SkillTag.All]);
  const [allWorkData, setAllWorkData] = useState(workData);
  const [isHovered, setHovered] = useState<SkillTag | undefined>(SkillTag.All);
  const [selectedView, setSelectedView] = useState("block");
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const questionInputRef = useRef<HTMLInputElement>(null);
const [isChatGPTLoading, setIsChatGPTLoading] = useState(false)
  const { messages, addMessage, questionNumber, setQuestionNumber } =
    useChatGPT();
  useEffect(() => {
    console.log("tage changed");
    const newData = workData;
    if (selectedTag.includes(SkillTag.All)) {
      setAllWorkData(newData);
    } else {
      const filtered = newData.filter((work) =>
        work.tag.includes(selectedTag[0])
      );
      setAllWorkData(filtered);
    }
  }, [selectedTag]);

  const handleTageChange = (tag: SkillTag) => {
    setSelectedTag([tag]);
  };

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

  return (
    <main style={{ direction: "ltr" }}>
      {loaded ? (
        <AdjustedDivForFooter>
          {showAllWork ? (
            <>
              <PurpleText
                fontSize="32px"
                style={{
                  marginBottom: "40px",
                  marginLeft: "60px",
                }}
              >
                All Works
              </PurpleText>
              <div className="md:flex px-2 justify-around md:flex-row-reverse">
                <div className="flex px-2 md:justify-center justify-end">
                  <DisplayOptionIcon
                    active={selectedView === "block"}
                    onClick={() => setSelectedView("block")}
                    src="work/blockView.svg"
                  />
                  <DisplayOptionIcon
                    active={selectedView === "column"}
                    onClick={() => setSelectedView("column")}
                    src="work/columnView.svg"
                  />
                </div>
                <div className="flex px-2 md:justify-center justify-start me-auto">
                  <SkillBadge
                    theme={theme}
                    button={true}
                    active={selectedTag.includes(SkillTag.All)}
                    onClick={() => handleTageChange(SkillTag.All)}
                    isHovered={isHovered === SkillTag.All}
                    onMouseEnter={() => setHovered(SkillTag.All)}
                    onMouseLeave={() => setHovered(undefined)}
                  >
                    <span>{SkillTag.All}</span>
                  </SkillBadge>
                  <SkillBadge
                    button={true}
                    theme={theme}
                    active={selectedTag.includes(SkillTag.FrontEnd)}
                    onClick={() => handleTageChange(SkillTag.FrontEnd)}
                    isHovered={isHovered === SkillTag.FrontEnd}
                    onMouseEnter={() => setHovered(SkillTag.FrontEnd)}
                    onMouseLeave={() => setHovered(undefined)}
                  >
                    {SkillTag.FrontEnd}
                  </SkillBadge>
                  <SkillBadge
                    theme={theme}
                    button={true}
                    active={selectedTag.includes(SkillTag.BackEnd)}
                    onClick={() => handleTageChange(SkillTag.BackEnd)}
                    isHovered={isHovered === SkillTag.BackEnd}
                    onMouseEnter={() => setHovered(SkillTag.BackEnd)}
                    onMouseLeave={() => setHovered(undefined)}
                  >
                    {SkillTag.BackEnd}
                  </SkillBadge>
                  <SkillBadge
                    theme={theme}
                    button={true}
                    active={selectedTag.includes(SkillTag.Hardware)}
                    onClick={() => handleTageChange(SkillTag.Hardware)}
                    isHovered={isHovered === SkillTag.Hardware}
                    onMouseEnter={() => setHovered(SkillTag.Hardware)}
                    onMouseLeave={() => setHovered(undefined)}
                  >
                    {SkillTag.Hardware}
                  </SkillBadge>
                </div>
              </div>
              {selectedView === "block" && (
                <section className="flex justify-center pb-5 mt-10 flex-wrap">
                  {allWorkData.map((item, index) => {
                    return (
                      <WorkCard
                        key={index}
                        name={item.name}
                        date={item.date}
                        des={item.description}
                        thumbNailImg={item.thumbnailImg}
                        siteLink={item.siteLink}
                        githubLink={item.githubLink}
                        skills={item.skills}
                      />
                    );
                  })}
                </section>
              )}

              {selectedView === "column" && (
                <section className="flex justify-center pb-5 mt-10 flex-wrap">
                  {allWorkData.map((item, index) => {
                    return (
                      <WorkCardColumn
                        key={index}
                        name={item.name}
                        date={item.date}
                        des={item.description}
                        thumbNailImg={item.thumbnailImg}
                        siteLink={item.siteLink}
                        githubLink={item.githubLink}
                        skills={item.skills}
                      />
                    );
                  })}
                </section>
              )}

              <section className="flex justify-center pb-5 mt-10 flex-wrap">
                <AllWorkBtn
                  className="mb-5 pb-5 mt-5"
                  onClick={() => {
                    setShowAllWork(false);
                    window.scrollTo(0, 0);
                  }}
                >
                  Back to Intro
                </AllWorkBtn>
              </section>
            </>
          ) : (
            <>
              <WelcomeContainer className="md:flex">
                <div className="md:w-4/5">
                  <small>Hello! {"I’m "}Yunze (Fred)!</small>
                  <div style={{ fontSize: "32px" }}>
                    A{" "}
                    <small
                      style={{
                        fontSize: "32px",
                        color: theme.themePurple,
                        fontWeight: "500",
                      }}
                    >
                      Software & Hardware Engineer
                    </small>{" "}
                    extraordinaire casting magic to solve problems.
                  </div>
                  <div>📍 Front-end Engineer @ OpenTug</div>
                  <div>
                    🎓 Masters Student @ NYU Tandon School of Engineering
                  </div>
                </div>
              </WelcomeContainer>
              <div style={{ maxWidth: "500px" }} className="mt-20">
                <ResumeBtn
                  onClick={async () => {
                    console.log("chat");
                    setIsChatModalOpen(true);
                    if (messages.length < 2) {
                      const respond = await communicateWithChatGPT(
                        messages,
                        true
                      );
                      const newRespond = respond.choices[0].message;
                      addMessage(newRespond);
                    }
                  }}
                >
                  <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text">
                      {" "}
                      Ask ChatGPT about me! (coming soon)
                    </span>
                  </span>
                </ResumeBtn>
              </div>
              <ModalComponent
                isOpen={isChatModalOpen}
                onRequestClose={() => {
                  setIsChatModalOpen(false);
                }}
              >
                <h2>Ask any question about me!</h2>
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
                  { isChatGPTLoading && <LoadingPlaceholder>Loading Answer...</LoadingPlaceholder>}
                </div>
                <QuestionInput
                  ref={questionInputRef}
                  type="text"
                  placeholder="Enter your question here"
                />
                <div className="w-100">
                <SubmitButton
                  onClick={async () => {
                    setIsChatGPTLoading(true)
                    if (!questionInputRef.current) {
                      throw new Error("error occured, cannot get text ref");
                    }
                    const newMessage: Message = {
                      role: "user",
                      content: questionInputRef.current?.value ?? "",
                    };
                    questionInputRef.current.value = "";
                    addMessage(newMessage);
                    const respond = await communicateWithChatGPT([
                      ...messages,
                      newMessage,
                    ]);
                    const gptResponse = respond.choices[0].message;

                    addMessage(gptResponse);
                    setIsChatGPTLoading(false)
                  }}
                >
                  Ask ChatGPT
                </SubmitButton>

                </div>
                
              </ModalComponent>
              <PurpleText
                fontSize="32px"
                style={{
                  marginBottom: "40px",
                  marginLeft: "60px",
                }}
              >
                Featured Works
              </PurpleText>

              <section className="flex justify-center pb-5 mt-10 flex-wrap">
                {workData.slice(0, 4).map((item, index) => {
                  return (
                    <WorkCard
                      key={index}
                      name={item.name}
                      date={item.date}
                      des={item.description}
                      thumbNailImg={item.thumbnailImg}
                      siteLink={item.siteLink}
                      githubLink={item.githubLink}
                      skills={item.skills}
                    />
                  );
                })}
                <AllWorkBtn
                  className="mb-5 pb-5 mt-5"
                  onClick={() => {
                    setShowAllWork(true);
                    window.scrollTo(0, 0);
                  }}
                >
                  See All Work
                </AllWorkBtn>
              </section>
            </>
          )}
        </AdjustedDivForFooter>
      ) : (
        <AdjustedDivForFooter>
          <LoadingPage />
        </AdjustedDivForFooter>
      )}
    </main>
  );
}

const LoaderWrapper = styled.div<BasicComponentProps>`
  border: 1px solid #000;
  width: 40vw;
  padding: 3px;
  margin-left: 10vw;
  margin-right: 10vw;
  margin-top: 50px;
  height: 22px;
  border-radius: ${({ theme }) => theme.radiusXxs};
  border: 2px solid ${({ theme }) => theme.themeBlack};
`;

const Loader = styled.div<BasicComponentProps>`
  height: 100%;
  border-radius: ${({ theme }) => theme.radiusXxs};
  background: ${({ theme }) => theme.themePurple};
`;

const LoadingPage = () => {
  const [progress, setProgress] = useState(0);
  const { theme } = useContext(GlobalContext);
  useEffect(() => {
    // Update progress every 40ms
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          return 100;
        }
        const newProgress = oldProgress + 1;
        return newProgress;
      });
    }, 40); // 40ms * 100 steps = 4000ms = 4 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div style={{ height: "vh" }}>
      <div className="flex" style={{ marginTop: "20vh" }}>
        <div>
          <PurpleText
            style={{ fontSize: "4vw", marginRight: "10vw", marginLeft: "10vw" }}
          >
            Fred Zhao
          </PurpleText>
        </div>
        <div>
          <PurpleText style={{ fontSize: "4vw" }}>{progress}%</PurpleText>
        </div>
      </div>

      <LoaderWrapper theme={theme}>
        <Loader theme={theme} style={{ width: `${progress}%` }}></Loader>
      </LoaderWrapper>
    </div>
  );
};
