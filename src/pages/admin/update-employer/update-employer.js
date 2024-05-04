
export const UpdateEmployer = () => {
  return (
    <>
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-xl-12">
            <div className="card mb-4">
              <div className="card-header">Update Account Info</div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="Username">
                      UserName
                    </label>
                    <input className="form-control" type="text" id="Username" />
                  </div>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="role">
                        Role
                      </label>
                      <select className="form-control" type="text" id="role">
                        <option>Select an Item</option>
                      </select>
                    </div>
                    </div>
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="email">
                      Email address
                    </label>
                    <input className="form-control" type="email" id="email" />
                  </div>

                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="Company_name">
                    Company_name
                    </label>
                    <input className="form-control" type="text" id="Company_name" />
                  </div>

                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="Company_description">
                    Company_description
                    </label>
                    <input className="form-control" type="text" id="Company_description" />
                  </div>

                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="Mainaddress">
                    Mainaddress
                    </label>
                    <input className="form-control" type="text" id="Mainaddress" />
                  </div>

                  <button className="btn btn-primary" type="button">
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
