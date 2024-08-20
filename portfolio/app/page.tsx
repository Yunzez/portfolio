"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
const localTheme = {
  boldWeight: 700,
  lightWeight: 400,
  largeFontSize: "48px",
  meidumTitleFontSize: "28px",
  smallTitleFontSize: "24px",
  mediumFontSize: "20px",
  smallFontSize: "16px",
  gray: "#767676",
  purple: "#4A00F2",
};

const sections = [
  { id: "about", name: "About me" },
  { id: "education", name: "Education" },
  { id: "publications", name: "Publications" },
  { id: "experience", name: "Experience" },
  { id: "projects", name: "Projects" },
];
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
    <div className="flex p-5 w-100 h-100">
      <section className="w-1/5 p-5">
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
                  <div className={activeSection === section.id ? "transition-all flex items-center justify-center" : "hidden"}>

                      <div
                        className="w-2 h-2 me-2 items-center"
                        style={{ borderRadius: "100%", backgroundColor: localTheme.purple }}
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
      <section className="w-4/5 flex-col justify-start w-full p-5">
        <div
        id="about"
          style={{
            fontWeight: localTheme.boldWeight,
            fontSize: localTheme.largeFontSize,
          }}
        >
          Yunze (Fred) Zhao
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
          Full-Stack Engineer & Security Researcher
        </div>
        <div
          className="flex gap-5 mt-4"
          style={{
            color: localTheme.purple,
            fontWeight: localTheme.boldWeight,
            textDecoration: "underline",
          }}
        >
          <div>
            <a href="mailto:zhao.yunzeabh@gmail.com">zhao.yunzeabh@gmail.com</a>
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
        </div>

        <div className="flex justify-start mt-4">
          <div className="relative block h-[420px] w-full max-w-[1200px] ">
            <Image
              src="/asset/banner.jpg"
              fill
              style={{ objectFit: "cover" }}
              alt="Picture of the author"
            />
          </div>
        </div>

        <div className="max-w-screen-sm mt-10 " id="education" >
          Lorem ipsum dolor sit amet consectetur. Justo ornare iaculis felis
          nunc nunc. Vitae lectus ipsum at egestas. Maecenas donec eget massa
          feugiat urna. Senectus varius suscipit diam cursus velit imperdiet
          ultrices arcu. Ultrices nibh ullamcorper eu ornare vel faucibus. Purus
          bibendum ante fermentum et a dolor pulvinar. Lorem ipsum dolor sit
          amet consectetur. Justo ornare iaculis felis nunc nunc. Vitae lectus
          ipsum at egestas. Maecenas donec eget massa feugiat urna. Senectus
          varius suscipit diam cursus velit imperdiet ultrices arcu. Ultrices
          nibh ullamcorper eu ornare vel faucibus. Purus bibendum ante fermentum
          et a dolor pulvinar.
        </div>

        <div className="mt-10" style={{ maxWidth: "650px" }}>
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
            location="College Park, MD"
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

        <div className="mt-20" id="publications" style={{ maxWidth: "650px", marginTop: "250px" }}>
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
          />
        </div>

        <div className="mt-4" id="experience" style={{ maxWidth: "650px",  marginTop: "550px"}}>
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
              place={"Sensors, Energy, and Automation Laboratory (SEAL) at UW"}
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
}: {
  title: string;
  authors: string;
  conference: string;
}) => {
  return (
    <div className="mt-5" style={{ maxWidth: "700px" }}>
      <div
        className="my-2"
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
          fontSize: localTheme.smallFontSize,
        }}
      >
        {authors}
      </div>
      <div style={{ fontSize: localTheme.smallFontSize }}>{conference}</div>
    </div>
  );
};

export default Home;
