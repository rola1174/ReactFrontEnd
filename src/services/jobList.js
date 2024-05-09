import React, { useState } from "react";
import AcceptJob from "../pages/admin/home/accept-jobPost/accept-jobPost";
import RejectJob from "../pages/admin/home/reject-jobPost/reject-jobPost";

const JobList = () => {
  const [jobs, setJobs] = useState([
    { id: 1, title: "Job 1", employer: "OneHealth" ,jobType: "full time" , jobBudget : "400$" , creationDate: "April 1, 2024"  },
    { id: 2, title: "Job 2", employer: "google" ,jobType: "part time" , jobBudget : "2000$" , creationDate: "April 1, 2024"  },
    { id: 3, title: "Job 3" },
  ]);

  const handleJobRejected = (jobId) => {
    // Update the job list by filtering out the rejected job
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobId));
  };
  const handleJobAccepted = (jobId) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobId));
  };

  return (
    <div>
      {jobs.map((job) => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          <AcceptJob jobId={job.id} onJobAccepted={handleJobAccepted} />
          <RejectJob jobId={job.id} onJobRejected={handleJobRejected} />
        </div>
      ))}
    </div>
  );
};

export default JobList;