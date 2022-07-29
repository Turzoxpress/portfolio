import React, { useState } from "react";

import images from "../../constants/images";
import { AppWrap, MotionWrap } from "../../wrapper";

import emailjs from "emailjs-com";

import "./Footer.scss";

import constants from "../../constants/constants";

import Swal from "sweetalert2";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6nfosq9",
        "template_f5x0p0b",
        e.target,
        "f-LA2M2svdxQ93vFA"
      )
      .then((res) => {
        console.log(res);
        setIsFormSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showEmailFeature = () => {
    Swal.fire({
      icon: "warning",
      title: "Coming soon...",
      text: "This feature is coming soon.",
    });
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href={"mailto:" + constants.email} className="p-text">
            {constants.email}
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href={"tel:" + constants.phone} className="p-text">
            {constants.phone}
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        // <div className="app__footer-form app__flex">
        //     <div className="app__flex">
        //         <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
        //     </div>
        //     <div className="app__flex">
        //         <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
        //     </div>
        //     <div>
        //         <textarea
        //             className="p-text"
        //             placeholder="Your Message"
        //             value={message}
        //             name="message"
        //             onChange={handleChangeInput}
        //         />
        //     </div>
        //     <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        // </div>

        <form className="app__footer-form app__flex" onSubmit={handleSubmit}>
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          {/* <button type="button" className="p-text" >{!loading ? 'Send Message' : 'Sending...'}</button> */}
          <input
            // type="submit"
            type="button"
            onClick={showEmailFeature}
            // value={!loading ? "Send Message" : "Sending..."}
            value="Send Message"
            className="p-text button"
          />
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
