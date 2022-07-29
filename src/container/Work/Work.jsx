import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";

import "./Work.scss";
import constants from "../../constants/constants";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const [projects, setProjects] = useState([]);

  function chunk_array(arr, chunkSize = 2) {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }

  const chunked = chunk_array(constants.projects);
  console.log(chunked);

  useEffect(() => {
    setProjects(constants.projects);

    //--------

    //---------------
  }, []);

  const handleWorkFilter = (item) => {
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <h2 className="head-text">My Projects</h2>

      {/* <div className="app__work-filter">
        {["UI/UX", "Node JS", "Next JS", "React JS", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div> */}

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        <div className="container">
          {chunked.map((container, i) => (
            <div className="row" key={i}>
              {container.map((items, i2) => (
                <div
                  className="col-xl-6 app__work_item_cursor"
                  onClick={() => openInNewTab(items.url)}
                >
                  <div className="card m-2">
                    <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                      <h3 className="app__work_item_title">
                        <strong>
                          <u>{items.name}</u>
                        </strong>
                      </h3>

                      <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                        {" "}
                        <img
                          src={items.imagePath}
                          alt="Profile"
                          className="border-2 app__work_image_responsive"
                          // className="rounded-circle"
                        />
                        <br></br>
                        <p className="app__work_description">
                          {items.description}
                        </p>
                        <p className="app__work_platform_p">
                          Platform : <strong>{items.platform}</strong>
                        </p>
                        <p className="app__work_platform_p">
                          Technology : <strong>{items.technology}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
