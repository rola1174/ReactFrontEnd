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
import { FaRegSave } from "react-icons/fa";
import "./job_card.css";
import { ApplyForm } from "../../job-seeker/apply-form";


export const JobCard = (props) => {
  const navigate = useNavigate();
  const [showApplyForm, setShowApplyForm] = useState(false);

  const handleCardClick = () => {
    navigate(`/details/${props.id}`);
  };

  const handleApplyClick = () => {
    setShowApplyForm(true);
  };

  const handleSaveClick = () => {
    console.log("Save button clicked for job ID:", props.id);
  };

  return (
    <div className="cardDesign">
      <div className="card" onClick={handleCardClick}>
        <div className="card-body">
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
      </div>
      <div className="card-buttons">
        <button className="apply-button" onClick={handleApplyClick}>
          Apply
        </button>
        <button className="save-button" onClick={handleSaveClick}>
          <FaRegSave />
        </button>
      </div>
      {showApplyForm && (
        <ApplyForm
          jobId={props.id}
          onClose={() => setShowApplyForm(false)}
        />
      )}
    </div>
  );
};
