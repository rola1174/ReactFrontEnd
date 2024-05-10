import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../services/job";
//import { JobSeekerDashboard } from "../job-seeker/job-seeker-dashboard";

export const DetailsPage = (props) => {
  const { id } = useParams();

  // const job = data.find((job) => job.id == id);

  return (
    <>
      <h1>Job Details</h1>
      <div className="container-fluid">
        <p>Title: {props.job_title}</p>
        <p>Employer: {props.employerName}</p>
        <p>Job Type: {props.jobType}</p>
        <p>Job Budget: {props.salary}</p>
        <p>Posted: {props.jobPostCreationDate}</p>
        <p>Description: {props.jobDecription}</p>
        <p>Proposals: {props.jobLocation}</p>
        <p>Proposals: {props.noOfProposalSubmited}</p>
        <p>Positions Avaiable: {props.noOfPositionsRequired}</p>

      </div>
    </>
  );
};