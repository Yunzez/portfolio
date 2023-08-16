import { Message } from "./context/ChatGPTContext";
import { Theme } from "./theme/theme";
require("dotenv").config();
let apiKey = "";

const getOpenAIKey = async () => {
  const res = await fetch("api/getOpenAiApiKey");
  const data = await res.json();
  const apiKey = data.key;
  return apiKey;
};

export enum SkillTag {
  All = "All",
  FrontEnd = "Front-end",
  BackEnd = "Back-end",
  Hardware = "Hardware",
}

export interface BasicComponentProps {
  theme: Theme;
}
export const openInNewTab = (url: string) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

export const data = [
  {
    name: "StoraLink",
    date: "May 2023 - Present",
    description:
      "An app developed using React Native/Spring Boot/Mongo DB, focusing on storing links and sharing links. (So we don't have links that are being sent randomly in the DM of each app)",
    thumbnailImg: "work/storalink.png",
    siteLink: "https://www.storalink.com/",
    skills: ["React Native", "MongoDB", "Spring Boot"],
  },
  {
    name: "OpenTug",
    date: "Jun 2022 - Present",
    description:
      "Worked on front-end and back-end at OpenTug, leading a significant codebase transition from jQuery to Solid.js. Redesigned and simplified numerous key web pages, improving frontend efficiency by over 30% and implementing a set of reusable Solid.js components.",
    thumbnailImg: "work/opentug.png",
    siteLink: "https://www.opentug.com",
    skills: ["Typescript", "Solid.js", "Django"],
    tag: [SkillTag.FrontEnd, SkillTag.BackEnd],
    details:
      "As a key member of the OpenTug team, I worked extensively on both the front-end and back-end, leading the charge in setting up the front-end infrastructure and initiating the transition of the codebase from jQuery to Solid.js. This transition allowed us to improve our overall software development process and streamline our work. I took the lead in redesigning, simplifying, and restructuring numerous web pages, focusing on core business pages such as the Sailings Map page, the Book a Sailing page, and the Post a Sailing page. Through these efforts, we were able to increase frontend efficiency by at least 30%. I achieved this by utilizing the powerful capabilities of Figma to redesign most of the pages, allowing for a more intuitive and user-friendly experience. Notably, I also designed a range of reusable components using Solid.js. These include an auto-routing algorithm and a weather widget, which enhanced the functionality and user interaction of our website. Additionally, I introduced a set routing checking algorithm and managed to modularize Google Map API. By separating its marker and map components, I made markers reusable, further enhancing our site's usability. As part of my backend work, I provided key recommendations such as combining endpoints to reduce confusion and simplifying the data model where possible. I also advocated for the implementation of an Entity Relationship Diagram (ERD) as a crucial tool for onboarding. I believed it was equally important to provide a user interface for all API endpoints, ensuring smoother interactions and more efficient data handling. These suggestions significantly improved our back-end operations and overall team productivity.",
  },
  {
    name: "Tunnel_vzn",
    date: "Jun 2022 - Present",
    description:
      "Collaborated with the founder to create an interactive storytelling platform catering to the struggles that University of Washington students face.",
    thumbnailImg: "work/tunnel.png",
    siteLink: "https://www.tunnelvzn.org/",
    githubLink: "test",
    skills: ["Next.js", "SCSS", "Firebase"],
    tag: [SkillTag.FrontEnd, SkillTag.BackEnd],
  },
  {
    name: "Seal",
    date: "Sep 2021 - Jun 2022 (10 mos)",
    description:
      "Worked with a research lab in the University of Washington’s Department of Electrical Engineering. Headed energy assessment center web team, develop student login and management portal.",
    thumbnailImg: "work/seal.png",
    siteLink: "https://www.uwseal.org",
    skills: ["React.js", "AWS", "Google app script"],
    tag: [SkillTag.FrontEnd],
  },
  {
    name: "RV321 Processor",
    date: "Oct - Dec 2022 (3 mos)",
    description:
      "Developed a fully functional CPU using using verilog and C, Assembly, it can run ASSEMBLY code and C code. It performs a subset of risc-v instructions.",
    thumbnailImg: "work/processor.png",
    githubLink: "https://github.com/Yunzez/6463-RV32I_Processor_Design",
    skills: ["Verilog", "Assembly", "RISC-V"],
    tag: [SkillTag.Hardware],
  },
];

export const getChatGPTModelList = async () => {
  await getOpenAIKey();
  const url = "https://api.openai.com/v1/models";
  console.log("try to post");
  fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  })
    .then((res) => res.json()) // change is here
    .then((data) => {
      console.log("data", data);
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const communicateWithChatGPT = async (
  message: Message[],
  init?: boolean
) => {
  console.log("open chatgpt");
  const apiKey = await getOpenAIKey();
  if (apiKey === "") {
    throw new Error("no api key provided");
  }
  const url = "https://api.openai.com/v1/chat/completions";
  const body = JSON.stringify({
    model: "gpt-3.5-turbo",
    messages: message,
  });

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body,
  })
    .then((res) => res.json()) // change is here
    .then((data) => {
      console.log("data", data);
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
