/*import React, { useState } from "react";
import "./job-seeker-dashboard.css";

export const ApplyForm = ({ jobId }) => {
  const [cvFile, setCvFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setCvFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("CV File:", cvFile);
    // Here you would submit the CV file to the backend
    navigateToApply(jobId); // Toggle to another page with jobId
  };

  const navigateToApply = (jobId) => {
    // Simulating navigation to `/apply/${jobId}`
    console.log(`Navigating to /apply/${jobId}`);
    // Perform actual navigation logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="job-seeker-dashboard">
        <div className="header-container">
          <h2 className="title">Apply for Job</h2>
        </div>
        <div className="form-group">
          <label htmlFor="resume" className="upload-label">
            <span>Upload a resume</span>
            <div className="triangle"></div>
          </label>
          <input
            type="file"
            id="resume"
            accept=".pdf,.docx,.rtf,.txt"
            onChange={handleFileChange}
            required
          />
          <span className="accepted-types">Accepted file types: PDF, DOCX, RTF, TXT</span>
        </div>
        <div className="button-container">
          <button type="submit" className="apply-button">submit</button>
        </div>
      </div>
    </form>
  );
};
*/


import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./ApplyForm.css";

export const ApplyForm = (id) => {
  const [applyForm, setApplyForm] = useState({
    loading: true,
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

  useEffect(() => {
    axios
      .get("https://localhost:7163/api/job-seeker/apply-form")
      .then((data) => {
        setApplyForm({ ...applyForm, result: data.data, loading: false, err: null });
      })
      .catch((err) => {
        setApplyForm({ ...applyForm, loading: false, err: [{ msg: `something went wrong ${err}` }] });
      });
  }, []);

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
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-xl-12">
              <div className="card mb-4">
                <div className="card-header"> Apply for job</div>
                <div className="card-body">
                  <form onSubmit={(e) => submit(e)}>
                    <div className="row gx-3 mb-3">
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
                    <div className="row gx-3 mb-3">
                      <div className="col-md-12">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
/*import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./apply-form.css";

export const ApplyForm = ({ jobId }) => {
  const [applyForm, setApplyForm] = useState({
    loading: true,
    result: {},
    err: null,
  });
  const form = useRef({
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
    cvFile: null, // Changed cvFile value to null
  });

  const submit = (e) => {
    e.preventDefault();
    setApplyForm({ ...applyForm, loading: true });
    
    const formData = new FormData();
    formData.append("Name", form.current.Name.value);
    formData.append("Email", form.current.Email.value);
    formData.append("Phone", form.current.Phone.value);
    formData.append("Message", form.current.Message.value);
    formData.append("cvFile", form.current.cvFile); // Append cvFile as it is

    axios
      .post(`https://localhost:7163/api/job-seeker/apply-form/${jobId}`, formData) 
      .then((response) => {
        setApplyForm({ ...applyForm, loading: false, result: response.data });
      })
      .catch((error) => {
        console.error("Error submitting application:", error);
        setApplyForm({ ...applyForm, loading: false, err: error.response.data.errors });
      });
  };

  useEffect(() => {
    axios
      .get(`https://localhost:7163/api/job-seeker/apply-form/${jobId}`)
      .then((data) => {
        setApplyForm({ ...applyForm, result: data.data, loading: false, err: null });
      })
      .catch((err) => {
        setApplyForm({ ...applyForm, loading: false, err: [{ msg: `something went wrong ${err}` }] });
      });
  }, [jobId]); 

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
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-xl-12">
              <div className="card mb-4">
                <div className="card-header"> Apply for job</div>
                <div className="card-body">
                  <form onSubmit={(e) => submit(e)}>
                    <div className="row gx-3 mb-3">
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="cvFile">
                          CV File
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          id="cvFile"
                          onChange={(e) => form.current.cvFile = e.target.files[0]} // Update cvFile value on change
                          required
                        />
                      </div>
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
                          type="email" // Changed "Email" to "email"
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
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                      <button className="btn btn-primary" type="submit">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
*/







/*
import React, { useState } from "react";
import axios from "axios";
import "./apply-form.css";

export const ApplyForm = ({ jobId }) => {
  const [cvFile, setCvFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setCvFile(file);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (cvFile) {
      // If CV file is uploaded, submit all form data including CV
      submitWithCV();
    } else {
      // If no CV file, submit other form data
      submitWithoutCV();
    }
  };

  const submitWithCV = () => {
    const formDataWithCV = new FormData();
    formDataWithCV.append("name", formData.name);
    formDataWithCV.append("email", formData.email);
    formDataWithCV.append("phone", formData.phone);
    formDataWithCV.append("message", formData.message);
    formDataWithCV.append("cvFile", cvFile);

    axios
      .post(`https://localhost:7163/api/apply/${jobId}`, formDataWithCV)
      .then((response) => {
        console.log("Submitted with CV:", response.data);
        // Handle success
      })
      .catch((error) => {
        console.error("Error submitting with CV:", error);
        // Handle error
      });
  };

  const submitWithoutCV = () => {
    axios
      .post(`https://localhost:7163/api/apply/${jobId}`, formData)
      .then((response) => {
        console.log("Submitted without CV:", response.data);
        // Handle success
      })
      .catch((error) => {
        console.error("Error submitting without CV:", error);
        // Handle error
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="job-seeker-dashboard">
        <div className="header-container">
          <h2 className="title">Apply for Job</h2>
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="resume" className="upload-label">
            <span>Upload a resume</span>
            <div className="triangle"></div>
          </label>
          <input
            type="file"
            id="resume"
            accept=".pdf,.docx,.rtf,.txt"
            onChange={handleFileChange}
          />
          <span className="accepted-types">Accepted file types: PDF, DOCX, RTF, TXT</span>
        </div>
        <div className="button-container">
          <button type="submit" className="apply-button">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};
*/