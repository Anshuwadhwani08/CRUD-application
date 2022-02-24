import React, { useState } from "react";
import { adduser } from "../service/api";
import { Link } from "react-router-dom";

const initialvalue = {
  key: "",
  value: "",
};

export default function Adduser() {
  const [user, setuser] = useState(initialvalue);
  const { key, value } = user;
  //  //let history = useHistory();

  const onValueChange = (e) => {
    console.log(e.target.value);
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const adduserdetail = async () => {
    await adduser(user);
  };

  return (
    <main className="container mt-5">
      <div>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Enter Key
            </label>
            <input
              onChange={(e) => onValueChange(e)}
              name="key"
              value={key}
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Enter Value
            </label>
            <input
              onChange={(e) => onValueChange(e)}
              name="value"
              value={value}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <Link to={`/`}>
            {
              <button
                onClick={() => adduserdetail()}
                type="submit"
                className="btn btn-primary"
              >
                Add
              </button>
            }
          </Link>
        </form>
      </div>
    </main>
  );
}
