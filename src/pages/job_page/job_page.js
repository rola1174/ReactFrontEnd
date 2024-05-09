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

    useEffect(() => {
        // (token && user.role === "Employer") ? (
        axios
            .get(`https://localhost:7163/api/Admin/GetAllJobs`, {
                // headers: {
                //   Authorization: `Bearer ${token}`,
                // },
            })
            // ) : (
            //     axios
            //         .get(`https://localhost:7163/api/JobSeeker/Getalljobs`, {
            //             // headers: {
            //             //   Authorization: `Bearer ${token}`,
            //             // },
            //         })
            // )
            .then((response) => {
                setJob({ ...job, result: response.data, loading: false, err: null });
            })
            .catch((error) => {
                setJob({
                    ...job,
                    loading: false,
                    err: [{ msg: `Something went wrong` }],
                });
            });
    }, []);

    return (
        <div className="d-flex flex-wrap justify-content-between">
            {job.result.map((job, index) => (
                <JobCard
                    cardKey={index + 1}
                    // jobId={job.result.id}
                    jobTitle={job.job_title}
                    industry={job.industry}
                    jobPostCreationDate={job.post_creation_date}
                    employerName={job.employerName}
                    jobType={job.job_type}
                    jobLocation={job.location}
                // isJobSaved = {job.isSaved}
                // getID={getID}
                />
            ))}
        </div>
    );
};
