import React, { useRef, useState } from "react";
import axios from "axios";
import { getAuthToken } from "../../services/auth";

export const JobPostForm = () => {
    const [jobPost, setJobPost] = useState({
        loading: false,
        result: {},
        err: null,
    });

    const { token, user } = getAuthToken();

    const form = useRef({
        job_title: "",
        job_description: "",
        job_type: "",
        location: "",
        industry: "",
        salary_budget: "",
        no_of_position_required: "",
        empid: "",
    });


    const submit = (e) => {
        e.preventDefault();
        setJobPost({ ...jobPost, loading: true });
        axios
            .post("https://localhost:7163/api/Employer/CreateJobPost", {
                job_title: form.current.job_title.value,
                job_description: form.current.job_description.value,
                job_type: form.current.job_type.value,
                location: form.current.location.value,
                industry: form.current.industry.value,
                salary_budget: form.current.salary_budget.value,
                no_of_position_required: form.current.no_of_position_required.value,
                empid: user.nameid,
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
                                    {jobPost.result && Object.keys(jobPost.result).length > 0 && (
                                        <div className="alert alert-success" role="alert">
                                            Job created successfully!
                                        </div>
                                    )}
                                    <form onSubmit={(e) => submit(e)}>
                                        <div className="row gx-3 mb-3">
                                            <div className="col-md-6">
                                                <label className="small mb-1" htmlFor="firstName">job title</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    id="job_title"
                                                    ref={(val) => {
                                                        form.current.job_title = val;
                                                    }}
                                                    required
                                                />
                                            </div>

                                            <div className="col-md-6">
                                                <label className="small mb-1" htmlFor="Latest-certification">Job Type</label>
                                                <select
                                                    className="form-control"
                                                    id="Latest-certification"
                                                    ref={(val) => {
                                                        form.current.job_type = val;
                                                    }}
                                                    required
                                                >
                                                    <option value="">Select job type</option>
                                                    <option value="Part time">Part time</option>
                                                    <option value="Full Time">Full Time</option>
                                                    <option value="Remote">Remote</option>
                                                </select>
                                            </div>

                                            <div className="col-md-6">
                                                <label className="small mb-1" htmlFor="lastName">job Description</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    id="job_description"

                                                    ref={(val) => {
                                                        form.current.job_description = val;
                                                    }}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="small mb-1" htmlFor="email">location</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="location"
                                                ref={(val) => {
                                                    form.current.location = val;
                                                }}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="small mb-1" htmlFor="password">industry</label>
                                            <input
                                                className="form-control"
                                                type="industry"
                                                id="industry"
                                                ref={(val) => {
                                                    form.current.industry = val;
                                                }}
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="small mb-1" htmlFor="username">salary budget</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="salary_budget"
                                                ref={(val) => {
                                                    form.current.salary_budget = val;
                                                }}
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="small mb-1" htmlFor="password">no_of_positions_required</label>
                                            <input
                                                className="form-control"
                                                type="number"
                                                id="no_of_position_required"
                                                ref={(val) => {
                                                    form.current.no_of_position_required = val;
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

export default JobPostForm;