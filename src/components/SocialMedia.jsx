import React from "react";
import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/mahbubur-rahman-turzo-483773ab">
          <FaLinkedin />
        </a>
      </div>

      <div>
        <a href="https://github.com/Turzoxpress?tab=repositories">
          <FaGithub />
        </a>
      </div>

      <div>
        <a href="https://www.facebook.com/MahbuburRahmanTurzo/">
          <BsFacebook />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
