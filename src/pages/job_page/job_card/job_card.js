import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import "./job_card.css";
import AcceptJob from "../../admin/home/accept-jobPost/accept-jobPost";
import RejectJob from "../../admin/home/reject-jobPost/reject-jobPost";
import { getAuthToken } from "../../../services/auth";

 export const JobCard = (props) => {
  const navigate = useNavigate();

  const [savedJob, setSavedJob] = useState(false);

  const { token, user } = getAuthToken();

  const handleCardClick = () => {
    navigate(`/details/${props.id}`);
  };

  const handleApplyClick = () => {
    navigate(`/apply/${props.id}`);
  };

  const handleSaveClick = (value) => {
    setSavedJob(value);
    console.log("Save button clicked for job ID:", props.id);
  };

  return (
    <div className="courses-container">
      <div className="course">
        <div className="course-preview" onClick={handleCardClick}>
          <h6>{props.industry}</h6>
          <h2>{props.employerName}</h2>
          <a href="#">{props.post_creation_date}<i className="fas fa-chevron-right"></i></a>
        </div>
        <div className="course-info">
          <div onClick={handleCardClick}>
            <div className="progress-container">
              <div className="progress"></div>
              <span className="progress-text">{props.job_type}</span>
            </div>
            <h6>{props.location}</h6>
            <h2>{props.job_type}</h2>
          </div>
          {token && user && user.role === "Employer" ? (
            <>
              <AcceptJob jobId={props.id} />
              <RejectJob jobId={props.id} onJobRejected={() => handleSaveClick(false)} />
            </>
          ) : (
            <>
              <div className="star-save" onClick={() => handleSaveClick(savedJob ? false : true)}>
                {savedJob ? <FaStar key={props.id} color="orange" /> : <FaRegStar key={props.id} />}
              </div>
              <button className="btn-Apply" onClick={handleApplyClick}>Apply</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
