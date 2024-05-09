import React from "react";
import image from "../../assets/images/logo512.png";
import { Link, useNavigate } from "react-router-dom";
import { getAuthToken, removeAuthToken } from "../../services/auth";
import 'bootstrap/dist/css/bootstrap.min.css';

export const AppHeader = () => {
  const { token, user } = getAuthToken();
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 h-10">
        <Link to={"/"} className="navbar-brand">
          <img
            src={image}
            alt="error"
            style={{ width: 30, height: 30, marginRight: 10 }}
          />
        </Link>

        <ul className="navbar-nav mr-auto">
          {user && user.role === "admin" && (
            <li className="nav-item">
              <Link to={"/admin-home"} className="nav-link">
                Home
              </Link>
            </li>
          )}

          {user && user.role === "Job Seeker" && (
            <li className="nav-item">
              <Link to={"/job-seeker"} className="nav-link">
                Home
              </Link>
            </li>
          )}
          {user && user.role === "Employer" && (
            <>
              {/* {/* <li className="nav-item">
                <Link to={"/employer"} className="nav-link">
                  Home
                </Link> 
              </li> */}
              <li className="nav-item">
                <Link to={"/employer/create-job"} className="nav-link">
                  Create Job Post
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Messaging Button Design
        {user && (
          <Link to={"/communication"} className="nav-link messaging-button">
            Messaging
          </Link>
        )} */}

        <ul className="navbar-nav ml-auto">
          {!token && (
            <>
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Register
                </Link>
              </li>


              {/* <li className="nav-item">
                <Link to={"/employer/create-job"} className="nav-link">
                  create job post
                </Link>
              </li> */}
            </>
          )}



          {token && user && user.role === "employer" && (
            <li className="nav-item">
              <Link to={"employer/create-job"} className="nav-link">
                Create Job Post
              </Link>
            </li>
          )}
          {token && (
            <li
              style={{ cursor: "pointer" }}
              onClick={() => {
                removeAuthToken();
                navigate("/login");
              }}
              className="nav-item"
            >
              <span className="nav-link">Logout</span>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};
