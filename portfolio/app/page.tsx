"use client";

import Image from "next/image";
import Link from "next/link";
import { PurpleText, OutlinedText } from "./theme/themedComponents";
import styled, { keyframes } from "styled-components";
import theme from "./theme/theme";
import { data as workData } from "./utils";
import { useEffect, useState } from "react";
import { SkillTag } from "./utils";
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
  border: 1px solid lightgrey;
  border-radius: ${theme.radiusSm};
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

interface SkillBadgeProps {
  active: boolean;
  button: boolean;
}

const SkillBadge = styled.div<SkillBadgeProps>`
  border: 1px solid ${(props) => (props.active ? "purple" : theme.themeBlack)};
  color: ${(props) => (props.active ? "purple" : "black")};
  margin: 0.5em;
  padding: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
  border-radius: ${theme.radiusSm};
  font-size: 16px;
  cursor: ${(props) => (props.button ? "pointer" : "default")};
  transition: box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out,
    color 0.3s ease-in-out;

  ${(props) =>
    props.button &&
    `
    &:hover {
      box-shadow: 0px 2px 4px rgba(0,0,0,0.5);
    }
  `}

  @media (max-width: 768px) {
    padding: 0.3em;
    margin: 0.2em;
    padding-left: 0.75em;
    padding-right: 0.75em;
    font-size: 12px;
  }
`;

const WorkCardThumb = styled.img<{ background: string }>`
  width: 100%;
  height: 500px;
  border-top-left-radius: ${theme.radiusSm};
  border-top-right-radius: ${theme.radiusSm};
  border-bottom: 1px solid lightgrey;
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

const WorkCardText = styled.div`
  padding-top: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
`;

const WorkCardButtons = styled.div`
  border-top: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  height: 70px;
  font-size: 20px;
  margin-top: auto;
  cursor: pointer;
`;

const WorkCardBtn = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  color: ${theme.themePurple};
  height: 100%;
  align-items: center;
  &:not(:last-child) {
    border-right: 1px solid ${theme.themeLightGrey};
    padding-right: 20px; // Add some space between the text and the border
    margin-right: 20px; // Add some space between the border and the next button
  }
`;

const AllWorkBtn = styled.button`
  border: 1px solid ${theme.themeBlack};
  width: 50%;
  padding-top: 20px;
  padding-bottom: 20px;
  color: ${theme.themeBlack};
  font-weight: 300;
  border-radius: ${theme.radiusLg};
  font-size: 1.5em;

  @media (max-width: 768px) {
    padding-top: 8px;
    padding-bottom: 8px;
    font-size: 1.1em;
  }
`;
const openInNewTab = (url: string) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

function WorkCard(props: WorkCardProps) {
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
                <SkillBadge button={false} active={false} key={index}>
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
          </WorkCardBtn>
        )}
        {props.githubLink && (
          <WorkCardBtn onClick={() => openInNewTab(props.githubLink as string)}>
            Github
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
  padding-right: 5vw;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  padding-top: 10px; 
  padding-bottom: 10px;
  &:not(:last-child) {
    border-top: 1px solid ${theme.themeLightGrey};
  }
`;

const WorkCardColBtn = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  color: ${theme.themePurple};
  height: 100%;
  align-items: center;
  &:not(:last-child) {
    border-right: 1px solid ${theme.themeLightGrey};
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
`;


function WorkCardColumn(props: WorkCardProps) {
  return (
    <WorkCardColWrapper>
      <WorkCardText style={{width: '60%'}}>
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
              <SkillBadge button={false} active={false} key={index}>
                {item}
              </SkillBadge>
            );
          })}
        </div>
      </WorkCardText>
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
  const ArrowDown = styled.img`
    width: 40px;
    height: 40px;
    filter: brightness(0) saturate(100%) invert(12%) sepia(85%) saturate(7402%)
      hue-rotate(263deg) brightness(84%) contrast(130%);
  `;

  const WorkHeaderImg = styled.img<{
    height: string;
    width: string;
    rotate?: string;
    top?: string;
  }>`
    width: ${({ width }) => width || "140px"};
    height: ${({ height }) => height || "140px"};
    transform: ${({ rotate }) => rotate && `rotate(${rotate})`};
    position: ${({ top }) => top && "relative"};
    top: ${({ top }) => top || "0"};

    @media (max-width: 768px) {
      height: 150px;
    }
  `;

  interface displayOptionsProps {
    active: boolean;
  }
  const DisplayOptionIcon = styled.img<displayOptionsProps>`
    width: 45px;
    height: 45px;
    border: 2px solid ${(props) => (props.active ? "purple" : theme.themeBlack)};
    color: ${(props) =>
      props.active ? "purple !important" : "black !important"};
    margin: 0.5em;
    padding: 6px;
    border-radius: ${theme.radiusSm};
    font-size: 16px;
    cursor: pointer;
    transition: box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out,
      color 0.3s ease-in-out;
  `;

  const [showAllWork, setShowAllWork] = useState(false);
  const [selectedTag, setSelectedTag] = useState<SkillTag[]>([SkillTag.All]);
  const [allWorkData, setAllWorkData] = useState(workData);

  const [selectedView, setSelectedView] = useState("block");
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
  return (
    <main>
      {showAllWork ? (
        <>
          <OutlinedText
            style={{
              marginBottom: "40px",
              marginLeft: "60px",
            }}
          >
            All Work
          </OutlinedText>
          <div className="flex px-2 justify-around">
            <div className="flex px-2 justify-center">
              <SkillBadge
                button={true}
                active={selectedTag.includes(SkillTag.All)}
                onClick={() => handleTageChange(SkillTag.All)}
              >
                {SkillTag.All}
              </SkillBadge>
              <SkillBadge
                button={true}
                active={selectedTag.includes(SkillTag.FrontEnd)}
                onClick={() => handleTageChange(SkillTag.FrontEnd)}
              >
                {SkillTag.FrontEnd}
              </SkillBadge>
              <SkillBadge
                button={true}
                active={selectedTag.includes(SkillTag.BackEnd)}
                onClick={() => handleTageChange(SkillTag.BackEnd)}
              >
                {SkillTag.BackEnd}
              </SkillBadge>
              <SkillBadge
                button={true}
                active={selectedTag.includes(SkillTag.Hardware)}
                onClick={() => handleTageChange(SkillTag.Hardware)}
              >
                {SkillTag.Hardware}
              </SkillBadge>
            </div>
            <div className="flex px-2 justify-center">
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
              onClick={() => setShowAllWork(false)}
            >
              Back to Intro
            </AllWorkBtn>
          </section>
        </>
      ) : (
        <>
          <WelcomeContainer className="md:flex">
            <div className="md:w-3/5">
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
              <div>🎓 Masters Student @ NYU Tandon School of Engineering</div>
            </div>

            <div className="md:w-2/5 md:ms-5 flex justify-center mt-28 md:mt-12 ms-32">
              <WorkHeaderImg
                rotate="30deg"
                top="-10vh"
                height={"250px"}
                width="30px"
                src="work/wand.svg"
              />
              <WorkHeaderImg
                height={"350px"}
                width="330px"
                src="work/topHat.svg"
              />
            </div>
          </WelcomeContainer>
          <div className="flex justify-center mb-3 -mt-5 md:mt-2">
            <ArrowDown src="work/downarrow.svg" />
          </div>

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
              onClick={() => setShowAllWork(true)}
            >
              View All Work
            </AllWorkBtn>
          </section>
        </>
      )}
    </main>
  );
}
