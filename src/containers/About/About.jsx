import React from "react";
import "./About.css";
import image2 from "../../assets/image2.jpg";

function About() {
  return (
    <div className="flex flex-col justify center mb-32">
      <div className="p-2 sm:p-12 grid grid-row-2 grid-cols-1 sm:grid-cols-4 justify-center mx-10 sm:mx-20 gap-0">
        <div className="sm:col-span-3 justify-center px-2 sm:px-5">
          <p className="text-2xl sm:text-4xl font-bold py-3 heading">
            About me ...
          </p>
          <p className="text-sm sm:text-lg font-base">
            Hello, I'm a Gujje Aishwarya, a passionate web developer,Frontend
            developer. I have a strong background in web development.Iam
            dedicated to creating userfriendly applications.
          </p>
          <p className="textsm sm:text-lg font-base">
            During my college i have learned programming languages, frontend
            frameworks and basics of Backednd.I had the privilage of working on
            a variety of exciting projects.These experiences have allowed me to
            improve my skills and stay up-to-date with latest technologies and
            trends. I am looking forward to build more projetcs.
          </p>
        </div>
        <div className="w-44 h-56 my-8 sm:col-span-1 m-auto">
          <img src={image2} className="m-auto rounded w-100 h-100" />
        </div>
      </div>
    </div>
  );
}

export default About;
