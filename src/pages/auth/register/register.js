import axios from "axios";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

export const Register = () => {
  const navigate = useNavigate();

  const [register, setRegister] = useState({
    loading: false,
    result: {},
    err: null,
  });

  const form = useRef({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    latest_certificate: "",
    gender: "",
    phone: "",
    username: "",
  });

  const submit = (e) => {
    e.preventDefault();
    setRegister({ ...register, loading: true });
    axios
      .post("https://localhost:7163/Auth/registeruser", {
        username: form.current.username.value,
        first_name: form.current.firstName.value,
        last_name: form.current.lastName.value,
        email: form.current.email.value,
        password: form.current.password.value,
        latest_certificate: form.current.latest_certificate.value,
        gender: form.current.gender.value,
        phone: form.current.phone.value,
      })

      .then(() => {
        setRegister({ ...register, loading: false });
        navigate("/login");
      })
      .catch((errors) => {
        setRegister({ ...register, loading: false, err: [{ msg: `something went wrong` }] });
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
          {register.err.map((err, index) => {
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
      {register.err !== null && error()}
      {register.loading === true ? (
        loadingSpinner()
      ) : (
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-xl-12">
              <div className="card mb-4">
                <header className="card-header text-center">Register</header>
                <div className="card-body">
                  <form onSubmit={(e) => submit(e)}>
                    <div className="row gx-3 mb-3">
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="firstName">First Name</label>
                        <input
                          className="form-control"
                          type="text"
                          id="firstName"
                          placeholder="Enter First Name"
                          ref={(val) => {
                            form.current.firstName = val;
                          }}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="lastName">Last Name</label>
                        <input
                          className="form-control"
                          type="text"
                          id="lastName"
                          placeholder="Enter Last Name"
                          ref={(val) => {
                            form.current.lastName = val;
                          }}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="email">Email address</label>
                      <input
                        className="form-control"
                        type="email"
                        id="email"
                        placeholder="Enter Email"
                        ref={(val) => {
                          form.current.email = val;
                        }}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="password">Password</label>
                      <input
                        className="form-control"
                        type="password"
                        id="password"
                        placeholder="Enter Password"
                        ref={(val) => {
                          form.current.password = val;
                        }}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="Latest-certification">Latest Certification</label>
                      <select
                        className="form-control"
                        id="Latest-certification"
                        ref={(val) => {
                          form.current.latest_certificate = val;
                        }}
                        required
                      >
                        <option value="">Select Certification</option>
                        <option value="High School">High School</option>
                        <option value="Bachelor Degree">Bachelor Degree</option>
                        <option value="Master Degree">Master Degree</option>
                        <option value="Phd Degree">Phd Degree</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="gender">Gender</label>
                      <select
                        className="form-control"
                        id="gender"
                        ref={(val) => {
                          form.current.gender = val;
                        }}
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="0">Male</option>
                        <option value="1">Female</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="phone">Phone Number</label>
                      <input
                        className="form-control"
                        type="tel"
                        id="phone"
                        placeholder="Enter Phone Number"
                        ref={(val) => {
                          form.current.phone = val;
                        }}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="username">Username</label>
                      <input
                        className="form-control"
                        type="text"
                        id="username"
                        placeholder="Enter Username"
                        ref={(val) => {
                          form.current.username = val;
                        }}
                        required
                      />
                    </div>
                    <button className="btn btn-primary" type="submit">Register</button>
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
