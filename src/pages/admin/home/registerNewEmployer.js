import React, { useRef, useState } from "react";
import axios from "axios";

export const CreateEmployer = () => {
  const [createEmployer, setEmployer] = useState({
    loading: false,
    result: {},
    err: null,
  });

  const form = useRef({
    username: "",
    password: "",
    email: "",
    company_name: "",
    company_description: "",
    mainaddress: "",
  });

  const submit = (e) => {
    e.preventDefault();
    setEmployer({ ...createEmployer, loading: true });

    axios
      .post("https://localhost:7163/api/Admin/CreateEmployer", {
        username: form.current.username.value,
        password: form.current.password.value,
        email: form.current.email.value,
        company_name: form.current.company_name.value,
        company_description: form.current.company_description.value,
        mainaddress: form.current.mainaddress.value,
      })
      .then((response) => {
        setEmployer({ ...createEmployer, loading: false, result: response.data });
      })
      .catch((error) => {
        setEmployer({ ...createEmployer, loading: false, err: error.response.data });
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
          {createEmployer.err.map((err, index) => {
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
      {createEmployer.err !== null && error()}
      {createEmployer.loading === true ? (
        loadingSpinner()
      ) : (
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-xl-12">
              <div className="card mb-4">
                <div className="card-header"> create new employer</div>
                <div className="card-body">
                  {createEmployer.result && Object.keys(createEmployer.result).length > 0 && (
                    <div className="alert alert-success" role="alert">
                      Employer created successfully!
                    </div>
                  )}
                  <form onSubmit={(e) => submit(e)}>
                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="Username">
                        UserName
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="Username"
                        ref={(val) => {
                          form.current.username = val;
                        }}
                        placeholder="Enter UserName"
                        required
                      />
                    </div>
                    <div className="row gx-3 mb-3">
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="password">
                          password
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="password"
                          ref={(val) => {
                            form.current.password = val;
                          }}
                          placeholder="Enter password"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="email">
                        Email address
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        id="email"
                        ref={(val) => {
                          form.current.email = val;
                        }}
                        placeholder="Enter Email address"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="Company_name">
                        Company_name
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="Company_name"
                        ref={(val) => {
                          form.current.company_name = val;
                        }}
                        placeholder="Enter The Company_name"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="Company_description">
                        Company_description
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="Company_description"
                        ref={(val) => {
                          form.current.company_description = val;
                        }}
                        placeholder="Enter The Company_description"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="Mainaddress">
                        Mainaddress
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="Mainaddress"
                        ref={(val) => {
                          form.current.mainaddress = val;
                        }}
                        placeholder="Enter The Mainaddress"
                        required
                      />
                    </div>
                    <button type="submit">{createEmployer.loading ? "Creating..." : "Create Employer"}</button>
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

export default CreateEmployer;
