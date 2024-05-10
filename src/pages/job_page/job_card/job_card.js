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
  const { token, user } = getAuthToken();


  const [savedJob, setSavedJob] = useState(false);
  // const [ setUnSavedJob] = useState(true);




  const handleCardClick = () => {
    navigate(`/details/${props}`);
  };

  const handleApplyClick = () => {
    navigate(`/apply/${props.id}`);
  };

  const handleSaveClick = (id) => {
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

  const handleUnSaveClick = () => {
    if (!savedJob) return;
    const { nameid } = getAuthToken().user;
    const jobid = props.id;

    const requestData = {
      jobSeekerId: parseInt(nameid),
      jobId: jobid
    };

    axios
      .post('https://localhost:7163/api/JobSeeker/UnsavedJob', requestData)

      .then((response) => {
        setSavedJob(false);
      })
      .catch((error) => {
        setSavedJob(true);
      });
  };


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
          {token && user && user.role === "Admin" ? (
            <>
              <AcceptJob jobId={props.id} />
              <RejectJob jobId={props.id} />
            </>
          ) : (
            <>
              {(savedJob || props.isSaved) ? (<div className="star-save" onClick={handleUnSaveClick}>
                <FaStar key={props.id} color="orange" />
              </div>
              ) : (
                <div className="star-save" onClick={handleSaveClick}>
                  <FaRegStar key={props.id} />
                </div>
              )
              }
              <button className="btn-Apply" onClick={handleApplyClick}>Apply</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
