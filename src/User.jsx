import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

import strategypcs from "./Components/assets/images/StrategyPCS.png";
import gaurastra from "./Components/assets/images/Gaurastra.png";
import caribbeaneaze from "./Components/assets/images/caribbeaneaze.png";
import portfolio from "./Components/assets/images/portfolio.png";


const Info = {
  name: "Aayan Goutam",
  stack: [
    "React Developer",
    "MERN Stack Developer",
    "Full Stack Developer",
  ],
  bio: "Software Developer with 6 months of experience specializing in React and MERN stack development. Skilled in building scalable, high-performance web applications with readable, maintainable, and testable code, ensuring seamless backend integration. Proficient in REST APIs, SQL/NoSQL databases, and optimizing performance using code-splitting, memoization, debounced search, lean coding, MongoDB indexes, aggregation pipelines, and state management libraries for caching. Strong in debugging, troubleshooting, and ensuring smooth application flow. In-depth knowledge of browser internals, browser storage, JS fundamentals, and authentication flows with security best practices.",
};

const ProjectInfo = [
  {
    title: "Caribbeaneaze Website",
    desc: "Developed the admin panel and website pages, utilizing the Axios library for CRUD operations and writing media queries to ensure responsiveness. Employed Material UI for a modern design and enhanced user experience.",
    image: caribbeaneaze,
    live: true,
    technologies: [
      "React",
      "Material UI",
      "Redux Toolkit",
      "Swagger",
      "Payment Gateways",
      "Axios",
    ],
    link: "https://www.caribbeaneaze.com/",
    github: "https://github.com/Code-Mars/Spotify-Clone",
  },
  {
    title: "StrategyPCS Website",
    desc: "Integrated APIs to perform CRUD operations on a school website. Developed responsive pages using Material UI, Tailwind CSS, Media query and incorporated libraries like Core UI, React Hook Form and react-data-table-component. Utilized Redux Toolkit for state management and learned TypeScript during the project.",
    image: strategypcs,
    live: true,
    technologies: [
      "React",
      "Redux Toolkit",
      "React Hook Form",
      "Material UI",
      "Zod",
      "Socket.IO",
      "Axios",
    ],
    link: "https://www.strategypcs.in/",
    github: "https://github.com/Code-Mars/CodeX",
  },
  {
    title: "Gaurastra Website",
    desc: "I have developed the admin panel for a layered website using React. I utilized the Axios library for API implementation during this project and leveraged the Bootstrap framework and Core UI library for UI development.",
    image: gaurastra,
    live: true,
    technologies: ["React", "Bootstrap", "Core UI", "Axios"],
    link: "https://www.gaurastra.com/",
    github: "https://github.com/Code-Mars/Ekart/",
  },

  {
    title: "Portfolio Website",
    desc: "Developed the admin panel for a B2B application focused on selling medicines. Added various functionalities and implemented calculations related to the sale and purchase of medicines. During this project, I utilized the Axios library for API implementation and employed the Bootstrap framework for UI development.",
    image: portfolio,
    live: true,
    technologies: ["React", "NextJS", "Tailwind CSS", "JavaScript"],
    link: "https://my-portfolio-one-nu-88.vercel.app/",
    github: "https://github.com/Code-Mars/Facebook-Clone",
  },

];

const SkillInfo = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "React JS",
      "Redux",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Springboot",
      "Node JS",
      "Express JS",
      "MySQL",
      "MongoDB",
      "Firebase",
      "PostgresSQL",
    ],
  },
  {
    title: "Languages",
    skills: ["C", "C++", "Java", "JavaScript"],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "Github",
      "VS Code",
      "Postman",
      "MongoDB Compass",
      "Spring Tool Suite",
    ],
  },
];
const socialLinks = [
  { link: "https://github.com/PankajGoutam", icon: IconBrandGithub },
  {
    link: "https://www.linkedin.com/in/pankaj-goutam-217626200/",
    icon: IconBrandLinkedin,
  },
  {
    link: "https://www.instagram.com/aayan_goutam/",
    icon: IconBrandInstagram,
  }, 
];

const ExperienceInfo = [
  {
    role: "MERN Stack Developer",
    company: "4Tuner's Technologies Indore",
    date: "December 2024 - June 2025",
    desc: "Software Developer with 6 months of hand's on experience in React and MERN stack development. Skilled in building scalable, high-performance web apps with clean, maintainable code and seamless backend integration. Proficient in REST APIs, SQL/NoSQL databases, and optimizing performance using code-splitting, memoization, debounced search, and state management with caching. Strong in debugging, troubleshooting, and implementing secure authentication flows. Also experienced with AI tools and project management platforms.",
    skills: [
      "JavaScript",
      "React",
      "Redux Toolkit",
      "Material UI",
      "Tailwind CSS",
      "shadcn/ui",
      "Socket.IO",
      "MongoDB",
      "Cloudinary",
      "Firebase",
      "Multer",
      "Mailtrap",
      "Express.js",
      "Node.js",
      "GitHub",
      "Docker",
      "Payment Gateways",
    ],
  },
];
const Slugs = [
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "mongodb",
  "nodedotjs",
  "express",
  "vercel",
  "docker",
  "git",
  "github",
];
export { Info, ProjectInfo, socialLinks, SkillInfo, ExperienceInfo, Slugs };
