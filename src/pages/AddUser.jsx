import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    fname: "",
    lname: "",
    username: "",
    avatar:""
  });

  const { fname, username, lname, avatar } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/data", user);
    navigate("/admin");
  };
  function onChange(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      // The file's text will be printed here
      console.log(e.target.result)
    };
  
    reader.readAsText(file);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Fname" className="form-label">
                FirstName
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your firstname..."
                name="fname"
                value={fname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="LastName" className="form-label">
                LastName
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your lastname..."
                name="lname"
                value={lname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username..."
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Avatar" className="form-label">
                Avatar
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Link of the photo..."
                name="avatar"
                value={avatar}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/admin">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}