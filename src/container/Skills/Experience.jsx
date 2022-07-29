import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";

import "./Skills.scss";

import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import constants from "../../constants/constants";

import images from "../../constants/images";
import TimelineItem from "./TimelineItem";

const Experience = () => {
  const [experience, setExperience] = useState(constants.experience);

  useEffect(() => {}, []);

  return (
    <>
      <h2 className="head-text">Experience & Education</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list app_skills_title">
          <div className="timeline-container">
            {experience.map((data, idx) => (
              <TimelineItem data={data} key={idx} />
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Experience, "app__experience"),
  "experience",
  "app__primarybg"
);
