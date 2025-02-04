import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import { data } from "../../services/job";
import axios from "axios";

export const DetailsPage = () => {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState({});
  useEffect(() => {
    axios
      .get(`https://localhost:7163/api/JobSeeker/Getjobsbyid?jobId=${id}`, {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      })
      .then((response) => {
        setJobDetails(response.data);
      })
      .catch((error) => {
        setJobDetails("");
        console.log("fetch the error :", error);

      });
  }, []);
  // const job = data.find((job) => job.id == id);

  return (
    <>
      <h1>Job Details</h1>
      <div className="container-fluid">
        <p>Title: {jobDetails.job_title}</p>
        <p>Employer: {jobDetails.employerName}</p>
        <p>Job Type: {jobDetails.job_type}</p>
        <p>Industry: {jobDetails.industry}</p>
        <p>Job Budget: {jobDetails.salary_budget}</p>
        <p>Posted: {jobDetails.post_creation_date}</p>
        <p>Description: {jobDetails.job_description}</p>
        <p>Proposals: {jobDetails.location}</p>
        <p>Proposals: {jobDetails.no_of_proposal_submitted}</p>
        <p>Positions Avaiable: {jobDetails.no_of_position_required}</p>

      </div>
    </>
  );
};