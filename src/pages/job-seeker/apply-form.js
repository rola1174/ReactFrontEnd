import React, { useState } from "react";
import "./job-seeker-dashboard.css";

export const ApplyForm = ({ jobId }) => {
  const [cvFile, setCvFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setCvFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("CV File:", cvFile);
    // Here you would submit the CV file to the backend
    navigateToApply(jobId); // Toggle to another page with jobId
  };

  const navigateToApply = (jobId) => {
    // Simulating navigation to `/apply/${jobId}`
    console.log(`Navigating to /apply/${jobId}`);
    // Perform actual navigation logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="job-seeker-dashboard">
        <div className="header-container">
          <h2 className="title">Apply for Job</h2>
        </div>
        <div className="form-group">
          <label htmlFor="resume" className="upload-label">
            <span>Upload a resume</span>
            <div className="triangle"></div>
          </label>
          <input
            type="file"
            id="resume"
            accept=".pdf,.docx,.rtf,.txt"
            onChange={handleFileChange}
            required
          />
          <span className="accepted-types">Accepted file types: pdf, docx, rtf, txt</span>
        </div>
        <div className="button-container">
          <button type="submit" className="apply-button">submit</button>
        </div>
      </div>
    </form>
  );
};

export default ApplyForm;
