import React, { useRef, useEffect, useState } from "react";
import axios from "axios";

export const JobPostForm = () => {
    const [jobPost, setJobPost] = useState({
        loading: false,
        result: {},
        err: null,
    });

    const form = useRef({
        employerName: "",
        jobType: "",
        jobBudget: "",
        postCreationDate: "",
        jobDescription: "",
        numProposals: "",
    });


    const submit = (e) => {
        e.preventDefault();
        setJobPost({ ...jobPost, loading: true });

        axios
            .post("https://localhost:7163/api/employer-dashboard-home/JobPostForm", {
                employerName: form.current.employerName.value,
                jobType: form.current.jobType.value,
                jobBudget: form.current.jobBudget.value,
                postCreationDate: form.current.postCreationDate.value,
                jobDescription: form.current.jobDescription.value,
                numProposals: form.current.numProposals.value,

            })
            .then((response) => {
                setJobPost({ ...jobPost, loading: false, result: response.data });
                // onSubmit(response.data); // Call onSubmit function with the new job data
                // // Clear form fields
                // setEmployerName("");
                // setJobType("part-time");
                // setJobBudget("");
                // setPostCreationDate("");
                // setJobDescription("");
                // setNumProposals("");
            })
            .catch((error) => {
                setJobPost({ ...jobPost, loading: false, err: error.response.data });
            });
    };
    const loadingSpinner = () => {
        return (
            <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        );
    };
    const error = () => {
        return (
            <div className="container">
                <div className="row">
                    {jobPost.err.map((err, index) => {
                        return (
                            <div key={index} className="col-sm-12 alert alert-danger" role="alert">
                                {err.msg}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    return (
        <>
            {jobPost.err !== null && error()}
            {jobPost.loading === true ? (
                loadingSpinner()
            ) : (
                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-xl-12">
                            <div className="card mb-4">
                                <div className="card-header">Create new Job Post</div>
                                <div className="card-body">
                                    <form onSubmit={(e) => submit(e)}>
                                        <div className="row gx-3 mb-3">
                                            <div className="col-md-6">
                                                <label className="small mb-1" htmlFor="firstName">employer Name</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    id="employerName"
                                                    ref={(val) => {
                                                        form.current.employerName = val;
                                                    }}
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="small mb-1" htmlFor="lastName">job Description</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    id="jobDescription"

                                                    ref={(val) => {
                                                        form.current.jobDescription = val;
                                                    }}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="small mb-1" htmlFor="email">job Budget</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="jobBudget"
                                                ref={(val) => {
                                                    form.current.jobBudget = val;
                                                }}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="small mb-1" htmlFor="password">postCreationDate</label>
                                            <input
                                                className="form-control"
                                                type="date"
                                                id="postCreationDate"
                                                ref={(val) => {
                                                    form.current.postCreationDate = val;
                                                }}
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="small mb-1" htmlFor="Latest-certification">Job Type </label>
                                            <select
                                                className="form-control"
                                                id="JobType"
                                                ref={(val) => {
                                                    form.current.jobType = val;
                                                }}
                                                required
                                            >
                                                <option value="">Select Job Type </option>
                                                <option value="fullTime">Full Time</option>
                                                <option value="partTime">Part Time </option>

                                            </select>
                                        </div>

                                        <div className="mb-3">
                                            <label className="small mb-1" htmlFor="username">numProposals</label>
                                            <input
                                                className="form-control"
                                                type="number"
                                                id="numProposals"
                                                ref={(val) => {
                                                    form.current.numProposals = val;
                                                }}
                                                required
                                            />
                                        </div>
                                        <button type="submit">{jobPost.loading ? "Posting..." : "Post Job"}</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}