import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";
import jwt from "jwt-decode";
import { setAuthToken } from "../../../services/auth";
import { FaRegUserCircle, FaKey, FaUserPlus, FaEye } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./login.css";

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

  const submit = (formData) => {
    setLogin({ ...login, loading: true });
    axios
      .post("https://localhost:7163/Auth/login", formData)
      .then((data) => {
        setLogin({ ...login, loading: false });
        const user = jwt(data.data.token);
        setAuthToken(data.data.token);
        if (user.role === "Admin") {
          navigate("/admin-home");
        } else if (user.role === "Employer") {
          navigate("/employer");
        } else {
          navigate("/job-seeker");
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

  const LoginForm = ({ onSubmit }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ email, password });
    };

    return (
      <div className="overlay">
        <form onSubmit={handleSubmit}>
          <div className="con">
            <header className="head-form">
              <h2>Log In</h2>
              <p>login here using your username and password</p>
            </header>
            <br />
            <div className="field-set">
              <span className="input-item">
                <FaRegUserCircle></FaRegUserCircle>
              </span>
              <input
                className="form-input"
                type="text"
                placeholder="@UserName"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <br />
              <span className="input-item">
                <FaKey></FaKey>
              </span>
              <input
                className="form-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span>
                {/* <i className="fa fa-eye" aria-hidden="true" type="button" id="eye"></i> */}
                <FaEye className="fa fa-eye" aria-hidden="true" id="eye"></FaEye>
              </span>
              <br />
              <button className="log-in">Log In</button>
            </div>
            <div className="other">
              <button className="frgt-pass">Forgot Password</button>
              <button className="sign-up-btn">
                Sign Up <FaUserPlus></FaUserPlus>
                {/* Sign Up <i className="fa fa-user-plus" aria-hidden="true"></i> */}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  };

  return (
    <>
      {login.err !== null && error()}
      {login.loading === true ? (
        loadingSpinner()
      ) : (
        <LoginForm onSubmit={submit} />
      )}
    </>
  );
};

export default Login;


