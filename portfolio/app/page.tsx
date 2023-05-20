"use client";

import Image from "next/image";
import Link from "next/link";
import { PurpleText } from "./theme/themedComponents";
import styled from "styled-components";
import theme from "./theme/theme";
import workData from "./data/data.json";
type WorkCardProps = {
  name: string;
  date: string;
  des: string;
  skills: string[];
  siteLink?: string;
  githubLink?: string;
  thumbNailImg: string;
};
const WorkCardWrapper = styled.div`
  margin: 1em;
  height: 780px !important;
  width: 700px; // Default to full width on small screens
  border: 1px solid lightgrey;
  border-radius: ${theme.radiusSm};
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 500px; // On screens wider than 768px, set width to 700px
  }
`;


const SkillBadge = styled.div`
  border: 1px solid ${theme.themeBlack};
  margin: 0.5em;
  padding: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
  border-radius: ${theme.radiusSm};
  font-size: 16px;
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

function WorkCard(props: WorkCardProps) {
  return (
    <WorkCardWrapper>
      <WorkCardThumb background="#EEF5FF" src={props.thumbNailImg} />
      <WorkCardText>
        <div className="flex ">
          <small style={{ fontSize: "32px", marginTop: "0.2em" }}>
            {props.name}
          </small>
          <div className="ms-auto flex ">
            {props.skills.map((item, index) => {
              return <SkillBadge key={index}>{item}</SkillBadge>;
            })}
          </div>
        </div>
        <div style={{ fontSize: "16px", fontWeight: "300" }}>{props.date}</div>
        <div className="mt-2 mb-3">{props.des}</div>
      </WorkCardText>
      <WorkCardButtons>
        {props.siteLink && <WorkCardBtn>Live Site</WorkCardBtn>}
        {props.githubLink && <WorkCardBtn>Github</WorkCardBtn>}
      </WorkCardButtons>
    </WorkCardWrapper>
  );
}

export default function Home() {
  const WelcomeContainer = styled.div`
    height: calc(60vh - 80px);
    margin-left: 70px;
    margin-top: 30vh;
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
  `;

  return (
    <main>
      <WelcomeContainer className="md:flex">
        <div className="md:w-3/5">
          <small>Hello! {"I’m "}Yunze (Fred)!</small>
          <div style={{ fontSize: "42px" }}>
            A{" "}
            <small
              style={{
                fontSize: "42px",
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

        <div className="md:w-2/5 ms-5 flex justify-center">
          <WorkHeaderImg
            rotate="30deg"
            top="-10vh"
            height={"250px"}
            width="30px"
            src="work/wand.svg"
          />
          <WorkHeaderImg height={"350px"} width="330px" src="work/topHat.svg" />
        </div>
      </WelcomeContainer>
      <div className="flex justify-center">
        <ArrowDown src="work/downarrow.svg" />
      </div>

      <section className="flex justify-around mb-5 pb-5 mt-5 flex-wrap">
        {workData.map((item, index) => {
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
    </main>
  );
}
