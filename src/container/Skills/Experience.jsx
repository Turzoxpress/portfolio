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
  let tempExpYears = 0; // [, settotalExperienceYears] = useState(0);
  const [totalExperienceYears, settotalExperienceYears] = useState(0);

  const [education, seteducation] = useState(constants.education);

  useEffect(() => {
    settotalExperienceYears(tempExpYears);
  }, []);

  const dateConverter = (startDate, endDate) => {
    let tempEndDate = endDate;
    if (tempEndDate === "now") {
      tempEndDate = new Date();
    }
    console.log("Start Date : " + startDate + "  End date : " + tempEndDate);
    const date1 = moment(startDate);
    const date2 = moment(tempEndDate);

    console.log("Start Date : " + date1 + "  End date : " + date2);

    let result = moment(date2).diff(date1, "days");
    //var ms = moment(date2).diff(moment(date1));
    let years = (result / 365).toFixed(1);
    tempExpYears = tempExpYears + parseFloat(years);
    return years;
  };

  return (
    <>
      {/* <h2 className="head-text">Experience & Education</h2> */}

      <div className="app__work-portfolio">
        <motion.div className="app__skills-list app_skills_title">
          <div className="container">
            <h2 className="head-text">Experience</h2>
            <span className="badge rounded-pill bg-success p-4 m-4 app__experinece_span">
              <h3 className="">
                {" "}
                Total Experience : <strong>{totalExperienceYears}</strong> years
              </h3>
            </span>

            <div className="row">
              {experience.map((items, i) => (
                <div className="card m-2">
                  <div className="card-body profile-card pt-4 d-flex flex-column">
                    <h3 className="app__work_experience_title">
                      <strong>{items.designation}</strong>
                    </h3>

                    <div className="">
                      {" "}
                      <p className="app__work_platform_p">
                        <strong>{items.company}</strong>
                      </p>
                      <p className="app__experinece_platform_p">
                        <strong>Joined: </strong>
                        {moment(items.joining).format("DD-MM-YYYY")}
                      </p>
                      {items.left === "now" ? (
                        <>
                          <p className="app__experinece_platform_p">
                            <strong>Left: </strong>
                            Working now...
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="app__experinece_platform_p">
                            <strong>Left: </strong>
                            {moment(items.left).format("DD-MM-YYYY")}
                          </p>
                        </>
                      )}
                      <div className="social-links m-1 align-center">
                        <p className="app__experinece_years_p">
                          <strong>Experience: </strong>
                          <b>
                            <strong>
                              {dateConverter(items.joining, items.left)} years
                            </strong>
                          </b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div className="app__skills-list app_skills_title">
          <div className="container">
            <h2 className="head-text">Education</h2>

            <div className="row">
              {education.map((items, i) => (
                <div className="card m-2">
                  <div className="card-body profile-card pt-4 d-flex flex-column">
                    <h3 className="app__work_experience_title">
                      <strong>{items.certificate}</strong>
                    </h3>

                    <div className="">
                      {" "}
                      <p className="app__work_platform_p">
                        <strong>{items.institute}</strong>
                      </p>
                      <p className="app__work_platform_p">
                        Passed :{" "}
                        <strong>
                          {moment(items.passing_year).format("DD-MM-YYYY")}
                        </strong>
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
  "experience & education",
  "app__primarybg"
);
