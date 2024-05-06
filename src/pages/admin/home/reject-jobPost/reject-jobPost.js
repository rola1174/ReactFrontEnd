// reject-jobPost.js
import React, { useState } from "react";
import axios from "axios";

const RejectJobPost = ({ id, onReject }) => {
  const [loading, setLoading] = useState(false);

  const rejectJob = () => {
    setLoading(true);
    axios
      .patch(`https://localhost:7163/api/Admin/reject-jobPost/${id}`)
      .then((response) => {
        // Call the onReject callback to update UI or perform other actions
        onReject(id);
      })
      .catch((error) => {
        // Handle error
        console.error("Reject job error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <button onClick={rejectJob} disabled={loading}>Reject</button>
    </div>
  );
};

export default RejectJobPost;
