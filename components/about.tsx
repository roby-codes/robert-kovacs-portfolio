"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My passion for programming began in early{" "}
        <span className="font-medium">2015</span> when I built my first website
        to sell my product at the age of 14. Since then, I have gained a lot of
        experience and knowledge in multiple programming languages and
        frameworks. I have always liked the idea of being able to turn whatever
        idea I had in my mind into reality, and now I am here to help you build
        yours. 💪
      </p>
      <p className="mb-3">
        My favorite modern web stack is{" "}
        <span className="font-medium">NextJS - TypeScript - TailwindCSS</span>.
        I am currently working as a Freelance{" "}
        <span className="font-medium">Full Stack Developer</span> .
      </p>
    </motion.section>
  );
}
