import React, { useState, useEffect, Fragment } from "react";
import { edituser } from "../service/api";
import { useParams, Link } from "react-router-dom";
import { getusers } from "../service/api";

const initialvalue = {
  key: "",
  value: "",
};

export default function Edituser() {
  const [user, setuser] = useState(initialvalue);
  const { key, value } = user;
  const { id } = useParams();

  useEffect(() => {
    loaduserdata();
  }, []);

  const loaduserdata = async () => {
    const response = await getusers(id);
    setuser(response.data);
  };

  const onvaluechange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const [open, setOpen] = React.useState(false);

  const openmodal = () => {
    setOpen(true);
  };

  const edituserdetail = async () => {
    await edituser(id, user);
    
  };

  return (
    <Fragment>
      <modal>
        <main className="container mt-5">
          <div>
            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Enter Key
                </label>
                <input
                  onChange={(e) => onvaluechange(e)}
                  name="key"
                  value={key}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Enter Value
                </label>
                <input
                  onChange={(e) => onvaluechange(e)}
                  name="value"
                  value={value}
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              {
                <Link to={`/`}>
                  <button
                    style={{ marginRight: 10 }}
                    onClick={() => edituserdetail()}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Edit
                  </button>
                </Link>
              }
              {
                <Link to={`/`}>
                  <button type="button" class="btn btn-primary">
                    Cancel
                  </button>
                </Link>
              }
            </form>
          </div>
        </main>
      </modal>
    </Fragment>
  );
}
