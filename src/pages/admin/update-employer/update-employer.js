import { useRef, useEffect, useState } from "react";
import axios from "axios";
import { getAuthToken } from "../../../services/auth";
import { useParams } from "react-router-dom";

export const UpdateEmployer = () => {
  const { id } = useParams();
  const { token, user } = getAuthToken();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [campanyName, setCompanyName] = useState("");
  const [campanyDescription, setCampanyDescription] = useState("");
  const [mainaddress, setMainAdress] = useState("");

  const [specificUser, setSpecificUser] = useState({
    loading: true,
    result: {},
    err: null,
  });

  const [updateEmployer, setUpdateEmployer] = useState({
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

  useEffect(() => {
    axios
      .get(`https://localhost:7163/api/Admin/GetEmployerById/${id}`, {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      })
      .then((response) => {
        setSpecificUser({ ...specificUser, result: response.data, loading: false, err: null });
        setUsername(response.data.username);
        setEmail(response.data.email);
        setCompanyName(response.data.company_name);
        setCampanyDescription(response.data.company_description);
        setMainAdress(response.data.mainaddress);
      })
      .catch((error) => {
        setSpecificUser({
          ...specificUser,
          result: {
            Username: "",
            Password: "",
            Email: "",
            Company_name: "",
            Company_description: "",
            Mainaddress: "",
          },
          loading: false,
          err: [{ msg: `Something went wrong` }],
        });
      });
  }, []);

  const submit = (e) => {
    e.preventDefault();
    setUpdateEmployer({ ...updateEmployer, loading: true });

    axios
      .put(`https://localhost:7163/api/Admin/UpdateEmployer/${id}`, {
        username: form.current.username.value,
        password: form.current.password.value,
        email: form.current.email.value,
        company_name: form.current.company_name.value,
        company_description: form.current.company_description.value,
        mainaddress: form.current.mainaddress.value,
      })
      .then((response) => {
        setUpdateEmployer({ ...updateEmployer, loading: false, result: response.data });
      })
      .catch((error) => {
        setUpdateEmployer({ ...updateEmployer, loading: false, err: error.response.data });
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
          {specificUser.err.map((err, index) => {
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
      {specificUser.err !== null && error()}
      {specificUser.loading === true ? (
        loadingSpinner()
      ) : (
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-xl-12">
              <div className="card mb-4">
                <div className="card-header">Update Account Info</div>
                <div className="card-body">
                  {updateEmployer.result && Object.keys(updateEmployer.result).length > 0 && (
                    <div className="alert alert-success" role="alert">
                      Employer Updated successfully!
                    </div>
                  )}
                  <form onSubmit={(e) => submit(e)}>
                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="Username">UserName</label>
                      <input className="form-control" type="text" id="Username" value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        ref={(val) => {
                          form.current.username = val;
                        }}
                        required />
                    </div>
                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="email">Email address</label>
                      <input className="form-control" type="email" id="email" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        ref={(val) => {
                          form.current.email = val;
                        }}
                        required />
                    </div>

                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="password">New Password</label>
                      <input className="form-control" type="password" id="password"
                        ref={(val) => {
                          form.current.password = val;
                        }}
                        required />
                    </div>

                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="Company_name">Company_name</label>
                      <input className="form-control" type="text" id="Company_name" value={campanyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        ref={(val) => {
                          form.current.company_name = val;
                        }}
                        required />
                    </div>

                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="Company_description">Company_description</label>
                      <input className="form-control" type="text" id="Company_description" value={campanyDescription}
                        onChange={(e) => setCampanyDescription(e.target.value)}
                        ref={(val) => {
                          form.current.company_description = val;
                        }}
                        required />
                    </div>

                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="Mainaddress">Mainaddress</label>
                      <input className="form-control" type="text" id="Mainaddress" value={mainaddress}
                        onChange={(e) => setMainAdress(e.target.value)}
                        ref={(val) => {
                          form.current.mainaddress = val;
                        }}
                        required />
                    </div>
                    <button className="btn btn-primary" type="submit">{specificUser.loading ? "Updating..." : "Update Employer"}</button>
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
