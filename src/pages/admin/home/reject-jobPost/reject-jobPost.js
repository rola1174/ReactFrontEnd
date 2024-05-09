/*import React from "react";
import axios from "axios";
import { getAuthToken } from "../../../../services/auth";

const RejectJob = ({ jobId, handleReject }) => {
  const handleRejectClick = async () => {
    try {
      // Get the authentication token from local storage
      const { token } = getAuthToken();

      // Make a DELETE request to delete the job card
      await axios.delete(`your-backend-api-url/jobs/${jobId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the authorization token
        },
      });

      // If the request is successful, log a message
      console.log("Job with ID:", jobId, "rejected and removed from the database.");

      // Optionally, you can perform any additional actions after deleting the job card

      // Call the handleReject function passed from the parent component
      handleReject(jobId);
    } catch (error) {
      // If an error occurs, log the error
      console.error("Error occurred while rejecting job:", error);
    }
  };

  return (
    <button className="btn reject-btn" onClick={handleRejectClick}>
      Reject
    </button>
  );
};

export default RejectJob;*/



import React from "react";
import axios from "axios";

const RejectJob = (props) => {
  const handleReject = () => {
    // Send a request to reject the job post
    axios
      .delete(`https://localhost:7163/api/Admin/refuse-job/${props.jobId}`)
      .then((response) => {
        console.log("Job rejected successfully");
        props.onJobRejected(props.jobId);
      })
      .catch((error) => {
        console.error("Error rejecting job:", error);
      });
  };



  return (
    <button  onClick= {handleReject}>Reject Job</button>
  );
};

export default RejectJob;