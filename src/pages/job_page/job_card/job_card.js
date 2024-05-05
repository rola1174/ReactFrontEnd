import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import axios from "axios";
import "./job_card.css";
// import { ApplyForm } from "../../job-seeker/apply-form";

export const JobCard = (props) => {
  const navigate = useNavigate();
  const [savedJob, setSavedJob] = useState(0);

  const handleCardClick = () => {
    navigate(`/details/${props.id}`);
  };

  const handleApplyClick = () => {
    navigate(`/apply/${props.id}`);
  };

  const handleSaveClick = (val) => {
    setSavedJob(val);
    console.log("Save button clicked for job ID:", props.id);
  };

  return (
    <div className="courses-container">
      <div className="course">
        <div className="course-preview" onClick={handleCardClick}>
          <h6>Industry</h6>
          <h2>Company Name</h2>
          <a href="#">Post creation date<i className="fas fa-chevron-right"></i></a>
        </div>
        <div className="course-info">
          <div onClick={handleCardClick}>
            <div className="progress-container">
              <div className="progress"></div>
              <span className="progress-text">location</span>
            </div>
            <h6>Job type</h6>
            <h2>Job Title</h2>
          </div>
          <div className="star-save" onClick={() => handleSaveClick(1)}>
            {(savedJob === 0) ?
              < FaRegStar key={JobCard.id} /> :
              < FaStar key={JobCard.id} color="orange" />
            }
          </div>

          <button className="btn" onClick={handleApplyClick} >Apply</button>
        </div>
      </div>
    </div>
  );
};
