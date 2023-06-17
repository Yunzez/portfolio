"use client";
import React, { useContext } from "react";
import styled from "styled-components";
import theme from "../theme/theme";
import { PurpleText, OutlinedText, AdjustedDivForFooter } from "../theme/themedComponents";
import { GlobalContext } from "../context/GlobalProvider";


const AboutPage: React.FC = () => {
  const { isOpen, setIsOpen, loaded, theme } = useContext(GlobalContext);
  const AboutWrapper = styled.div`
  padding: 35px;
`;

const ValueCard = styled.div`
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 80px;
  border-radius: ${theme.radiusSm};
  width: 430px;
  flex-shrink: 0;

  @media (max-width: ${theme.breakpoints.md}) {
    margin: 10px;
    width: 100%;
  }
`;

const AboutImg = styled.img<{ isNavOpen: boolean }>`
  width: 80px;
  height: 80px;
  margin-right: 16px;
  filter: brightness(0) saturate(100%) invert(12%) sepia(85%) saturate(7402%)
    hue-rotate(263deg) brightness(84%) contrast(130%);
  display: ${props => (props.isNavOpen ? 'none' : 'block')};
`;

const ProfileImg = styled.img`
  margin-left: 16px;
  object-fit: contain;
  border-radius: ${theme.radiusSm}
`;


const AboutCardHeader = styled.small`
  font-size: 28px;
  font-weight: 500;
`;

  return (
    <AboutWrapper>
      <AdjustedDivForFooter>
      <div className="md:flex">
        <section className="md:w-3/5">
          <OutlinedText
            style={{
              marginBottom: "40px",
              marginLeft: "60px",
            }}
          >
            About me
          </OutlinedText>
          <div className="md:ms-12">
            <div className="mt-5">
              <b>Who am I?</b>
            </div>

            <p>
              I am a software and hardware developer who is passionate about
              building innovative solutions that solve complex problems. With a
              keen attention to detail and a dedication to continuous learning,
              I am committed to delivering high-quality code and designing
              robust hardware that exceeds expectations.
            </p>

            <div className="mt-5">
              <b>My experiences so far:</b>
            </div>

            <p>
              Developed and maintained complex software applications using Java,
              Python, and C++. Designed and tested hardware prototypes for a new
              wearable technology product, using CAD software and 3D printing
              technology. Worked on a team to build and deploy a scalable
              cloud-based infrastructure for a popular e-commerce website.
              Implemented new features and optimized performance of an existing
              mobile application for iOS and Android platforms.
            </p>

            <div className="mt-5">
              <b>What {`I'm`} doing right now:</b>
            </div>

            <p>
              I am a software developer who loves to code and create new
              programs. When I am not working on my latest project, you can find
              me planning my next road trip or hanging out with my friends. I
              enjoy the balance of my technical work and my leisure activities,
              as they both bring different forms of satisfaction and challenge.
            </p>

            <div className="mt-5">
              <b>Why I do what I do:</b>
            </div>

            <p>
              I became a software and hardware developer because I love solving
              complex problems and building innovative solutions that make
              {`people's`} lives better. I find the process of taking an idea
              from concept to reality incredibly rewarding, and I am constantly
              seeking out new challenges to push myself and my skills to the
              limit.
            </p>
          </div>
        </section>
        <section className="md:w-2/5 md:p-10 p-5 mt-5 item-center flex items-center justify-center ">

        <ProfileImg src="./about/profile.JPG"/>
        </section>
      </div>
      <div>
        <OutlinedText
          style={{
            marginTop: "120px",
            marginBottom: "40px",
            marginLeft: "60px",
          }}
        >
          My Values
        </OutlinedText>
        <section className="flex justify-around flex-wrap">
          <ValueCard>
            <AboutImg src="/about/timer-start.svg" alt="Logo" isNavOpen={isOpen}/>
            <AboutCardHeader>Persistence</AboutCardHeader>
            <div>
              Being a software and hardware engineer can be challenging at
              times, and Persistence help me deal with difficult problems that
              require perseverance to solve.
            </div>
          </ValueCard>

          <ValueCard>
            <AboutImg src="/about/user-octagon.svg" alt="Logo" isNavOpen={isOpen}/>
            <AboutCardHeader>Integrity</AboutCardHeader>
            <div>
              I always act with integrity and be honest in your work, taking
              responsibility for my actions and decisions.
            </div>
          </ValueCard>

          <ValueCard>
            <AboutImg src="/about/electricity.svg" alt="Logo" isNavOpen={isOpen}/>
            <AboutCardHeader>Adaptability</AboutCardHeader>
            <div>
              Technology is constantly evolving, so {`it's`} important to be
              flexible and adaptable to change. I try always to quickly learn
              new technologies and adjust my work as needed.
            </div>
          </ValueCard>

          <ValueCard>
            <AboutImg src="/about/star.svg" alt="Logo" isNavOpen={isOpen}/>
            <AboutCardHeader>Respect</AboutCardHeader>
            <div>
              {`It's`} essential to respect others, colleagues, clients, and
              users of my software or hardware. This includes respecting their
              time, opinions, and expertise.
            </div>
          </ValueCard>
          <ValueCard>
            <AboutImg src="/about/emoji-happy.svg" alt="Logo" isNavOpen={isOpen}/>
            <AboutCardHeader>Humility</AboutCardHeader>
            <div>
              {`It's`} important to approach your work with humility. Recognize
              that I {`don't`} know everything and that there is always room for
              improvement. Be open to feedback and willing to learn from others.
            </div>
          </ValueCard>

          <ValueCard>
            <AboutImg src="/about/tree.svg" alt="Logo" isNavOpen={isOpen}/>
            <AboutCardHeader>Ethical responsibility</AboutCardHeader>
            <div>
              Software and hardware developers should value the ethical
              implications of their work, such as privacy concerns, security
              issues, and the potential impact of their products on society as a
              whole.
            </div>
          </ValueCard>
        </section>
      </div>
      </AdjustedDivForFooter>
    </AboutWrapper>
  );
};

export default AboutPage;
