"use client";
import React from "react";
import styled from "styled-components";
import theme from "../theme/theme";
import { PurpleText } from "../theme/themedComponents";
const OutlinedText = styled.h2`
  color: white;
  font-size: 40px;
  margin-bottom: 20px;
  text-shadow: -1px 1px 1px ${theme.themePurple},
    1px 1px 1px ${theme.themePurple}, 1px -1px 0 ${theme.themePurple},
    -1px -1px 0 ${theme.themePurple};
`;

const AboutWrapper = styled.div`
  padding: 35px;
`;

const AboutPage: React.FC = () => {
  return (
    <AboutWrapper>
      <div className="flex">
        <section className="w-3/5">
          <OutlinedText>About me</OutlinedText>
          <b>Who am I?</b>
          <p>
            I am a software and hardware developer who is passionate about
            building innovative solutions that solve complex problems. With a
            keen attention to detail and a dedication to continuous learning, I
            am committed to delivering high-quality code and designing robust
            hardware that exceeds expectations.
          </p>

          <b>My experiences so far:</b>
          <p>
            Developed and maintained complex software applications using Java,
            Python, and C++. Designed and tested hardware prototypes for a new
            wearable technology product, using CAD software and 3D printing
            technology. Worked on a team to build and deploy a scalable
            cloud-based infrastructure for a popular e-commerce website.
            Implemented new features and optimized performance of an existing
            mobile application for iOS and Android platforms.
          </p>

          <b>What I’m doing right now:</b>
          <p>
            I am a software developer who loves to code and create new programs.
            When I am not working on my latest project, you can find me planning
            my next road trip or hanging out with my friends. I enjoy the
            balance of my technical work and my leisure activities, as they both
            bring different forms of satisfaction and challenge.
          </p>

          <b>Why I do what I do:</b>
          <p>
            I became a software and hardware developer because I love solving
            complex problems and building innovative solutions that make
            {`people's`} lives better. I find the process of taking an idea from
            concept to reality incredibly rewarding, and I am constantly seeking
            out new challenges to push myself and my skills to the limit.
          </p>
        </section>
        <section className="w-2/5">profile pic</section>
      </div>
      <div>
        <OutlinedText>My Values</OutlinedText>
      </div>
    </AboutWrapper>
  );
};

export default AboutPage;
