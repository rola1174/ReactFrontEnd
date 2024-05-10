import React, { useRef, useState } from "react";
import axios from "axios";
import { getAuthToken } from "../../services/auth";
import { useParams } from "react-router-dom";
import "./ApplyForm.css";


export const ApplyForm = () => {
  const { user } = getAuthToken();
  const { id } = useParams();
  const [applyForm, setApplyForm] = useState({
    loading: false,
    result: {},
    err: null,
  });

  const { nameid } = getAuthToken().user;

  const requestData = {
    jobSeekerId: parseInt(nameid),
    JobId: id,
  };

  const form = useRef({
    brief_description: "",
    CV_file: null,
  });

  const submit = (e) => {
    e.preventDefault();
    setApplyForm({ ...applyForm, loading: true });

    const formData = new FormData();
    formData.append("jobSeekerId", requestData.jobSeekerId);
    formData.append("jobId", requestData.JobId);
    formData.append("brief_description", form.current.brief_description.value);
    formData.append("CV_file", form.current.CV_file.files[0]);

    axios
      .post('https://localhost:7163/api/Proposal/Applyforjob', formData)


      .then((response) => {
        setApplyForm({ ...applyForm, loading: false, result: response.data });
      })
      .catch((error) => {
        setApplyForm({ ...applyForm, loading: false, err: error.response.data });
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
          {applyForm.err.map((err, index) => {
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
      {applyForm.err !== null && error()}
      {applyForm.loading === true ? (
        loadingSpinner()
      ) : (
        <div className="overlay">
          <form onSubmit={(e) => submit(e)}>
            <header className="head-form">
              <h2>Apply For Job</h2>
              <p>Enter your information to apply for the job</p>
            </header>
            <div className="con">
              <div className="col-md-6">
                <label className="small mb-1" htmlFor="CV_file">
                  CV File
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="CV_file"
                  ref={(val) => {
                    form.current.CV_file = val;
                  }}
                  required
                />
              </div>
            </div>
            <div className="row gx-3 mb-3">
              <div className="col-md-12">
                <label className="small mb-1" htmlFor="brief_description">
                  Brief Description
                </label>
                <textarea
                  className="form-control"
                  id="brief_description"
                  rows="3"
                  ref={(val) => {
                    form.current.brief_description = val;
                  }}

                ></textarea>
              </div>
            </div>
            <br />
            <div className="row gx-3 mb-3">
              <button type="submit" className="apply-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
