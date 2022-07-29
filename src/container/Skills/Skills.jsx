import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";

import "./Skills.scss";

import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import constants from "../../constants/constants";

const Skills = () => {
  const [backend, setBackend] = useState([]);
  const [frontend, setFrontend] = useState([]);
  const [language, setLanguage] = useState([]);
  const [devops, setDevops] = useState([]);

  useEffect(() => {
    setBackend(constants.backendSkills);

    setFrontend(constants.frontendSkills);

    setLanguage(constants.languageSkills);

    setDevops(constants.devOpsSkills);
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Languages</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list app_skills_title">
          <h3>Backend</h3>
          {backend.map((items) => (
            <div className="progressBar app_skills_progressbarsize">
              <p>
                <strong>{items.name}</strong>
              </p>
              <ProgressBar now={items.percent} />
            </div>
          ))}
        </motion.div>

        <motion.div className="app__skills-list app_skills_title">
          <h3>Frontend</h3>
          {frontend.map((items) => (
            <div className="progressBar app_skills_progressbarsize">
              <p>
                <strong>{items.name}</strong>
              </p>
              <ProgressBar now={items.percent} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* <div className="app__skills-container app_skills_container_div">
        <motion.div className="app__skills-list app_skills_title">
          <h3>Language</h3>
          <div className="app__skills_languge_div">
            {language.map((items) => (
              <div className="app_skills_progressbarsize">
                
                <img src={items.imgPath} className="app__skills_img" />
                <p className="app__skills_language_p">
                  <strong>{items.name}</strong>
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div> */}

      <h3 className="app__skills_language_p app_skills_container_div">
        Language
      </h3>
      <div className="app__skills-container">
        <motion.div className="app__skills-list app_skills_title app_skills_language_div_2">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                {language.map((items) => (
                  <div className="app__skills_languge_div">
                    <img src={items.imgPath} className="app__skills_img" />
                    <p className="">
                      <strong>{items.name}</strong>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <h3 className="app__skills_language_p app_skills_container_div">
        DevOps
      </h3>
      <div className="app__skills-container app_skills_container_div">
        <motion.div className="app__skills-list app_skills_title app_skills_language_div_2">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                {devops.map((items) => (
                  <div className="app__skills_languge_div app__skills_img_languge_div2">
                    <img src={items.imgPath} className="app__skills_img" />
                    <p className="">
                      <strong>{items.name}</strong>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__primarybg"
);
