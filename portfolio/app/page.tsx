"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import TiltedCard from "./component/tiltedCard";
import { theme as appTheme } from "./theme/theme";
const localTheme = {
  boldWeight: 700,
  lightWeight: 400,
  largeFontSize: "48px",
  meidumTitleFontSize: "28px",
  smallTitleFontSize: "24px",
  mediumFontSize: "20px",
  smallFontSize: "16px",
  gray: "#767676",
  purple: appTheme.themePurple,
};

const sections = [
  { id: "about", name: "About me" },
  { id: "education", name: "Education" },
  { id: "publications", name: "Publications" },
  { id: "experience", name: "Experience" },
  { id: "projects", name: "Projects" },
];

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full relative md:hidden sticky top-0 left-0 h-auto md:h-20 z-50">
      {/* Top Bar with Menu Icon */}
      <div
        className="w-full flex justify-end p-3 md:p-5 bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="cursor-pointer transition-transform">
          {isOpen ? (
            <svg
              className="transition-transform transform rotate-180 duration-300 ease-in-out"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.4001 7.61339C24.2767 7.48978 24.1302 7.39172 23.9689 7.32481C23.8076 7.2579 23.6347 7.22346 23.4601 7.22346C23.2854 7.22346 23.1125 7.2579 22.9512 7.32481C22.7899 7.39172 22.6434 7.48978 22.5201 7.61339L16.0001 14.1201L9.48005 7.60005C9.35661 7.47661 9.21006 7.37869 9.04878 7.31188C8.88749 7.24508 8.71463 7.21069 8.54005 7.21069C8.36548 7.21069 8.19261 7.24508 8.03133 7.31188C7.87004 7.37869 7.7235 7.47661 7.60005 7.60005C7.47661 7.7235 7.37869 7.87004 7.31188 8.03133C7.24508 8.19261 7.21069 8.36548 7.21069 8.54005C7.21069 8.71463 7.24508 8.88749 7.31188 9.04878C7.37869 9.21006 7.47661 9.35661 7.60005 9.48005L14.1201 16.0001L7.60005 22.5201C7.47661 22.6435 7.37869 22.79 7.31188 22.9513C7.24508 23.1126 7.21069 23.2855 7.21069 23.4601C7.21069 23.6346 7.24508 23.8075 7.31188 23.9688C7.37869 24.1301 7.47661 24.2766 7.60005 24.4001C7.7235 24.5235 7.87004 24.6214 8.03133 24.6882C8.19261 24.755 8.36548 24.7894 8.54005 24.7894C8.71463 24.7894 8.88749 24.755 9.04878 24.6882C9.21006 24.6214 9.35661 24.5235 9.48005 24.4001L16.0001 17.8801L22.5201 24.4001C22.6435 24.5235 22.79 24.6214 22.9513 24.6882C23.1126 24.755 23.2855 24.7894 23.4601 24.7894C23.6346 24.7894 23.8075 24.755 23.9688 24.6882C24.1301 24.6214 24.2766 24.5235 24.4001 24.4001C24.5235 24.2766 24.6214 24.1301 24.6882 23.9688C24.755 23.8075 24.7894 23.6346 24.7894 23.4601C24.7894 23.2855 24.755 23.1126 24.6882 22.9513C24.6214 22.79 24.5235 22.6435 24.4001 22.5201L17.8801 16.0001L24.4001 9.48005C24.9067 8.97339 24.9067 8.12005 24.4001 7.61339Z"
                fill="#121212"
              />
            </svg>
          ) : (
            <svg
              className="transition-transform transform rotate-0 duration-300 ease-in-out"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 8H27M5 16H27M5 24H27"
                stroke="#121212"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>

      {/* Full-Screen Menu */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } absolute left-0 w-full h-screen bg-black bg-opacity-50 transition-transform duration-500 ease-in-out z-40`}
      >
        <div
          className="bg-black h-100 w-4/5 bg-opacity-50" // Adjust width to not occupy the full screen
          onClick={(e) => e.stopPropagation()} // Prevent click from closing when inside the menu
        >
          {/* Menu items */}
          {sections.map((section) => (
            <div
              className="flex transition-all p-5 w-screen bg-white "
              key={section.id}
              onClick={() => setIsOpen(!isOpen)}
            >
              <a href={`#${section.id}`}>{section.name}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const options = {
      threshold: 0.5, // Adjust this threshold to detect when the section is halfway into view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section.id);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    return () => {
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section.id);
        if (sectionElement) {
          observer.unobserve(sectionElement);
        }
      });
    };
  }, []);

  return (
    <>
      <NavMenu />

      <div className="flex  w-100 h-100">
        <section className="hidden md:block w-1/5 px-1 md:px-5">
          <div className="sticky top-10">
            <div
              style={{
                fontWeight: localTheme.boldWeight,
                fontSize: localTheme.smallTitleFontSize,
                lineHeight: "27.6px",
              }}
            >
              Yunze
            </div>
            <div
              style={{
                fontWeight: localTheme.boldWeight,
                fontSize: localTheme.smallTitleFontSize,
                lineHeight: "27.6px",
              }}
            >
              Zhao
            </div>
            <div className="flex-col flex mt-5 gap-3">
              {sections.map((section) => (
                <>
                  <div className=" flex transition-all">
                    <div
                      className={
                        activeSection === section.id
                          ? "transition-all flex items-center justify-center"
                          : "hidden"
                      }
                    >
                      <div
                        className="w-2 h-2 me-2 items-center"
                        style={{
                          borderRadius: "100%",
                          backgroundColor: localTheme.purple,
                        }}
                      />
                    </div>

                    <a
                      href={`#${section.id}`}
                      className={activeSection === section.id ? "active" : ""}
                    >
                      {section.name}
                    </a>
                  </div>
                </>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full md:w-4/5 flex-col justify-start  p-5">
          <div
            id="about"
            style={{
              fontWeight: localTheme.boldWeight,
              fontSize: localTheme.largeFontSize,
            }}
          >
            Yunze Zhao
          </div>
          <div
            className="mt-4"
            style={{
              fontWeight: localTheme.lightWeight,
              fontSize: localTheme.mediumFontSize,
              color: localTheme.gray,
              lineHeight: "23px",
            }}
          >
            PhD Student @ University of Maryland
          </div>
          <div
            className="mt-4"
            style={{
              fontWeight: localTheme.lightWeight,
              fontSize: localTheme.mediumFontSize,
              color: localTheme.gray,
              lineHeight: "23px",
            }}
          >
            Security & Privacy Researcher
          </div>
          <div
            className="flex gap-5 mt-4 flex-wrap"
            style={{
              color: localTheme.purple,
              fontWeight: localTheme.boldWeight,
              textDecoration: "underline",
            }}
          >
            <div>
              <a href="mailto:zhao.yunzeabh@gmail.com">
                zhao.yunzeabh@gmail.com
              </a>
            </div>
            <div>
              <a
                href="https://github.com/Yunzez"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/yunze-zhao-351687224/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div>
              <a
                href="https://scholar.google.com/citations?user=-14O6jYAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Scholar
              </a>
            </div>
          </div>

          <div className="flex justify-start mt-4 z-1">
            <div className="relative h-[280px] md:h-[420px] w-full max-w-[1100px] ">
              <Image
                src="/asset/banner.jpg"
                fill
                style={{ objectFit: "cover" }}
                alt="Picture of the author"
              />
            </div>
          </div>

          <div className="max-w-screen-sm mt-10 " id="education">
            Hi, {"I'm"} Yunze Zhao, a PhD student in Computer Science at the
            University of Maryland, adivsed by{" "}
            <a
              style={{ color: localTheme.purple }}
              href="https://users.umiacs.umd.edu/~mmazurek/"
            >
              Michelle Mazurek
            </a>
            . I am a full-stack engineer and security researcher. I am
            passionate about building user focused secure and reliable software
            systems. 
            {/* <li className="mt-3">
              <a
                style={{ color: localTheme.purple }}
                href="https://www.storalink.com/"
              >
                Storalink
              </a>
            </li>
            <li>
              <a
                style={{ color: localTheme.purple }}
                href="https://www.numaira.org/"
              >
                Numaira.ai
              </a>
            </li> */}
          </div>

          <div className="mt-40 " style={{ maxWidth: "650px" }}>
            <div
              style={{
                fontWeight: localTheme.boldWeight,
                fontSize: localTheme.meidumTitleFontSize,
              }}
            >
              EDUCATION
            </div>

            <EducationDiv
              title="PhD in Computer Science"
              school="University of Maryland"
              date="Aug 2024 – Present"
              location="College Park, MD, United States"
            />

            <EducationDiv
              title="Master of Science (MS) - Computer Engineering"
              school="NYU Tandon School of Engineering"
              date="Sep 2022 – Jun 2024"
              location="Brooklyn, New York, United States"
            />

            <EducationDiv
              title="Bachelor of Arts (BA) - Geography: Data Science"
              school="University of Washington"
              date="Sep 2018 – Jun 2022"
              location="Seattle, Washington, United States"
            />
          </div>

          <div
            className="mt-20"
            id="publications"
            style={{ maxWidth: "650px", marginTop: "250px" }}
          >
            <div
              className="mt-20"
              style={{
                fontWeight: localTheme.boldWeight,
                fontSize: localTheme.meidumTitleFontSize,
              }}
            >
              PUBLICATIONS
            </div>

            <PubDiv
              title="CovSBOM: Enhancing Software Bill of Materials with Integrated Code Coverage Analysis."
              authors="Yunze Zhao, Yuchen Zhang, Dan Chacko, Justin Cappos."
              conference="the 35th IEEE International Symposium on Software Reliability Engineering (ISSRE 2024)."
              link="https://ssl.engineering.nyu.edu/papers/covsbom_issre_2024.pdf"
            />
            <PubDiv
              title="A Qualitative Analysis of Fuzzing Tool Usability and Challenges"
              authors="Yunze Zhao, Wentao Guo, Harrison Goldstein, Daniel Votipka, Kelsey Fulton, Michelle Mazurek."
              conference="The ACM Conference on Computer and Communications Security (CCS 2025)."
              link="https://dl.acm.org/doi/10.1145/3719027.3765055"
            />
          </div>

          <div
            className="mt-4"
            id="experience"
            style={{ maxWidth: "650px", marginTop: "550px" }}
          >
            <div
              className="mt-20"
              style={{
                fontWeight: localTheme.boldWeight,
                fontSize: localTheme.meidumTitleFontSize,
              }}
            >
              EXPERIENCE
            </div>

            <div>
              <ExperienceDiv
                title={"Graduate Research Assistant"}
                place={"University of Maryland"}
                date={"Aug 2024 – Present"}
                location={"College Park, Maryland, United States"}
              />

              <ExperienceDiv
                title={"Research Assistant"}
                place={"NYU Tandon School of Engineering"}
                date={"Sep 2023 – Aug 2024"}
                location={"New York, New York, United States"}
              />

              <ExperienceDiv
                title={"IT Software Engineering Intern"}
                place={"ZTE Corporation"}
                date={"Jun 2023 – Aug 2023"}
                location={"Shenzhen, Guangdong, China"}
              />

              <ExperienceDiv
                title={"Software Engineer"}
                place={"OpenTug"}
                date={"Jun 2022 – Jun 2023"}
                location={"Seattle, Washington, United States"}
              />

              <ExperienceDiv
                title={"Frontend Development Intern"}
                place={
                  "Sensors, Energy, and Automation Laboratory (SEAL) at UW"
                }
                date={"Sep 2021 – Jun 2022"}
                location={"Seattle, Washington, United States"}
              />
            </div>
          </div>
        </section>

        {/* Styles */}
        <style jsx>{`
          a.active {
            color: ${localTheme.purple};
            font-weight: bold;
          }

          .section {
            height: 100vh;
            padding: 20px;
          }
        `}</style>
      </div>
    </>
  );
};

const ExperienceDiv = ({
  title,
  place,
  date,
  location,
}: {
  title: string;
  place: string;
  date: string;
  location: string;
}) => {
  return (
    <div className="mt-5">
      <div
        style={{
          fontWeight: localTheme.boldWeight,
          fontSize: localTheme.smallTitleFontSize,
          lineHeight: "27.6px",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontWeight: localTheme.boldWeight,
          fontSize: localTheme.smallFontSize,
        }}
      >
        {place}
      </div>
      <div style={{ fontSize: localTheme.smallFontSize }}>{date}</div>
      <div style={{ color: localTheme.gray }} className="italic">
        {location}
      </div>
    </div>
  );
};

const EducationDiv = ({
  title,
  school,
  date,
  location,
}: {
  title: string;
  school: string;
  date: string;
  location: string;
}) => {
  return (
    <div className="mt-5">
      <div
        style={{
          fontWeight: localTheme.boldWeight,
          fontSize: localTheme.smallTitleFontSize,
          lineHeight: "27.6px",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontWeight: localTheme.boldWeight,
          fontSize: localTheme.smallFontSize,
        }}
      >
        {school}
      </div>
      <div style={{ fontSize: localTheme.smallFontSize }}>{date}</div>
      <div style={{ color: localTheme.gray }} className="italic">
        {location}
      </div>
    </div>
  );
};

const PubDiv = ({
  title,
  authors,
  conference,
  link,
}: {
  title: string;
  authors: string;
  conference: string;
  link: string;
}) => {
  const highlightedAuthors = authors.split(/(Yunze Zhao)/g).map(
    (part, idx) =>
      part === "Yunze Zhao" ? (
        <span
          key={`author-${idx}`}
          style={{
            color: appTheme.themeLightPurple,
            textDecoration: "underline",
            fontWeight: localTheme.boldWeight,
          }}
        >
          {part}
        </span>
      ) : (
        <span key={`author-${idx}`}>{part}</span>
      ),
  );

  const overlayContent = (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "22px",
        boxSizing: "border-box",
        borderRadius: appTheme.radiusSm,
        overflow: "hidden",
        color: appTheme.themeWhite,
      }}
    >
      <div>
        <p
          style={{
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.65)",
            marginBottom: "10px",
          }}
        >
          {conference}
        </p>
        <h3
          style={{
            fontSize: "22px",
            lineHeight: "32px",
            fontWeight: 600,
            marginBottom: "12px",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.92)",
            lineHeight: "24px",
          }}
        >
          {highlightedAuthors}
        </p>
      </div>
      {link.length !== 0 && (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: 600,
              background: `${appTheme.themePurple}`,
              color: appTheme.themeWhite,
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              textDecoration: "none",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            View paper
            <span aria-hidden="true" style={{ fontSize: "16px" }}>
              ↗
            </span>
          </a>
        </div>
      )}
    </div>
  );

  return (
    <div
      style={{ width: "100%", maxWidth: "890px", margin: "0 auto" }}
    >
      <TiltedCard 
        imageSrc="/publication-card-bg.svg"
        altText={title}
        captionText={title}
        containerHeight="250px"
        containerWidth="100%"
        imageHeight="250px"
        imageWidth="100%"
        showMobileWarning={false}
        showTooltip={false}
        displayOverlayContent
        overlayContent={overlayContent}
        rotateAmplitude={3}
        scaleOnHover={1.03}
        frameBorderRadius={appTheme.radiusSm}
        matchOverlayHeight
      />
    </div>
  );
};

export default Home;
