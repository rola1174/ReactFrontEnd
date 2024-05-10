
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
export const JobSeekerDashboard = () => {

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchCriteria, setSearchCriteria] = useState({
        location: "",
        industry: "",
        jobTitle: "",
        salaryRange: "",
        date: ""
    });

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = () => {
        setLoading(true);
        setError(null);

        axios
            .get("https://localhost:7047/api/JobSeeker/GetAllJobs", {
                params: searchCriteria
            })
            .then((response) => {
                setJobs(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError("Failed to fetch jobs");
                setLoading(false);
            });
    };

    const handleSearch = () => {
        fetchJobs();
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSearchCriteria((prevSearchCriteria) => ({
            ...prevSearchCriteria,
            [name]: value
        }));
    };

    const renderJobsTable = () => {
        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }

        if (jobs.length === 0) {
            return <div>No jobs found.</div>;
        }

        return (
            <table>
                <thead>
                    <tr>
                        <th>Job Title</th>
                        <th>Location</th>
                        <th>Industry</th>
                        <th>Salary</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((job) => (
                        <tr key={job.id}>
                            <td>{job.title}</td>
                            <td>{job.location}</td>
                            <td>{job.industry}</td>
                            <td>{job.salary}</td>
                            <td>{job.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    return (
        <div>
            <h1>Job Seeker Dashboard</h1>
            <div>
                <h2>Search Jobs</h2>
                <div>
                    <label>Location: </label>
                    <input
                        type="text"
                        name="location"
                        value={searchCriteria.location}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Industry: </label>
                    <input
                        type="text"
                        name="industry"
                        value={searchCriteria.industry}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Job Title: </label>
                    <input
                        type="text"
                        name="jobTitle"
                        value={searchCriteria.jobTitle}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Salary Range: </label>
                    <input
                        type="text"
                        name="salaryRange"
                        value={searchCriteria.salaryRange}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Date: </label>
                    <input
                        type="text"
                        name="date"
                        value={searchCriteria.date}
                        onChange={handleInputChange}
                    />
                </div>
                <button onClick={handleSearch}>Search</button>
            </div>
            <div>
                <h2>Job Listings</h2>
                {renderJobsTable()}
            </div>
        </div>
    );
};

export default JobSeekerDashboard;