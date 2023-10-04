import React from "react";
import "./Introduction.css";
import { saveAs } from "file-saver";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";
import { Link } from "react-router-dom";
import About from "../About/About";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import Projects from "../Projects/Projects";
import ScrollToUp from "../ScrollToUp/ScrollToUp";
import { useEffect } from "react";
import { useState } from "react";

function Introduction() {
  const roles = ["WEB DEVELOPER", "FRONTEND DEVELOPER", "SOFTWARE DEVELOPER"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const hanldeResumeClick = () => {
    const pdfFile = "./AishwaryaGujje_Resume.pdf";
    saveAs(pdfFile, "AIshwaryGujje_Resume.pdf");
  };
  return (
    <div>
      <div className="intro-1 h-screen flex justify-center flex-col m-auto w-screen">
        <div className="container text-center w-50 sm:50 md:w-50">
          <p className="text-2xl sm:text-3xl md:text-5xl font-bold text-black-1000 p-2">
            Hey Hi! I am Aishwarya
          </p>
          <div className="text-lg sm:text-2xl">
            <span className="text-lg sm:text-2xl">I am a passionate</span>
            <span className="animate-text px-2">{roles[currentIndex]}</span>
            <span className="text-lg sm:text-2xl">
              with extensive experience to create Website design, Frontend and
              backend for applications and many more.....
            </span>
          </div>
        </div>
        <div className="flex justify-center gap-0 mt-3">
          <Link
            className="learn-more text-xl m-2 rounded hover:text-white align-center "
            to="https://github.com/aishwaryagit3851"
          >
            <IoLogoGithub />
          </Link>
          <Link
            className="learn-more text-xl  m-2 rounded hover:text-white align-center "
            to="https://www.linkedin.com/in/aishwarya-gujje-9840291ba/"
          >
            <IoLogoLinkedin />
          </Link>
          <button
            className="resume text-xl p-2 m-2 rounded"
            onClick={hanldeResumeClick}
          >
            My Resume
          </button>
        </div>
      </div>

      <About />
      <Education />
      <Skills />
      <Projects />
      <ScrollToUp />
    </div>
  );
}

export default Introduction;
