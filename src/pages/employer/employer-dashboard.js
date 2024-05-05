import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { JobPostForm } from "./JobPostForm";

export const EmployerDashboard = () => {
    const [jobPost, setJobPost] = useState({
        loading: false,
        result: {},
        error: null,
    });

    const form = useRef(null);

    const handleJobSubmit = (newJob) => {
        // Implement your logic to handle the submission of new job ("fetching from backend")
        console.log("New Job Submitted:", newJob);
    };

    const submit = (e) => {
        e.preventDefault();
        setJobPost({ ...jobPost, loading: true });

        const formData = new FormData(form.current);

        axios
            .post("https://localhost:7163/api/employer/JobPostForm", formData)
            .then((response) => {
                setJobPost({ ...jobPost, loading: false, result: response.data });
                handleJobSubmit(response.data); // Call handleJobSubmit function with the new job data
                // Clear form fields
                form.current.reset();
            })
            .catch((error) => {
                setJobPost({ ...jobPost, loading: false, error: error.response.data });
            });
    };

    return (
        <div>
            <h2>Welcome Employer</h2>
            {jobPost.error && (
                <div className="alert alert-danger" role="alert">
                    {jobPost.error}
                </div>
            )}
            <JobPostForm formRef={form} onSubmit={submit} loading={jobPost.loading} />
        </div>
    );
};