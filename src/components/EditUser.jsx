import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

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

  useEffect(() => {
    loadUser();
  },[]);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/data/${id}`, user);
    navigate("/adminhome");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8000/data/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>

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
            <button type="submit" className="btn btn-outline-primary" to="/adminhome">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/adminhome">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}