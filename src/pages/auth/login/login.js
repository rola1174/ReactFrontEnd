/*import { useNavigate } from "react-router-dom";
import "./login.css";
import { useRef, useState } from "react";
import axios from "axios";
import jwt from "jwt-decode";
import { setAuthToken } from "../../../services/auth";

export const Login = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    loading: false,
    err: null,
  });

  const form = useRef({
    email: "",
    password: "",
  });

  const submit = (e) => {
    e.preventDefault();
    setLogin({ ...login, loading: true });
    axios
      .post("https://localhost:7047/api/Auth/login", {
        email: form.current.email.value,
        password: form.current.password.value,
      })
      .then((data) => {
        console.log(data);
        setLogin({ ...login, loading: false });
        const user = jwt(data.data.token);
        setAuthToken(data.data.token);
        if (user.role === "Admin") {
          navigate("/admin-home");
        } else if (user.role === "Professor") {
          navigate("/professor-home");
        }
      })
      .catch((errors) => {
        if (typeof errors.response.data.message === "string") {
          setLogin({ ...login, loading: false, err: [{ msg: errors.response.data.message }] });
        } else {
          setLogin({ ...login, loading: false, err: errors.response.data.message });
        }
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
          {login.err.map((err, index) => {
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
      {login.err !== null && error()}
      {login.loading === true ? (
        loadingSpinner()
      ) : (
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-xl-12">
              <div className="card mb-4">
                <div className="card-header">Login</div>
                <div className="card-body">
                  <form onSubmit={(e) => submit(e)}>
                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="email">
                        Email address
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="email"
                        ref={(val) => {
                          form.current.email = val;
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="password">
                        Password
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="password"
                        ref={(val) => {
                          form.current.password = val;
                        }}
                      />
                    </div>
                    <button className="btn btn-primary form-control" type="submit">
                      Login
                    </button>
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




/*import { useNavigate } from "react-router-dom";
import "./login.css";
import {useEffect, useRef, useState } from "react";
import axios from "axios";
import jwt from "jwt-decode";
import { setAuthToken } from "../../../services/auth";


export const Login = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    loading: false,
    err: null,
  });

  const form = useRef({
    email: "",
    password: "",
  });

  // useState is used when you need to update UI with the new value of that variable (Ex: counter)
    const [counter, setCounter] = useState(0)

  const submit = (e) => {
    e.preventDefault();
    setLogin({ ...login, loading: true });
    axios
      .post("https://localhost:7047/api/Auth/login", {
        email: form.current.email.value,
        password: form.current.password.value,
      })
      .then((data) => {
        console.log(data);
        setLogin({ ...login, loading: false });
        const user = jwt(data.data.token);
        setAuthToken(data.data.token);
        if (user.role === "Admin") {
          navigate("/admin-home");
        } else if (user.role === "JobSeeker") {
          navigate("/job-seeker-dashboard-home");
        } else if (user.role === "Employer") {
          navigate("/employer-dashboard-home");
        }

      })
      .catch((errors) => {
        if (typeof errors.response.data.message === "string") {
          setLogin({ ...login, loading: false, err: [{ msg: errors.response.data.message }] });
        } else {
          setLogin({ ...login, loading: false, err: errors.response.data.message });
        }
      });
      
        // Update UI with the new counter value which leads to call useEffect
        setCounter(counter + 1);
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
          {login.err.map((err, index) => {
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

  // Also, useEffect can be called when UI is updated using some state (Ex: counter)
  useEffect(() => {
    // Do something
    console.log("counter updated");

}, [counter])


  return (
    <>
      {login.err !== null && error()}
      {login.loading === true ? (
        loadingSpinner()
      ) : (
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-xl-12">
              <div className="card mb-4">
                <div className="card-header">Login</div>
                <div className="card-body">
                  <form onSubmit={(e) => submit(e)}>
                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="email">
                        Email address
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="email"
                        ref={(val) => {
                          form.current.email = val;
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="password">
                        Password
                      </label>
                      <input
                        className="form-control"
                        type="password"
                        id="password"
                        ref={(val) => {
                          form.current.password = val;
                        }}
                      />
                    </div>
                    <button className="btn btn-primary form-control" type="submit">
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};*/


