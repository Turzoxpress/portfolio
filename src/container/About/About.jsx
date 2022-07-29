import React from "react";
// import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
// import { urlFor, client } from '../../client';
import images from "../../constants/images";
import { IoMdArrowDropright } from "react-icons/io";
import { BsArrowRightShort } from "react-icons/bs";

import constants from "../../constants/constants";
import { useState } from "react";
import { useEffect } from "react";

const About = () => {
  const [aboutPoints, setAboutPoints] = useState([]);

  useEffect(() => {
    setAboutPoints(constants.about_points);
  }, []);

  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#3c8ffc] app-parafrontendf">
            About
          </p>
          <h2 className="py-4 app-head">Who I Am</h2>
          <p className="py-2 text-[#3c8ffc]">Hi I'am {constants.about_title}</p>
          <p className="py-2 text-gray-600 text-sm">
            {constants.about_description}
          </p>
          <p className="py-2 text-gray-600">I am :</p>

          {aboutPoints.map((items) => (
            <p className="py-2 text-gray-600 flex text-sm">
              <IoMdArrowDropright /> <strong>{items.pointName}</strong>
            </p>
          ))}
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            src={images.turzo_large_profile}
            className="rounded-xl"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};
export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
