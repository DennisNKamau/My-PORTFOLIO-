import {
  FileTextIcon,
  GitHubLogoIcon,
  HomeIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { GiNotebook } from "react-icons/gi";

export const BLUR_FADE_DELAY = 0.1;

export const DATA = {
  name: "Dennis Njau Kamau",
  initials: "DK",
  avatarUrl: "/my-pic.jpg",
  resume:
    "I'm a passionate and dedicated **Software developer**, constantly seeking to enhance my skills and tackle new technological challenges. My journey in software development began with a keen interest in creating intuitive user experiences and has evolved into a comprehensive understanding of the entire development lifecycle. I'm a **Frontend Developer** focused in creating responsive and modern web applications using **Frontend technologies.**",
  description:
    "I'm a Software Developer focused in Frontend development. I love building things for the web and always eager to learn new technologies.",
  role: "Software Developer",
  location: "Nairobi, Kenya",

  skills: [
    "React",
    "HTML",
    "Javascript",
    "Tailwind",
    "CSS",
    "Vite",
    "Git",
    "Python",
    "PostgreSQL",
    "Node",
    "Linux",
  ],
  navbar: [
    {
      href: "/",
      icon: HomeIcon,
      label: "Home",
    },
    // {
    //   href: "/blog",
    //   icon: FileTextIcon,
    //   label: "Blog",
    // },
  ],
  contact: {
    email: "renatorrodrigues2002@gmail.com",
    phone: "(27) 99311-7272",
    social: {
      Linkedin: {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/-dennis-kamau-/",
        icon: LinkedInLogoIcon,
        navbar: true,
      },
      Github: {
        name: "Github",
        url: "https://github.com/DennisNKamau",
        icon: GitHubLogoIcon,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "K-UNITY SACCO",
      href: "https://foursys.com.br/",
      badges: ["Technical support", "Troubleshooting", "Networking"],
      location: "Kiambu,Kenya",
      title: "Information Technology intern",
      logoUrl: "/foursys.png",
      start: "March 2022",
      end: "Aug 2022",
      description: `KUNITY SACCO is a financial cooperative in Kenya that provides savings, credit, and investment solutions to its members. It focuses on empowering individuals through affordable financial services, enabling them to achieve financial stability and growth.

      - Provided technical support by troubleshooting hardware.
      - Software, and networkconnectivity issues.
      - Maintained and updated systems.
      - Performing regular backups and system checks.
      - Installed and configured software and devices.
      - Assisted with network management, monitoring infrastructure, and addressingconnectivity issues.
      - Updated and created documentation for IT procedures and system configurations.
      - Managed databases by performing data entry, cleanup, and migrations.
      - GIT for version control of developed code.
      - Methodologies for managing Technology Projects`,
      
    },
    {
      company: "CodeAlpha",
      href: "https://findes.com.br/",
      badges: ["HTML", "CSS", "Javascript"],
      location: "Remote",
      title: "Frontend Developer intern",
      logoUrl: "/findes.png",
      start: "Aug 2024",
      end: "Oct 2024",
      description: `Working on software development projects as a web development intern, focusing on the front-end with JavaScript, creating responsive screens aligned with client preferences and requests. Development of projects using:

      - React (with libraries like Zod and Hook Form)
      - Vite/Next
      - HTML
      - React Hook Form
      - CSS
      - Styled-Components
      - Material UI
      - JavaScript`,
    },
    {
      company: "Creative Kigen Consulting",
      href: "https://creativekigen.com/",
      badges: ["HTML", "CSS", "Javascript","React",],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/foursys.png",
      start: "Jan 2025",
      end: "Present",
      description: `KUNITY SACCO is a financial cooperative in Kenya that provides savings, credit, and investment solutions to its members. It focuses on empowering individuals through affordable financial services, enabling them to achieve financial stability and growth.

      - Provided technical support by troubleshooting hardware.
      - Software, and networkconnectivity issues.
      - Maintained and updated systems.
      - Performing regular backups and system checks.
      - Installed and configured software and devices.
      - Assisted with network management, monitoring infrastructure, and addressingconnectivity issues.
      - Updated and created documentation for IT procedures and system configurations.
      - Managed databases by performing data entry, cleanup, and migrations.
      - GIT for version control of developed code.
      - Methodologies for managing Technology Projects`,
      
    },
  ],
  education: [
    {
      institution: "Moringa School",
      href: "https://moringaschool.com/",
      degree: "Advanced certificate in Software Engineering",
      logoUrl: "/multivix.png",
      start: "Feb 2024",
      end: "Nov 2024",
    },
    {
      institution: "The Co-operative University Kenya",
      href: "https://cuk.ac.ke/",
      degree: "Bachelors degree in Information Technology",
      logoUrl: "/rocketseat.png",
      start: "Sep 2020",
      end: "Aug 2023",
    },
  ],
  projects: [
    {
      title: "Teeblaq Brands",
      href: "https://teeblaqke.netlify.app/",
      active: false,
      description:
        "**TEEBLAQ BRANDS** is a professional branding and printing website designed to showcase and offer top-tier services, including logo design, graphic design, and high-quality printing solutions. It uses modern web technologies like HTML, CSS, and JavaScript. The site is optimized for speed, efficiency, and responsiveness across all devices.",
      technologies: [
        "HTML",
        "Javascript",
        "CSS",
        "Web3 API",
      ],
      links: [
        {
          type: "Website",
          href: "https://teeblaqke.netlify.app/",
        },
        {
          type: "Code",
          href: "https://github.com/DennisNKamau/TEEBLAQ-BRANDS",
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Car-Rental",
      href: "https://dennotravels.netlify.app/",
      active: false,
      description:
        "**CAR RENTAL** Website is a responsive platform built with HTML, CSS (Bootstrap), and JavaScript, designed for seamless car rental experiences. With a modern UI and interactive booking features, it caters to diverse travel needs, offering an engaging, professional service using core web technologies.",
      technologies: [
        "HTML",
        "Javascript",
        "CSS",
        "Web3 API",
      ],
      links: [
        {
          type: "Website",
          href: "https://dennotravels.netlify.app/",
        },
        {
          type: "Code",
          href: "https://github.com/DennisNKamau/Car-Rental",
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "FullMunch Fast foods",
      href: "https://fullmunch.netlify.app/",
      active: false,
      description:
        "FullMunch is a modern food delivery web application designed to bring delicious fast food, like burgers and fries, right to customers' doorsteps. The platform prioritizes a user-friendly experience, ensuring that ordering great meals is just a few clicks away. Built with a clean and responsive design, it’s crafted using HTML, CSS, and JavaScript.",
      technologies: [
        "HTML",
        "Javascript",
        "CSS",
        "Web3 API",
        "Google maps API",
      ],
      links: [
        {
          type: "Website",
          href: "https://fullmunch.netlify.app/",
        },
        {
            type: "Code",
            href: "https://github.com/DennisNKamau/FullMunch",
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Echoweb Solutions",
      href: "https://echowebsolutions.netlify.app/",
      active: false,
      description:
        "Echoweb Solutions is the digital home of a professional web design agency dedicated to crafting innovative and user-centric websites. Specializing in responsive design, development, and online branding, the site showcases a commitment to delivering tailored web services that help businesses establish a strong online presence. From sleek interfaces to seamless functionality, Echoweb Solutions embodies creativity and technical excellence in every project.",
      technologies: [
        "HTML",
        "Javascript",
        "CSS",
        "Web3 Form API",
        "Google maps API",
      ],
      links: [
        {
          type: "Website",
          href: "https://echowebsolutions.netlify.app/",
        },
        {
            type: "Code",
            href: "https://github.com/DennisNKamau/EchoWeb-Solutions",
        },
      ],
      image: "",
      video: "",
    },
  ],
};
