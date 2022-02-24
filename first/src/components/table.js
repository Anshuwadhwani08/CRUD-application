import React from "react";
import { getusers, deleteuser } from "../service/api";
import { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";

export default function Table() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    getall();
  }, []);

  const getall = async () => {
    const response = await getusers();
    console.log(response.data);
    setusers(response.data);
  };
  const deleteuserdata = async (id) => {
    await deleteuser(id);
    getall();
  };
  return (
    <Fragment>
      <main className="container mt-5">
        <div className="Post">
          <div className="row">
            <div className="col-4 p-3">
              <h3>key</h3>
            </div>
            <div className="col-3 p-3">
              <h2>Value</h2>
            </div>
            <div className="col-2 p-3">
              <h2> Actions</h2>
            </div>
          </div>

          {users.map((user) => {
            return (
              <>
                <div className="row">
                  <div className="col-4 p-3">{user.key}</div>
                  <div className="col-3 p-3">{user.value}</div>
                  <div className="col-2">
                    <div className="p-3">
                      <Link to={`/edit/${user.id}`}>
                        <button type="button" className="btn btn-primary">
                          View
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="col-1 p-3">
                    <button
                      onClick={() => deleteuserdata(user.id)}
                      type="button"
                      className="btn btn-primary"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </main>
    </Fragment>
  );
}