/*import React, { Component } from "react"; // Import Component from React

import { setAuthToken } from "../../../services/auth";
import axios from "axios";
import jwt from "jwt-decode";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: {
        loading: false,
        err: null,
      },
      form: {
        email: "",
        password: "",
      },
      counter: 0,
    };
  }

  submit = (e) => {
    e.preventDefault();
    this.setState({ login: { ...this.state.login, loading: true } });
    axios
      .post("https://localhost:7047/api/Auth/login", {
        email: this.state.form.email,
        password: this.state.form.password,
      })
      .then((data) => {
        console.log(data);
        this.setState({ login: { ...this.state.login, loading: false } });
        const user = jwt(data.data.token);
        setAuthToken(data.data.token);
        if (user.role === "Admin") {
          this.props.history.push("/admin-home");
        } else if (user.role === "JobSeeker") {
          this.props.history.push("/job-seeker-dashboard-home");
        } else if (user.role === "Employer") {
          this.props.history.push("/employer-dashboard-home");
        }
      })
      .catch((errors) => {
        if (typeof errors.response.data.message === "string") {
          this.setState({
            login: {
              ...this.state.login,
              loading: false,
              err: [{ msg: errors.response.data.message }],
            },
          });
        } else {
          this.setState({
            login: {
              ...this.state.login,
              loading: false,
              err: errors.response.data.message,
            },
          });
        }
      });

    // Update UI with the new counter value which leads to call componentDidUpdate
    this.setState({ counter: this.state.counter + 1 });
  };

  loadingSpinner = () => {
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

  error = () => {
    return (
      <div className="container">
        <div className="row">
          {this.state.login.err.map((err, index) => {
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

  // Also, componentDidUpdate can be called when UI is updated using some state (Ex: counter)
  componentDidUpdate(prevProps, prevState) {
    // Do something
    console.log("counter updated");
  }

  render() {
    return (
      <>
        {this.state.login.err !== null && this.error()}
        {this.state.login.loading === true ? (
          this.loadingSpinner()
        ) : (
          <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-xl-12">
                <div className="card mb-4">
                  <div className="card-header">Login</div>
                  <div className="card-body">
                    <form onSubmit={(e) => this.submit(e)}>
                      <div className="mb-3">
                        <label className="small mb-1" htmlFor="email">
                          Email address
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="email"
                          value={this.state.form.email}
                          onChange={(e) =>
                            this.setState({
                              form: { ...this.state.form, email: e.target.value },
                            })
                          }
                        />
                      </div>
                      <div className="mb-3">
                        <label className="small mb-1" htmlFor="password">
                          Password
                        </label>
                        <input
                          className="form-control"
                          type="password"
                          id="password"
                          value={this.state.form.password}
                          onChange={(e) =>
                            this.setState({
                              form: { ...this.state.form, password: e.target.value },
                            })
                          }
                        />
                      </div>
                      <button className="btn btn-primary form-control" type="submit">
                        Login
                      </button>
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
}

export default Login;*/





/*import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";
import jwt from "jwt-decode";
import { setAuthToken } from "../../../services/auth";

export const Login = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    loading: false,
    err: null,
  });

  const form = useRef({
    email: "",
    password: "",
  });

  const submit = (e) => {
    e.preventDefault();
    setLogin({ ...login, loading: true });
    axios
      .post("https://localhost:7047/api/Auth/login", {
        email: form.current.email.value,
        password: form.current.password.value,
      })
      .then((data) => {
        setLogin({ ...login, loading: false });
        const user = jwt(data.data.token);
        setAuthToken(data.data.token);
        if (user.role === "Admin") {
          navigate("/admin-home");
        } else if (user.role === "Professor") {
          navigate("/professor-home");
        }
      })
      .catch((errors) => {
        setLogin({ ...login, loading: false, err: [{ msg: `something went wrong` }] });
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
          {login.err.map((err, index) => {
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
      {login.err !== null && error()}
      {login.loading === true ? (
        loadingSpinner()
      ) : (
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-xl-12">
              <div className="card mb-4">
                <div className="card-header">Login</div>
                <div className="card-body">
                  <form onSubmit={(e) => submit(e)}>
                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="email">
                        Email address
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="email"
                        ref={(val) => {
                          form.current.email = val;
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="password">
                        Password
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="password"
                        ref={(val) => {
                          form.current.password = val;
                        }}
                      />
                    </div>
                    <button className="btn btn-primary form-control" type="submit">
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};*/


import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";
import jwt from "jwt-decode";
import { setAuthToken } from "../../../services/auth";

export const Login = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    loading: false,
    err: null,
  });

  const form = useRef({
    email: "",
    password: "",
  });

  const submit = (e) => {
    e.preventDefault();
    setLogin({ ...login, loading: true });
    axios
      .post("https://localhost:7047/api/Auth/login", {
        email: form.current.email.value,
        password: form.current.password.value,
      })
      .then((data) => {
        setLogin({ ...login, loading: false });
        const user = jwt(data.data.token);
        setAuthToken(data.data.token);
        if (user.role === "Admin") {
          navigate("/admin-home");
          
        } else if (user.role === "employer") {
          navigate("/employer-dashboard");
        }
        else {
          navigate("/job-seeker-dashboard");
        }
      })
      .catch((errors) => {
        setLogin({ ...login, loading: false, err: [{ msg: `something went wrong` }] });
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
          {login.err.map((err, index) => {
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
      {login.err !== null && error()}
      {login.loading === true ? (
        loadingSpinner()
      ) : (
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-xl-12">
              <div className="card mb-4">
                <div className="card-header">Login</div>
                <div className="card-body">
                  <form onSubmit={(e) => submit(e)}>
                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="email">
                        Email address
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="email"
                        ref={(val) => {
                          form.current.email = val;
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="password">
                        Password
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="password"
                        ref={(val) => {
                          form.current.password = val;
                        }}
                      />
                    </div>
                    <button className="btn btn-primary form-control" type="submit">
                      Login
                    </button>
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
