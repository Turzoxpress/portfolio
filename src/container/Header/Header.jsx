import React from "react";
import { motion } from "framer-motion";

// import { AppWrap } from '../../wrapper';
import "./Header.scss";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AppWrap, MotionWrap } from "../../wrapper";
import Resume from "../../assets/Mahbubur_Rahman_Turzo_CV.pdf";
import Swal from "sweetalert2";

import constants from "../../constants/constants";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  const showEmail = () => {
    Swal.fire({
      icon: "success",
      title: constants.email,
    });
  };

  const showPhone = () => {
    Swal.fire({
      icon: "success",
      title: constants.phone,
    });
  };
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 app-p">
            Always thirsty to learn!
          </p>
          <h1 className="py-4 text-gray-700 app-head">
            Hi, I&#39;m{" "}
            <span className="text-[#3c8ffc]"> Mahbubur Rahman Turzo</span>
          </h1>
          <h1 className="py-2 text-gray-700 app-head">Software Engineer</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto app-p">
            I’m focused on building awesome applications while learning &
            exploring other technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href={constants.linkedin_link} target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a href={constants.github_link} target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a onClick={showEmail}>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </a>
            <a onClick={showPhone}>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default AppWrap(Header, 'home');
export default MotionWrap(Header, "home");
