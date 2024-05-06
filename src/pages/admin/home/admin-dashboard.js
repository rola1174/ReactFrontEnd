import { FiTrash } from "react-icons/fi";
import { BsPencil, BsDisplay } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { getAuthToken } from "../../../services/auth";
import CreateEmployer from "./registerNewEmployer";

export const AdminDashboard = () => {
  const { token, user } = getAuthToken();

  const [search, setSearch] = useState("");
  const [addNew, setAddNew] = useState(false); // State to toggle between view mode and add new mode

  const [users, setEmployers] = useState({
    loading: false,
    result: [],
    err: null,
    update: false,
  });

  useEffect(() => {
    axios
      .get("https://localhost:7163/api/Admin/GetAllEmployers", {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
        params: {
          search: search,
        },
      })
      .then((resposne) => {
        setEmployers({ ...users, result: resposne.data, loading: false, err: null });
      })
      .catch((errors) => {
        setEmployers({ ...users, loading: false, err: [{ msg: `something went wrong` }] });
      });
  }, [users.update, search]);




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
          {users.err.map((err, index) => {
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
      {users.err !== null && error()}
      {users.loading === true ? (
        loadingSpinner()
      ) : (
        <>
          {addNew ? (
            <CreateEmployer onCancel={() => setAddNew(false)} />
          ) : (
            <div className="container h-100">
              <div className="row h-100 justify-content-center align-items-center">
                <div className="col-xl-12">
                  <div className="card mb-4">
                    <div className="card-header">Employers</div>
                    <div className="card-body" style={{ backgroundColor: "#F8F8F8" }}>
                      <div className="row mb-3">
                        <label className="small mb-1" htmlFor="name">
                          Search
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="name"
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                        />
                      </div>
                      <div className="row align-items-center">
                        <div className="col-sm-6">
                          <h5 className="card-title">
                            Employer List <span className="text-muted fw-normal ms-2">({users.result.length})</span>
                          </h5>
                        </div>
                        <div className="col-sm-6">
                          <div className="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">
                            <div>
                              <button className="btn btn-primary" onClick={() => setAddNew(true)}>
                                Add New
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="table-responsive">
                            <table className="table project-list-table table-nowrap align-middle table-borderless">
                              <thead>
                                <tr>
                                  <th scope="col">Employer Name</th>
                                  <th scope="col">Employer Email</th>
                                </tr>
                              </thead>
                              <tbody>
                                {users.result.map((user, index) => {
                                  return (
                                    <tr key={index}>
                                      <td>{user.username}</td>
                                      <td>{user.email}</td>
                                      <td>
                                        {/* <span className="badge badge-soft-success mb-0">{user.userType.role}</span> */}
                                      </td>
                                      <td>
                                        <ul className="list-inline mb-0">
                                          <li className="list-inline-item">
                                            <Link to={`/show-employer/${user.id}`} className="px-2 text-primary">
                                              <BsDisplay style={{ color: "green" }} />
                                            </Link>
                                          </li>
                                          <li className="list-inline-item">
                                            <a href="#" className="px-2 text-primary">
                                              <BsPencil style={{ color: "blue" }} />
                                            </a>
                                          </li>
                                          <li className="list-inline-item">
                                            <a
                                              onClick={() => {
                                                setEmployers({ ...users, loading: true, err: null });
                                                axios
                                                  .delete(`https://localhost:7047/api/User/${user.id}`, {
                                                    headers: {
                                                      Authorization: `Bearer ${token}`,
                                                    },
                                                  })
                                                  .then((response) => {
                                                    setEmployers({
                                                      ...users,
                                                      loading: false,
                                                      err: null,
                                                      update: !users.update,
                                                    });
                                                  })
                                                  .catch((error) => {
                                                    setEmployers({
                                                      ...users,
                                                      loading: false,
                                                      err: [{ msg: `Something went wrong` }],
                                                    });
                                                  });
                                              }}
                                              className="px-2 text-primary"
                                            >
                                              <FiTrash style={{ color: "red" }} />
                                            </a>
                                          </li>
                                        </ul>
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
      )}
    </>
  );
};