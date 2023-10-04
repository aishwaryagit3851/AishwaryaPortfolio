import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="skill-section w-screen h-96">
      <p className="text-3xl text-center font-bold my-6 heading">
        I am Good at
      </p>
      <div className="skill-container flex flex-row flex-wrap justify-center gap-6 mb-3">
        <div className="skills p-3 rounded p-4">
          <p className="text-xl font-semibold">Programming Languages</p>
          <ul className="text-left py-2">
            <li className="text-lg fonr-medium">
              <span>&#x2192; </span> Java
            </li>
            <li className="text-lg fonr-medium">
              <span>&#x2192; </span> C
            </li>
            <li className="text-lg fonr-medium">
              <span>&#x2192; </span> C++
            </li>
            <li className="text-lg fonr-medium">
              <span>&#x2192; </span> Python
            </li>
            <li className="text-lg fonr-medium">
              <span>&#x2192; </span> Javacsript
            </li>
          </ul>
        </div>
        <div className="skills p-3 rounded p-4">
          <p className="text-xl font-bold">Frontend Skills</p>

          <ul className="text-left py-2">
            <li className="text-lg fonr-medium">
              <span>&#x2192; </span>HTML
            </li>
            <li className="text-lg fonr-medium">
              <span>&#x2192; </span>Bootstrap
            </li>
            <li className="text-lg fonr-medium">
              <span>&#x2192; </span>Tailwind CSS
            </li>
            <li className="text-lg fonr-medium">
              <span>&#x2192; </span>ReactJs
            </li>
            <li className="text-lg fonr-medium">
              <span>&#x2192; </span>Redux Toolkit
            </li>
            <li className="text-lg fonr-medium">
              <span>&#x2192; </span>RTK Query
            </li>
          </ul>
        </div>
        <div className="skills p-3 rounded p-4">
          <p className="text-xl font-bold">Backend Skills</p>
          <ul className="text-left py-2">
            <li className="text-lg font-medium">
              <span>&#x2192; </span>MySQL
            </li>
            <li className="text-lg font-medium">
              <span>&#x2192; </span>Php
            </li>
            <li className="text-lg font-medium">
              <span>&#x2192; </span>Spring boot
            </li>
            <li className="text-lg font-medium">
              <span>&#x2192; </span>Nodejs
            </li>
            <li className="text-lg font-medium">
              <span>&#x2192; </span>Git hub
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
