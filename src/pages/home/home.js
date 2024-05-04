/*import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getAuthToken } from "../../services/auth";

export const Home = () => {
  const { token, user } = getAuthToken();
  const navigate = useNavigate();

  const [jobs, setJobs] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [errorJobs, setErrorJobs] = useState(null);

  useEffect(() => {
    if (!token || !user) {
      // If token or user is not available, redirect to login page
      navigate("/login");
      return;
    }

    // Fetch jobs
    axios
      .get("https://localhost:7047/api/jobs", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setJobs(response.data);
        setLoadingJobs(false);
      })
      .catch((error) => {
        setErrorJobs("Failed to fetch jobs. Please try again later.");
        setLoadingJobs(false);
      });
  }, [token, user, navigate]);

  const renderJobs = () => {
    if (loadingJobs) {
      return <div>Loading jobs...</div>;
    }

    if (errorJobs) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-12 alert alert-danger" role="alert">
              {errorJobs}
            </div>
          </div>
        </div>
      );
    }

    if (jobs.length === 0) {
      return <div>No jobs available.</div>;
    }

    return (
      <div>
        {jobs.map((job) => (
          <div key={job.id}>
            <h3>{job.title}</h3>
            <p>Description: {job.description}</p>
            <p>Location: {job.location}</p>
            <p>Salary: {job.salary}</p>
            <h4>Proposals:</h4>
            {job.proposals.map((proposal) => (
              <div key={proposal.id}>
                <p>Applicant: {proposal.applicant}</p>
                <p>Proposal: {proposal.message}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h2>Welcome, {user ? user.name : "Guest"}</h2>
      {user && (
        <button onClick={() => navigate("/post-job")}>Post New Job</button>
      )}

      <h3>Job Listings:</h3>
      {renderJobs()}
    </div>
  );
};
export default Home;*/