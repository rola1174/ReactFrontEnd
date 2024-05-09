import React from "react";
import axios from "axios";

const RejectJob = (props) => {
  const handleReject = () => {
    // Send a request to reject the job post
    axios
      .post(`https://localhost:7163/api/Admin/refuse-job/${props.jobId}`)
      .then((response) => {
        console.log("Job rejected successfully");
        props.onJobRejected(props.jobId);
      })
      .catch((error) => {
        console.error("Error rejecting job:", error);
      });
  };



  return (
    <button onClick={handleReject}>Reject Job</button>
  );
};

export default RejectJob;