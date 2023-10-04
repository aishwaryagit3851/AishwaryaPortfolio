import React, { useState } from "react";
import Project1 from "../../assets/project1.png";
import Project2 from "../../assets/project2.png";
import Project3 from "../../assets/project3.png";
import Project4 from "../../assets/project4.png";
import Project5 from "../../assets/project5.jpg";
import "./Projects.css";
import { useNavigate } from "react-router-dom";

function Projects() {
  const [project, setProject] = useState("project1");

  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row m-5 gap-6">
      <div className="col-md-6 p-4 projects-container rounded-xl">
        <div
          className={`p-3 rounded-xl text-black text-base sm:text-lg font-medium ${
            project === "project1" ? "active" : ""
          }`}
          onClick={() => setProject("project1")}
        >
          NewsHall - ocean of News
        </div>
        <div
          className={`p-3 rounded-xl text-black text-base sm:text-lg font-medium ${
            project === "project2" ? "active" : ""
          }`}
          onClick={() => setProject("project2")}
        >
          BookPublishing - publich your book here
        </div>
        <div
          className={`p-3 rounded-xl text-black text-base sm:text-lg font-medium ${
            project === "project3" ? "active" : ""
          }`}
          onClick={() => setProject("project3")}
        >
          Online result display
        </div>
        <div
          className={`p-3 rounded-xl text-black text-base sm:text-lg font-medium ${
            project === "project4" ? "active" : ""
          }`}
          onClick={() => setProject("project4")}
        >
          Iris Predictor
        </div>
        <div
          className={`p-3 rounded-xl text-black text-base sm:text-lg font-medium ${
            project === "project5" ? "active" : ""
          }`}
          onClick={() => setProject("project5")}
        >
          Deaily sleep tracker
        </div>
      </div>
      {project === "project1" ? (
        <div className="col-md-6 projects flex flex-col justify-center">
          <button
            className="button text-center text-xl rounded m-2 font-semibold"
            onClick={() =>
              navigate("/ProjectDetail", {
                state: {
                  project: project,
                },
              })
            }
          >
            Click Me
          </button>
          <img src={Project1} className="w-100 h-100 m-auto" />
        </div>
      ) : null}
      {project === "project2" ? (
        <div className="col-md-6 projects flex flex-col justify-center">
          <button
            className="button text-center text-lg sm:text-xl rounded m-2 font-semibold"
            onClick={() =>
              navigate("/ProjectDetail", {
                state: {
                  project: project,
                },
              })
            }
          >
            Click Me
          </button>
          <img src={Project2} className="w-100 h-100 m-auto" />
        </div>
      ) : null}
      {project === "project3" ? (
        <div className="col-md-6 projects flex flex-col justify-center">
          <button
            className="button text-center text-xl rounded m-2 font-semibold"
            onClick={() =>
              navigate("/ProjectDetail", {
                state: {
                  project: project,
                },
              })
            }
          >
            Click Me
          </button>
          <img src={Project3} className="w-100 h-100 m-auto" />
        </div>
      ) : null}
      {project === "project4" ? (
        <div className="col-md-6 projects flex flex-col justify-center">
          <button
            className="button text-center text-xl rounded m-2 font-semibold"
            onClick={() =>
              navigate("/ProjectDetail", {
                state: {
                  project: project,
                },
              })
            }
          >
            Click Me
          </button>

          <img
            src={Project4}
            className="w-100 h-100 m-auto"
            onClick={() =>
              navigate("/ProjectDetail", {
                state: {
                  project: project,
                },
              })
            }
          />
        </div>
      ) : null}
      {project === "project5" ? (
        <div className="col-md-6 projects flex flex-col justify-center">
          <button
            className="button text-center text-xl rounded m-2 font-semibold"
            onClick={() =>
              navigate("/ProjectDetail", {
                state: {
                  project: project,
                },
              })
            }
          >
            Click Me
          </button>
          <img src={Project5} className="w-100 h-100 m-auto image" />
        </div>
      ) : null}
    </div>
  );
}

export default Projects;
