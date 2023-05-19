"use client";

import Image from "next/image";
import Link from "next/link";
import { PurpleText } from "./theme/themedComponents";
import styled from "styled-components";
import theme from "./theme/theme";

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
height: 750px;
width: 700px;
border: 1px solid lightgrey;
border-radius: ${theme.radiusSm}
`

const WorkCardThumb = styled.img<{background: string}>`
width: 100%;
height: 500px;
border-bottom: 1px solid lightgrey;
background-color: ${({ background }) => background || ""};
`
function WorkCard(props: WorkCardProps) {
  return <WorkCardWrapper>
    <WorkCardThumb background='#EEF5FF' src={props.thumbNailImg} />
  </WorkCardWrapper>;
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

      <section>
        <WorkCard
          name="OpenTug"
          date="Jun 2022 - Present"
          des="Frontend structure design and optimization, develop search algorithm, maps, and routing system. UI and UX improvements with switch from static rendering to frontend rendering."
          thumbNailImg="work/opentug.png"
          siteLink=""
          githubLink=""
          skills={['Typescript', 'Solid.js', 'Django']}
        />
      </section>
    </main>
  );
}
