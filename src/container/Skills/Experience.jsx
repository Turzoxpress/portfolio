import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";

import "../Work/Work.scss";

import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import constants from "../../constants/constants";

import images from "../../constants/images";
import TimelineItem from "./TimelineItem";

import moment from "moment";

const Experience = () => {
  const [experience, setExperience] = useState(constants.experience);

  useEffect(() => {}, []);

  const dateConverter = (startDate, endDate) => {
    console.log("Start Date : " + startDate + "  End date : " + endDate);
    const date1 = moment(startDate);
    const date2 = moment(endDate);

    console.log("Start Date : " + date1 + "  End date : " + date2);

    let result = moment(date2).diff(date1, "days");
    //var ms = moment(date2).diff(moment(date1));
    let years = (result / 365).toFixed(1);
    return years;
    return date1;
  };

  return (
    <>
      {/* <h2 className="head-text">Experience & Education</h2> */}

      <div className="app__work-portfolio">
        <motion.div className="app__skills-list app_skills_title">
          <div className="container">
            <h2 className="head-text">Experience</h2>
            <div className="row">
              {experience.map((items, i) => (
                <div className="card m-2">
                  <div className="card-body profile-card pt-4 d-flex flex-column">
                    <h3 className="app__work_experience_title">
                      <strong>{items.company}</strong>
                    </h3>

                    <div className="">
                      {" "}
                      <p className="app__work_platform_p">
                        <strong>{items.designation}</strong>
                      </p>
                      <p className="app__experinece_platform_p">
                        <strong>Joined: </strong>
                        {moment(items.joining).format("DD-MM-YYYY")}
                      </p>
                      <p className="app__experinece_platform_p">
                        <strong>Left: </strong>
                        {moment(items.left).format("DD-MM-YYYY")}
                      </p>
                      <p className="app__experinece_platform_p">
                        <strong>Experience: </strong>
                        {dateConverter(items.joining, items.left)} years
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div className="app__skills-list app_skills_title">
          <div className="container">
            <div className="row">
              {experience.map((items, i) => (
                <div className="card m-2">
                  <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                    <h3 className="app__work_item_title">
                      <strong>
                        <u>{items.designation}</u>
                      </strong>
                    </h3>

                    <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                      {" "}
                      <p className="app__work_platform_p">
                        <strong>{items.company}</strong>
                      </p>
                      <p className="app__work_platform_p">
                        <strong>{items.joining}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <br></br>
    </>
  );
};

export default AppWrap(
  MotionWrap(Experience, "app__experience"),
  "experience",
  "app__primarybg"
);
