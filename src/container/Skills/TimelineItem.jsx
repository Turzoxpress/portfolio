import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";

import "./Skills.scss";

import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import constants from "../../constants/constants";

import images from "../../constants/images";

const TimelineItem = ({ data }) => {
  console.log("Data : " + data.text);
  return (
    <div>
      {data ? (
        <div className="timeline-item">
          <div className="timeline-item-content">
            <span className="tag" style={{ background: "#018f69" }}>
              {data.category.tag}
            </span>
            <time>{data.date}</time>
            <p>{data.text}</p>
            {data.link && (
              <a href={data.link.url} target="_blank" rel="noopener noreferrer">
                {data.link.text}
              </a>
            )}
            <span className="circle" />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TimelineItem;
