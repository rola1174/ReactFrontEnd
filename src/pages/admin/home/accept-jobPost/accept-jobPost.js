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
