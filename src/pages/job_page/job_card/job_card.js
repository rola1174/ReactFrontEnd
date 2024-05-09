import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import axios from "axios";
import "./job_card.css";
import AcceptJob from "../../admin/home/accept-jobPost/accept-jobPost";
import RejectJob from "../../admin/home/reject-jobPost/reject-jobPost";
import { getAuthToken } from "../../../services/auth";

export const JobCard = (props) => {
  const navigate = useNavigate();

  const [savedJob, setSavedJob] = useState(false);


  const { token, user } = getAuthToken();

  const handleCardClick = () => {
    navigate(`/details/${props}`);
  };

  const handleApplyClick = () => {
    navigate(`/apply/${props.id}`);
  };


  const handleSaveClick = () => {  // ToDo: Handle Unsave jobs.
    const { nameid } = getAuthToken().user;
    const jobid = props.id;

    const requestData = {
      jobSeekerId: parseInt(nameid),
      jobId: jobid
    };
    axios
      .post('https://localhost:7163/api/JobSeeker/SaveJob', requestData)

      .then((response) => {
        setSavedJob(true);
      })
      .catch((error) => {
        setSavedJob(false);
      });
  };
  console.log("Save button clicked for job ID:", props.id);


  return (
    <div className="courses-container">
      <div className="course">
        <div className="course-preview" onClick={handleCardClick}>
          <h6>{props.industry}</h6>
          <h2>{props.employerName}</h2>
          <a href="#">{props.jobPostCreationDate}<i className="fas fa-chevron-right"></i></a>
        </div>
        <div className="course-info">
          <div onClick={handleCardClick}>
            <div className="progress-container">
              <div className="progress"></div>
              <span className="progress-text">{props.jobType}</span>
            </div>
            <h6>{props.jobLocation}</h6>
            <h2>{props.jobTitle}</h2>
          </div>
          {token && user && user.role === "Employer" ? (
            <>
              <AcceptJob jobId={props.id} />
              <RejectJob jobId={props.id} onJobRejected={() => handleSaveClick(false)} />
            </>
          ) : (
            <>
              <div className="star-save" onClick={() => handleSaveClick(props.id)}>
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
