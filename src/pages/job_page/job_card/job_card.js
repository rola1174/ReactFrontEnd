// JobCard.jsx
/*import React from "react";
import { Link , useNavigate } from "react-router-dom";
export const JobCard = (props) => {
    
    // Navigate programmatically using useNavigate Hook
    const navigate = useNavigate();

    return <div className="cardDesign">
      <div className="card">
        <img className="card-img-top" src="https://source.unsplash.com/random/300x200" alt="" />
        <div className="card-body">
          <h4 className="card-title">{props.title}</h4>
          <span className="card-text">{props.jobBudget} </span> -
          <span className="card-text">{props.jobType}</span>
          <Link to={'/details/' + props.id}
                    className="btn btn-success btn-block"
                >
                </Link>
                
            </div>
        </div>
    </div>
}*/


/*import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const JobCard = (props) => {
  // Navigate programmatically using useNavigate Hook
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${props.id}`);
  };

  return (
    <div className="cardDesign">
      <div className="card" onClick={handleClick}>
        
        <div className="card-body">
          <h4 className="card-title">{props.title}</h4>
          <span className="card-text">
            {props.jobBudget} - {props.jobType}
          </span>
        </div>
      </div>
    </div>
  );
};*/


/*import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const JobCard = (props) => {
  // Navigate programmatically using useNavigate Hook
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${props.id}`);
  };

  return (
    <div className="cardDesign">
      <div className="card" onClick={handleClick}>
        <div className="card-body">
          <h4 className="card-title">{props.title}</h4>
          <span className="card-text">
            {props.jobBudget} - {props.jobType}
          </span>
          <span className="card-text">
           {props.description} OneHealth is a world-class healthcare provider present in Egypt, Nigeria & expanding in Africa; offering high-quality medical services alongside a unique customer journey...
          </span>
        </div>
      </div>
    </div>
  );
};*/



/*import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const JobCard = (props) => {
  // Navigate programmatically using useNavigate Hook
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${props.id}`);
  };

  return (
    <div className="cardDesign">
      <div className="card" onClick={handleClick}>
        <div className="card-body">
          <h4 className="card-title">{props.title}</h4>
          <span className="card-text">
            {props.jobBudget} - {props.jobType}
          </span>
          {props.id == 1 ? ( // Checking if it's the first job item
            <p className="card-text">
               OneHealth is a world-class healthcare provider present in Egypt,
               Nigeria & expanding in Africa...
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};*/



/*import React from "react";
import { Link, useNavigate } from "react-router-dom";

//import { FaRegSave } from "react-icons/fa";
import "./job_card.css";

export const JobCard = (props) => {
  // Navigate programmatically using useNavigate Hook
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${props.id}`);
  };

  /*const handleApply = () => {
    // Handle apply button click
    console.log("Apply button clicked for job ID:", props.id);
  };
*
  return (
    <div className="cardDesign">
      <div className="card" onClick={handleClick}>
        <div className="card-body">
          <h4 className="card-title">{props.title}</h4>
          <span className="card-text">
            {props.jobBudget} - {props.jobType}
          </span>
          {props.id === 1 ? ( // Checking if it's the first job item
            <p className="card-text">
              OneHealth is a world-class healthcare
               provider present in Egypt,
              Nigeria & expanding in Africa...
            </p>
          ) : null}
          
        </div>
      </div>
    </div>
  );
};*/

/*import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegSave } from "react-icons/fa";
import "./job_card.css";

export const JobCard = (props) => {
  // Navigate programmatically using useNavigate Hook
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${props.id}`);
  };

  const handleApply = () => {
    // Handle apply button click
    console.log("Apply button clicked for job ID:", props.id);
  };

  const handleSave = () => {
    // Handle save button click
    console.log("Save button clicked for job ID:", props.id);
  };

  return (
    <div className="cardDesign">
      <div className="card" onClick={handleClick}>
        <div className="card-body">
          <h4 className="card-title">{props.title}</h4>
          <span className="card-text">
            {props.jobBudget} - {props.jobType}
          </span>
          {props.id === 1 ? ( // Checking if it's the first job item
            <p className="card-text">
              OneHealth is a world-class healthcare provider present in Egypt,
              Nigeria & expanding in Africa...
            </p>
          ) : null}
          <div className="card-buttons">
            <button className="apply-button" onClick={handleApply}>
              Apply
            </button>
            <button className="save-button" onClick={handleSave}>
              <FaRegSave />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};*/
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegSave, FaRegStar, FaStar } from "react-icons/fa";
import "./job_card.css";
import { ApplyForm } from "../../job-seeker/apply-form";


export const JobCard = (props) => {
  const navigate = useNavigate();
  const [showApplyForm, setShowApplyForm] = useState(false);

  const handleCardClick = () => {
    navigate(`/details/${props.id}`);
  };

  const handleApplyClick = () => {
    //setShowApplyForm(true);
    navigate(`/apply/${props.id}`);
  };

  const handleSaveClick = () => {
    console.log("Save button clicked for job ID:", props.id);
  };

  return (
    <>
      <div className="cardDesign">
        <div className="card">
          <div className="card-body" onClick={handleCardClick}>
            <h4 className="card-title">{props.title}</h4>
            <span className="card-text">
              {props.jobBudget} - {props.jobType}
            </span>
            {props.id === 1 ? (
              <p className="card-text">
                OneHealth is a world-class healthcare provider present in Egypt,
                Nigeria & expanding in Africa...
              </p>
            ) : null}
          </div>
          <div className="card-buttons">
            <button className="apply-button" onClick={handleApplyClick}>
              Apply
            </button>
            <button className="save-icon" onClick={handleSaveClick} title="Add to saved jobs">
              <FaRegSave style={{ color: "green" }} />
            </button>
          </div>
        </div>
      </div>


      <div class="courses-container">
        <div class="course">
          <div class="course-preview">
            <h6>Industry</h6>
            <h2>Company Name</h2>
            <a href="#">Post creation date<i class="fas fa-chevron-right"></i></a>
          </div>
          <div class="course-info">
            <div class="progress-container">
              <div class="progress"></div>
              <span class="progress-text">
                location
              </span>
            </div>
            <h6>Job type</h6>
            <h2>Job Title</h2>
            {/* <div className="tooltip"> */}
            <div className="star-save">
              < FaRegStar ></FaRegStar>
              {/* <span className="tooltiptext">Save Job</span> */}
            </div>
            {/* </div> */}
            <button class="btn" onClick={handleApplyClick} >Apply</button>
          </div>
        </div>
      </div>

      {/* <div class="social-panel-container">
        <div class="social-panel">
          <p>Created with <i class="fa fa-heart"></i> by
            <a target="_blank" href="https://florin-pop.com">Florin Pop</a></p>
          <button class="close-btn"><i class="fas fa-times"></i></button>
          <h4>Get in touch on</h4>
          <ul>
            <li>
              <a href="https://www.patreon.com/florinpop17" target="_blank">
                <i class="fab fa-discord"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/florinpop1705" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/florinpop17" target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/florinpop17" target="_blank">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/florinpop17" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div> */}

      {/* {showApplyForm && (
        <ApplyForm
          jobId={props.id}
          onClose={() => setShowApplyForm(false)}
        />
      )} */}
    </>
  );
};
