import React from "react";
import { JobCard } from "./job_card/job_card"; // Note: Corrected component name to start with uppercase
import { data } from '../../services/job';
import { getAuthToken } from "../../services/auth";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

export const JobPage = () => {
    // const getID = (id) => {
    //     console.log(id);
    // }
    const { token, user } = getAuthToken();

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
                .get(`https://localhost:7163/api/JobSeeker/Getalljobs`,)

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
    }, [savedJobs, job.update]);

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


