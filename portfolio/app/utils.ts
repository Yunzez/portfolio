import { Theme } from "./theme/theme";

export enum SkillTag {
    All = 'All',
    FrontEnd = 'Front-end',
    BackEnd = 'Back-end',
    Hardware = 'Hardware'
  }

 export interface BasicComponentProps {
    theme: Theme;
  }
 export const openInNewTab = (url:string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  }

  
export const data =[
    {
      "name": "OpenTug",
      "date": "Jun 2022 - Present",
      "description": "Frontend structure design and optimization, develop search algorithm, maps, and routing system. UI and UX improvements with switch from static rendering to frontend rendering.",
      "thumbnailImg": "work/opentug.png",
      "siteLink": "https://www.opentug.com",
      "skills": ["Typescript", "Solid.js", "Django"],
      "tag": [SkillTag.FrontEnd, SkillTag.BackEnd]
    }, 
    {
        "name": "Tunnel_vzn",
        "date":"Jun 2022 - Present",
        "description" : "Collaborated with the founder to create an interactive storytelling platform catering to the struggles that University of Washington students face.",
        "thumbnailImg": "work/tunnel.png",
        "siteLink": "https://www.tunnelvzn.org/",
        "githubLink": "test",
        "skills": ["Next.js", "SCSS", "Firebase"],
        "tag": [SkillTag.FrontEnd, SkillTag.BackEnd]
    },
    {
        "name": "Seal",
        "date":"Sep 2021 - Jun 2022 (10 mos)",
        "description" : "Worked with a research lab in the University of Washington’s Department of Electrical Engineering. Headed energy assessment center web team, develop student login and management portal.",
        "thumbnailImg": "work/seal.png",
        "siteLink": "https://www.tunnelvzn.org/",
        "githubLink": "test",
        "skills": ["React.js", "AWS", "Google app script"],
        "tag": [SkillTag.FrontEnd]
    }, 
    {
        "name": "RV321 Processor",
        "date":"Oct - Dec 2022 (3 mos)",
        "description" : "Developed a fully functional CPU using using verilog and C, Assembly, it can run ASSEMBLY code and C code. It performs a subset of risc-v instructions.",
        "thumbnailImg": "work/processor.png",
        "siteLink": "https://www.tunnelvzn.org/",
        "githubLink": "test",
        "skills": ["Verilog", "Assembly", "RISC-V"],   
        "tag": [SkillTag.Hardware]
    }
  ]
  