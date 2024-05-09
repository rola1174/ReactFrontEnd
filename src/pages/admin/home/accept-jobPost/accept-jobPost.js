/*import React, { useState } from "react";
import axios from "axios";

const AcceptJob = ({ jobId, handleAccept }) => {
  const [jobAccepted, setJobAccepted] = useState(false);

  const handleAcceptClick = async () => {
    try {
      // Make an HTTP POST request to accept the job
      await axios.post(`your-backend-api-url/accept-job/${jobId}`);
      
      // Update the local state to indicate that the job is accepted
      setJobAccepted(true);

      // Call the handleAccept function passed from the parent component
      await handleAccept(jobId);
    } catch (error) {
      console.error("Error occurred while accepting job:", error);
    }
  };

  return (
    <button className="btn accept-btn" onClick={handleAcceptClick} disabled={jobAccepted}>
      {jobAccepted ? "Accepted" : "Accept"}
    </button>
  );
};

export default AcceptJob;*/


import React from "react";
import axios from "axios";

const AcceptJob = (props) => {
  const handleAccept = () => {
    axios
      .post(`https://localhost:7163/api/Admin/accept-job/${props.jobId}`)
      .then((response) => {
        console.log("Job accepted successfully");

      })
      .catch((error) => {
        console.error("Error accepting job:", error);
      });
  };

  return (
    <button  onClick={handleAccept}>Accept Job</button>
  );
};

export default AcceptJob;
