import React from "react";
import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import constants from "../constants/constants";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href={constants.linkedin_link}>
          <FaLinkedin />
        </a>
      </div>

      <div>
        <a href={constants.github_link}>
          <FaGithub />
        </a>
      </div>

      <div>
        <a href={constants.facebook_link}>
          <BsFacebook />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
