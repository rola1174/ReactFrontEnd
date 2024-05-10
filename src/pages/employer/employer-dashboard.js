// import React, { useRef, useEffect, useState } from "react";
// import axios from "axios";
// import { JobPostForm } from "./JobPostForm";

// export const EmployerDashboard = () => {
//     const [jobPost, setJobPost] = useState({
//         loading: false,
//         result: {},
//         error: null,
//     });

//     const form = useRef(null);

//     const handleJobSubmit = (newJob) => {
//         // Implement your logic to handle the submission of new job ("fetching from backend")
//         console.log("New Job Submitted:", newJob);
//     };

//     const submit = (e) => {
//         e.preventDefault();
//         setJobPost({ ...jobPost, loading: true });

//         const formData = new FormData(form.current);

//         axios
//             .post("https://localhost:7163/api/JobPostForm", formData)
//             .then((response) => {
//                 setJobPost({ ...jobPost, loading: false, result: response.data });
//                 handleJobSubmit(response.data); // Call handleJobSubmit function with the new job data
//                 // Clear form fields
//                 form.current.reset();
//             })
//             .catch((error) => {
//                 setJobPost({ ...jobPost, loading: false, error: error.response.data });
//             });
//     };

//     return (
//         <div>
//             <h2>Welcome Employer</h2>
//             {jobPost.error && (
//                 <div className="alert alert-danger" role="alert">
//                     {jobPost.error}
//                 </div>
//             )}
//             <JobPostForm formRef={form} onSubmit={submit} loading={jobPost.loading} />
//         </div>
//     );
// };


import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const EmployerDashboard = () => {
  const [proposals, setProposals] = useState({
    loading: false,
    result: [],
    err: null,
    update: false,
  });

  useEffect(() => {
    axios
      .get("https://localhost:7163/api/Employer/Getallsubmittedproposals")
      .then((response) => {
        setProposals({ ...proposals, result: response.data, loading: false, err: null });
      })
      .catch((errors) => {
        setProposals({ ...proposals, loading: false, err: [{ msg: `something went wrong` }] });
      });
  }, [proposals.update]);

  const acceptProposal = (JobId, jobSeekerId) => {
    axios
      .post(`https://localhost:7163/api/Employer/AcceptProposal?jobId=${JobId}&jobSeekerId=${jobSeekerId}`)
      .then((response) => {
        setProposals({ ...proposals, update: !proposals.update });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const rejectProposal = (JobId, jobSeekerId) => {
    axios
      .post(`https://localhost:7163/api/Employer/RejectProposal?jobId=${JobId}&jobSeekerId=${jobSeekerId}`)
      .then((response) => {
        // Refresh proposals after rejecting
        setProposals({ ...proposals, update: !proposals.update });
      })
      .catch((error) => {
        console.log(error);
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
          {proposals.err.map((err, index) => {
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
      {proposals.err !== null && error()}
      {proposals.loading === true ? (
        loadingSpinner()
      ) : (
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-xl-12">
              <div className="card mb-4">
                <div className="card-header">Proposals</div>
                <div className="card-body" style={{ backgroundColor: "#F8F8F8" }}>
                  <div className="row align-items-center">
                    <div className="col-sm-6">
                      <h5 className="card-title">
                        proposal List <span className="text-muted fw-normal ms-2">({proposals.result.length})</span>
                      </h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="table-responsive">
                        <table className="table project-list-table table-nowrap align-middle table-borderless">
                          <thead>
                            <tr>
                              <th scope="col">Proposal No.</th>
                              <th scope="col">Job Id</th>
                              <th scope="col">Job Seeker Name</th>
                              <th scope="col">CV</th>
                              <th scope="col">brief description</th>
                              <th scope="col">proposal date</th>
                            </tr>
                          </thead>
                          <tbody>
                            {proposals.result.map((user, index) => {
                              return (
                                <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td>{user.jobId}</td>
                                  <td>{user.jobSeekerName}</td>
                                  <td>{user.cV_file}</td>
                                  <td>{user.brief_description}</td>
                                  <td>{user.proposal_date}</td>
                                  <td>
                                    <button onClick={() => acceptProposal(user.jobId, user.jobSeekerId)}>Accept</button>
                                    <button onClick={() => rejectProposal(user.jobId, user.jobSeekerId)}>Reject</button>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EmployerDashboard;