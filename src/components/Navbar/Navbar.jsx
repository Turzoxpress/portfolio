import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import images from "../../constants/images";
import "./Navbar.scss";
import Resume from "../../assets/Mahbubur_Rahman_Turzo_CV.pdf";
import constants from "../../constants/constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img className="cusom_img" src={images.turzo_logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {constants.navigation_items.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`} className="text-gray-700">
              {item}{" "}
            </a>
          </li>
        ))}
      </ul>
      <div className="button">
        {/* <a href={Resume}>
          <button className="resume__btn">Resume</button>
        </a> */}
        <a
          href={constants.resume_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="resume__btn">Resume</button>
        </a>
      </div>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX className="x-icon" onClick={() => setToggle(false)} />

            <ul>
              {constants.navigation_items.map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
