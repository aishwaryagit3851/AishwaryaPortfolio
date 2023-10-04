import React from "react";
import { useLocation } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io5";
import { Link } from "react-router-dom";

import {
  project1,
  project2,
  project3,
  project4,
  project5,
} from "./ProjectDetailConst";
function ProjectDetail({ route, navigate }) {
  const projects = {
    project1: project1,
    project2: project2,
    project3: project3,
    project4: project4,
    project5: project5,
  };
  const location = useLocation();
  const project = location.state.project;

  return (
    <div className="p-10 sm:p-20">
      <p className="text-xl sm:text-2xl md:text-4xl font-bold heading text-center p-3">
        {projects[project].name}
      </p>
      <div className="flex flex-col sm:flex-row my-8 gap-2 justify-center">
        <div className="col-md-6 ">
          <p className="text-xl sm:text-2xl font-semibold heading pt-2">
            TechStack used :
            <span className="text-base sm:text-lg font-normal">
              {projects[project].techStack}
            </span>
          </p>
          <p className="text-xl sm:text-2xl font-semibold heading my-4">
            Project Description :
            <span className="text-base sm:text-lg font-normal">
              {projects[project].description.map((ele, index) => {
                return <li key={index}>{ele}</li>;
              })}
            </span>
          </p>
          {projects[project].github ? (
            <div className="text-xl sm:text-3xl p-1 sm:p-3 rounded align-center bg-black learn-more w-7 sm:w-14 flex">
              <Link to={projects[project].github} className="hover:text-white">
                <IoLogoGithub />
              </Link>
            </div>
          ) : null}
        </div>
        <div className="col-md-6 my-2 flex">
          <img
            src={projects[project].photo}
            className="m-auto"
            style={{ boxShadow: "5px 5px 25px #231557" }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
