import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./More.scss";

const More = () => {
  const [more, setMore] = useState([]);

  useEffect(() => {
    console.log("working");
  }, []);

  return (
    <>
      <h2 className="head-text more-heading ">
        {" "}
        <span>Design </span> & <span>Devlopment</span> Skills Together
        <br /> makes a Great <span>Developer</span>
      </h2>

      <div className="app__profiles">
        {more.map((more, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={more.title + index}
          >
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {more.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {more.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(More, "app__about"),
  "more",
  "app__primarybg"
);
