// DetailsPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../services/job";
//import { JobSeekerDashboard } from "../job-seeker/job-seeker-dashboard";

export const DetailsPage = () => {
  const { id } = useParams();

  const job = data.find((job) => job.id == id);

  return (
    <>
      <h1>Job Details</h1>
      <div className="container-fluid">
        <p>Title: {job.title}</p>
        <p>Employer: {job.employer}</p>
        <p>Job Type: {job.jobType}</p>
        <p>Job Budget: {job.jobBudget}</p>
        <p>Posted: {job.creationDate}</p>
        <p>Description: {job.description}</p>
        <p>Proposals: {job.proposalCount}</p>
            </div>
    </>
  );
};