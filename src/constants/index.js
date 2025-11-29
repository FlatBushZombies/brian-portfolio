import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs
  } from "../assets";

  import free from "../assets/freecopy_logo.png";
  import camp from "../assets/camp.png";
  import sqlite from "../assets/sqlite.svg";

  import cpp from "../assets/langs/cplusplus.svg";
  import django from "../assets/langs/django.svg";
  import go from "../assets/langs/go.svg";
  import java from "../assets/langs/java.svg";
  import solidity from "../assets/solidity-plain.svg";

  import pay from "../assets/dmb-pay.png";
  import summarizer from "../assets/ai-summarizer.png";
  import nmeodb from "../assets/nmeodb.png";
  import xora from "../assets/xora.png";
  import cloud from "../assets/student-cloud.png";
  import book from "../assets/book-api.png";
  import qkd from "../assets/qkd.jpg";
  import fastapi from "../assets/fastapi.png";
  import share from "../assets/social-share.png"

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web3 Developer",
      icon: web,
    },
    {
      title: "Javascript Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Robotics Enthusiast",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Sqlite 3",
      icon: sqlite,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "cpp",
      icon: cpp,
    },
    {
      name: "django",
      icon: django,
    },
    {
      name: "java",
      icon: java,
    },{
      name: "go",
      icon: go,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "SADACNET",
      icon: web,
      iconBg: "#383E56",
      date: "Jan 2021 - Jan 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Typescript  Developer, Remotely",
      company_name: "Floaty Code Pins, RU",
      icon: free,
      iconBg: "#E6DEDD",
      date: "May 2024 - Present",
      points: [
        "Developing and maintaining web applications using Next,  React.js and other related technologies.",
        "Collaborating with cross-functional teams in leet code challenges",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Camp Guide",
      description:
        "The Camp Guide app will streamline the camping experience by providing users with a comprehensive suite of tools and information, all within an engaging and user-friendly interface.",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: camp,
      source_code_link: "https://resonant-sunflower-1bb1e7.netlify.app/",
    },
    {
      name: "Inter-Blockchain Communication Protocol",
      description:
        "Contributed to the development of the IBC Communication Protocol by developing an SDK that allows for  the transfer of blockchain assets across everal chains",
      tags: [
        {
          name: "go",
          color: "blue-text-gradient",
        },
        {
          name: "VCS",
          color: "green-text-gradient",
        },
        {
          name: "web3",
          color: "pink-text-gradient",
        },
      ],
      image: solidity,
      source_code_link: "https://github.com/BrianMakanjira/ibc-go-client",
    },
    {
      name: "AI Article Summarizer",
      description:
        "A comprehensive article summarization tools in a split second that converts into clean and concise summarises",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "nlp",
          color: "pink-text-gradient",
        },
      ],
      image: summarizer,
      source_code_link: "https://legendary-rabanadas-825160.netlify.app/",
    },
    {
      name: "DMB Pay",
      description:
        "Developed a multi-chain UI for managing web3 assets across several chains.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "hardhat",
          color: "green-text-gradient",
        },
        {
          name: "web3",
          color: "pink-text-gradient",
        },
      ],
      image: pay,
      source_code_link: "https://jocular-sfogliatella-55a4c9.netlify.app/",
    },
    {
      name: "XoRa AI",
      description:
        "Built a UI Landing Page for a banking NLP prject that leverages AI to facilitate smart banking",
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "NLP",
          color: "green-text-gradient",
        },
        {
          name: "api",
          color: "pink-text-gradient",
        },
      ],
      image: xora,
      source_code_link: "https://brilliant-selkie-8d3439.netlify.app/",
    },
       {
      name: "Book API",
      description:
        "Developed a robust and scalable RESTful API for managing a digital library system using NestJS. The API provides endpoints for CRUD operations on books, authors, and categories, along with advanced features like search, filtering, and pagination.",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "nestjs",
          color: "green-text-gradient",
        },
        {
          name: "REST APIs",
          color: "pink-text-gradient",
        },
      ],
      image: book,
      source_code_link: "https://github.com/BrianMakanjira/book-api",
    },
    {
      name: "Mission Open Source Framework",
      description:
        "Developing and creating an open source framework for Space Mission Exploration by NASA advancing the mission database.",
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "postgress",
          color: "green-text-gradient",
        },
        {
          name: "api",
          color: "pink-text-gradient",
        },
      ],
      image: nmeodb,
      source_code_link: "https://deluxe-stroopwafel-58d196.netlify.app/",
    },
    {
      name: "Student Cloud",
      description:
        "Developed a cloud-based platform using Typescript Appwrite, and OAuth,  to provide students with secure file storage, collaboration tools, and authentication features.",
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "OAuth",
          color: "green-text-gradient",
        },
        {
          name: "Appwrite",
          color: "pink-text-gradient",
        },
      ],
      image: cloud,
      source_code_link: "https://github.com/FlatBushZombies/student-cloud",
    },
     {
      name: "ciag.xyz",
      description:
        "QKD Infrastucture.The next-generation hybrid oracle network secured by post-quantum cryptography and built for the future quantum internet.",
      tags: [
        {
          name: "quantum",
          color: "blue-text-gradient",
        },
        {
          name: "blockchain",
          color: "green-text-gradient",
        },
        {
          name: "security",
          color: "pink-text-gradient",
        },
      ],
      image: qkd,
      source_code_link: "https://ciag-xyz.vercel.app/",
    },
     {
      name: "Book API",
      description:
        "Book API spin-up with FASTAPI and SQL Alchemy",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "fastapi",
          color: "green-text-gradient",
        },
        {
          name: "postgresql",
          color: "pink-text-gradient",
        },
      ],
      image: fastapi,
      source_code_link: "https://github.com/FlatBushZombies/bookAPI-fastapi",
    },
    {
      name: "Chitamrita",
      description:
        "Designed production ready UI/UX for a Moscow-based social sharing startup that connects user using online dates and short-form content",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "clerk-auth",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: share,
      source_code_link: "https://github.com/FlatBushZombies/chitamrita",
    },
    
    
  ];
  
  export { services, technologies, experiences , projects };
  