import React from "react";
import "./Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import EducationConst from "./EduationConst";
import "react-vertical-timeline-component/style.min.css";
import { IoSchoolOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Education() {
  let schoolIconStyles = { background: "#f9c74f" };
  let workIconStyles = { background: "#06D6A0" };
  return (
    <div className="px-2 sm:px-20 pb-5 flex flex-col justify-center">
      <h1 className="title pb-6 font-bold text-center text-4xl heading">
        My Education Details
      </h1>
      <div className="timeline-container">
        <div className="timeline rounded-base py-2 sm:py-6 m-auto rounded">
          <VerticalTimeline layout="2-columns" className="verticalTimeline">
            {EducationConst.map((element) => {
              let isWorkIcon = element.icon === "work";

              return (
                <VerticalTimelineElement
                  className="verticalTimelineElement"
                  key={element.key}
                  date={element.date}
                  dateClassName="date"
                  iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                  icon={isWorkIcon ? <FaLaptopCode /> : <IoSchoolOutline />}
                >
                  <h3 className="vertical-timeline-element-title text-lg sm:text-xl font-semibold my-1">
                    {element.title}
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle text-sm sm:text-base">
                    {element.college || element.company}
                  </h5>
                  <h5 className="vertical-timeline-element-subtitle text-xm sm:text-base">
                    {element.location}
                  </h5>
                  {element.description &&
                    element.description.map((item, index) => {
                      return (
                        <p id="description" className="text-base">
                          {item}
                        </p>
                      );
                    })}

                  {element.buttonText && (
                    <Link className="button workButton p-2 rounded" to="/">
                      {element.buttonText}
                    </Link>
                  )}
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}

export default Education;
