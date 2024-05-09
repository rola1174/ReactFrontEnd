import React, { useRef, useState } from "react";
import axios from "axios";
import "./ApplyForm.css";

export const ApplyForm = (id) => {
  const [applyForm, setApplyForm] = useState({
    loading: false,
    result: {},
    err: null,
  });
  const form = useRef({
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
    cvFile: "",
  });

  const submit = (e) => {
    e.preventDefault();
    setApplyForm({ ...applyForm, loading: true });

    axios
      .post(`https://localhost:7163/api/job-seeker/ApplyForm/${id}`, {
        Name: form.current.Name.value,
        Email: form.current.Email.value,
        Phone: form.current.Phone.value,
        Message: form.current.Message.value,
        cvFile: form.current.cvFile.value,
      })

      .then((response) => {
        setApplyForm({ ...applyForm, loading: false, result: response.data });

      })
      .catch((error) => {
        setApplyForm({ ...applyForm, loading: false, err: error.response.data });
      });
  };

  // useEffect(() => {
  //   axios
  //     .get("https://localhost:7163/api/job-seeker/apply-form")
  //     .then((data) => {
  //       setApplyForm({ ...applyForm, result: data.data, loading: false, err: null });
  //     })
  //     .catch((err) => {
  //       setApplyForm({ ...applyForm, loading: false, err: [{ msg: `something went wrong ${err}` }] });
  //     });
  // }, []);

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
              <p>Enter your informantion to apply for job</p>
            </header>
            <div className="con">
              <div className="row gx-3 mb-3">
                <div className="col-md-6">
                  <label className="small mb-1" htmlFor="Name">
                    Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="Name"
                    ref={(val) => {
                      form.current.Name = val;
                    }}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="small mb-1" htmlFor="Email">
                    Email
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="Email"
                    ref={(val) => {
                      form.current.Email = val;
                    }}
                    required
                  />
                </div>
              </div>
              <div className="row gx-3 mb-3">
                <div className="col-md-6">
                  <label className="small mb-1" htmlFor="Phone">
                    Phone
                  </label>
                  <input
                    className="form-control"
                    type="tel"
                    id="Phone"
                    ref={(val) => {
                      form.current.Phone = val;
                    }}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="small mb-1" htmlFor="cvFile">
                    CV File
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="cvFile"
                    ref={(val) => {
                      form.current.cvFile = val;
                    }}
                    required
                  />
                </div>
              </div>
              <div className="row gx-3 mb-3">
                <div className="col-md-12">
                  <label className="small mb-1" htmlFor="Message">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="Message"
                    rows="4"
                    ref={(val) => {
                      form.current.Message = val;
                    }}
                    required
                  ></textarea>
                </div>
              </div>
              <br />
              <div className="row gx-3 mb-3">
                {/* <div className="col-md-12"> */}
                <button type="submit" className="apply-btn">
                  Submit
                </button>
                {/* </div> */}
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

