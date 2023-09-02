import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import KovacsTrading from "@/public/KovacsTrading.jpg";
import RobertKovacsPortfolio from "@/public/RobertKovacsPortfolio.jpg";
import ClickGeneration from "@/public/ClickGeneration.jpg";
import LaPecoraNera from "@/public/LaPecoraNera.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Kovacs Trading",
    description:
      "The platform that provides everything you need to become a successful trader.",
    tags: ["React", "Next.JS", "Tailwind CSS"],
    imageUrl: KovacsTrading,
    projectUrl: "https://kovacs-trading.robycodes.com/",
  },
  {
    title: "Click Generation",
    description:
      "A StartUp with the goal of evolving small Italian companies using the power of Internet.",
    tags: ["WordPress", "Elementor", "HTML", "CSS", "JavaScript"],
    imageUrl: ClickGeneration,
    projectUrl: "https://clickgeneration.it",
  },
  {
    title: "La Pecora Nera",
    description:
      "An inviting restaurant where you can savor the finest, locally sourced foods with animals and vegetables grown from within a close radius.",
    tags: ["WordPress", "Elementor", "HTML", "CSS", "JavaScript"],
    imageUrl: LaPecoraNera,
    projectUrl: "https://agriturismolapecoranera.com",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.JS",
  "Git",
  "Tailwind CSS",
  "Framer Motion",
  "Elementor",
  "WordPress",
  "Hosting",
  "Deployment",
] as const;
