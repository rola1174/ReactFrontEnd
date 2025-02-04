import React from "react";
import { JobCard } from "./job_card/job_card"; // Note: Corrected component name to start with uppercase
import { data } from '../../services/job';
import { getAuthToken } from "../../services/auth";
import JobSeekerDashboard from "../job-seeker/job-seeker-dashboard";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

export const JobPage = () => {
    // const getID = (id) => {
    //     console.log(id);
    // }
    const { token, user } = getAuthToken();
    const [search, setSearch] = useState("")

    const [job, setJob] = useState({
        loading: true,
        result: [],
        err: null,
    });

    const [savedJobs, setSavedJobs] = useState([]);
    //     loading: true,
    //     result: [],
    //     err: null,
    // });

    useEffect(() => {
        if (token && user && user.role === "Admin") {
            axios
                .get(`https://localhost:7163/api/Admin/GetAllJobs`)
                .then((response) => {
                    const jobs = response.data.map((job) => ({
                        ...job,
                        isSaved: savedJobs.includes(job.jobId),
                    }));
                    setJob({ ...job, result: jobs, loading: false, err: null });
                })
                .catch((error) => {
                    setJob({
                        ...job,
                        loading: false,
                        err: [{ msg: "Something went wrong" }],
                    });
                });

        } else if (token && user && user.role === "Job Seeker") {
            axios
                .get("https://localhost:7163/api/JobSeeker/jobsWithTitleAndIndustryAndLocationAndDateAndSalary", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    params: {
                        search: search,
                    },
                })
                .then((response) => {
                    const jobs = response.data.map((job) => ({
                        ...job,
                        isSaved: savedJobs.includes(job.jobId),
                    }));
                    setJob({ ...job, result: jobs, loading: false, err: null });
                })
                .catch((error) => {
                    setJob({
                        ...job,
                        loading: false,
                        err: [{ msg: "Something went wrong" }],
                    });
                });
        }
    }, [search, job.update]);

    useEffect(() => {
        if (token && user && user.role === "Job Seeker") {
            axios
                .get(`https://localhost:7163/api/JobSeeker/GetAllSavedJobs/${user.nameid}`, {
                    // headers: {
                    //   Authorization: `Bearer ${token}`,
                    // },
                })
                .then((response) => {
                    setSavedJobs(response.data || []);
                })
                .catch((error) => {
                    setSavedJobs([]);
                    console.log("fetch the error :", error);

                });
        }
    }, []);

    const isSaved = (jobId) => {
        if (savedJobs != []) {
            return savedJobs.includes(jobId);
        }
        return false;
    };


    return (
        <div className="d-flex flex-wrap justify-content-between">
            <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-xl-12">
                        <div className="card mb-4">
                            <div className="card-header">Job Postings</div>
                            <div className="card-body" style={{ backgroundColor: "#F8F8F8" }}>
                                <div className="row mb-3">
                                    <label className="small mb-1" htmlFor="name">
                                        Search (Search by industry or location or jobTitle or salaryRange or date)
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="name"
                                        value={search}
                                        onChange={(e) => {
                                            setSearch(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {job.result.map((job, index) => (
                <JobCard
                    Key={index + 1}
                    id={job.jobId}
                    jobDecription={job.job_description}
                    jobTitle={job.job_title}
                    industry={job.industry}
                    salary={job.salary_budget}
                    noOfProposalSubmited={job.no_of_proposal_submitted}
                    noOfPositionsRequired={job.no_of_position_required}
                    jobPostCreationDate={job.post_creation_date}
                    employerName={job.employerName}
                    jobType={job.job_type}
                    jobLocation={job.location}
                    isSaved={isSaved(job.jobId)}
                // getID={getID}
                />
            ))}
        </div>
    );
};


