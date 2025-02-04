// import { useEffect, useState } from "react";
// import axios from "axios";
// import { getAuthToken } from "../../services/auth";

// export const JobSeekerDashboard = () => {
//     const { token } = getAuthToken();
//     const [search, setSearch] = useState("")
//     // location: "",
//     // industry: "",
//     // jobTitle: "",
//     // salaryRange: "",
//     // date: ""
//     const [jobs, setJobs] = useState({
//         loading: false,
//         data: [],
//         error: null
//     });

//     useEffect(() => {
//         const fetchJobs = async()=>{
//             setJobs({...jobs , loading : true});
//             try{
//                 const response = await axios
//                 .get("https://localhost:7163/api/JobSeeker/jobsWithTitleAndIndustryAndLocationAndDateAndSalary", {
                
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//                 params: {
//                     search: search,
//                 },
//             });
//                 setJobs({ ...jobs, result: resposne.data, loading: false, err: null });
//             }
//             catch(error) => {
//                 setJobs({ ...jobs, loading: false, err: [{ msg: `something went wrong` }] });
//             }] });
//         }
//     };

//     fetchJobs();
// }, [search, token]);


// const loadingSpinner = () => {
//     return (
//         <div className="container h-100">
//             <div className="row h-100 justify-content-center align-items-center">
//                 <div className="spinner-border" role="status">
//                     <span className="sr-only">Loading...</span>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const error = () => {
//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-sm-12 alert alert-danger" role="alert">
//                     {jobs.error}
//                 </div>
//             </div>
//         </div>
//     );
// };

// return (
//     <>
//         {jobs.error && error()}
//         {jobs.loading ? (
//             loadingSpinner()
//         ) : (
//             <div className="container h-100">
//                 <div className="row h-100 justify-content-center align-items-center">
//                     <div className="col-xl-12">
//                         <div className="card mb-4">
//                             <div className="card-header">Job Postings</div>
//                             <div className="card-body" style={{ backgroundColor: "#F8F8F8" }}>
//                                 <div className="row mb-3">
//                                     <label className="small mb-1" htmlFor="name">
//                                         Search (Search by industry or location or jobTitle or salaryRange or date)
//                                     </label>
//                                     <input
//                                         className="form-control"
//                                         type="text"
//                                         id="name"
//                                         value={search}
//                                         onChange={(e) => {
//                                             setSearch(e.target.value);
//                                         }}
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )}
//     </>
// );
// };

// export default JobSeekerDashboard;