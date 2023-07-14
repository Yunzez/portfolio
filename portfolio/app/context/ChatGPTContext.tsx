"use client"
import React, { createContext, useContext, useState } from "react";
const intialPrompt = `
OpenTug: From June 2022 to the present, Yunze Zhao has been instrumental in transforming the codebase at OpenTug. Utilizing his skills in TypeScript, Solid.js, and Django, he transitioned the codebase from jQuery to Solid.js, thereby improving front-end efficiency by a staggering 30%. He undertook the redesigning and restructuring of multiple web pages, with notable improvements in business-centric pages like the Sailings Map, Book a Sailing, and Post a Sailing pages. Yunze's innovative use of Figma facilitated a more intuitive and user-friendly experience. He also introduced reusable Solid.js components and a routing checking algorithm that modularized the Google Map API, considerably improving the site's functionality and usability. On the back-end, he combined endpoints, simplified data models, and advocated the use of an Entity Relationship Diagram (ERD) for improved team productivity and streamlined onboarding processes.

Tunnel_vzn: Alongside his work on OpenTug, Yunze Zhao has also been collaborating on Tunnel_vzn since June 2022. This project, built with Next.js, SCSS, and Firebase, is an interactive storytelling platform aimed at addressing the struggles experienced by students at the University of Washington. As a testament to his versatile skillset, Yunze has successfully merged technological prowess with an empathetic understanding of real-world issues.

Seal: From September 2021 to June 2022, Yunze dedicated his expertise to a research lab within the Department of Electrical Engineering at the University of Washington. During this period, he led the energy assessment center web team in developing a student login and management portal. Utilizing his proficiency in React.js, AWS, and Google App Script, he effectively contributed to the project's success.

RV321 Processor: In the latter part of 2022, specifically from October to December, Yunze crafted a fully functional CPU that could run both ASSEMBLY and C code. This project, which required a comprehensive understanding of Verilog, Assembly, and RISC-V, showcased his ability to create a CPU that performs a subset of RISC-V instructions.

Yunze Zhao's extensive portfolio exhibits his commitment to using his engineering skills to create innovative solutions and improve existing systems. If you have any specific questions regarding these projects, his skillset, or his experience in software and hardware engineering, feel free to ask! I'm here to help!`;
export interface Message {
  role: "system" | "user" | "assistant";
 content: string
}

interface ChatGPTContextProps {
  messages: Message[];
  addMessage: (message: Message) => void;
  questionNumber: number;
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
}
interface ProviderProps {
  children: React.ReactNode;
}

enum MessageType {
  Question,
  Answer,
}

const ChatGPTContext = createContext<ChatGPTContextProps | undefined>({
  messages: [],
  addMessage: (message: Message) => console.log("hi"),
  questionNumber: 0,
  setQuestionNumber: () => {
    console.log("hi");
  },
});

export const ChatGPTProvider: React.FC<ProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      content:intialPrompt + "when you are ready, respond by saying ChatGPT is ready, please feel free to ask any question about Yunze",
      role: "system",
    },
  ],);
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const addMessage = (message: Message) => {
    console.log('new message', message)
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <ChatGPTContext.Provider
      value={{ messages, addMessage, questionNumber, setQuestionNumber }}
    >
      {children}
    </ChatGPTContext.Provider>
  );
};

export const useChatGPT = () => {
  const context = useContext(ChatGPTContext);
  if (context === undefined) {
    throw new Error("useChatGPT must be used within a ChatGPTProvider");
  }
  return context;
};
