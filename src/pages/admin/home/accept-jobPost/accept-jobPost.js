// accept-jobPost.js
import React, { useState } from "react";
import axios from "axios";

const AcceptJobPost = ({ id, onAccept }) => {
  const [loading, setLoading] = useState(false);

  const acceptJob = () => {
    setLoading(true);
    axios
      .patch(`https://localhost:7163/api/Admin/accept-jobPost/${id}`)
      .then((response) => {
        // Call the onAccept callback to update UI or perform other actions
        onAccept(id);
      })
      .catch((error) => {
        // Handle error
        console.error("Accept job error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <button onClick={acceptJob} disabled={loading}>Accept</button>
    </div>
  );
};

export default AcceptJobPost;
