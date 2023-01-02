import React from 'react'
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminHome = () => {
  const [users,setUsers] = useState([]);

  useEffect(() =>{
   
      getUsers();
  },[])
  const getUsers= async () =>{

    await axios
     .get('http://localhost:8000/data')
     .then((res) => setUsers(res.data))
     .catch((err) => console.log(err));
     
   }

    
    
    
  return (
    <div className='container mt-2'> 
        <Link to='/adduser' className='btn btn-success'>Add User</Link>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Image</th>
                <th scope="col">FullName</th>
                <th scope="col">Username</th>
                <th scope="col">Edit</th>

                </tr>
            </thead>
            <tbody>
                {
                   users.map( user => {
                        return(
                            <tr key={user.id}>
                            <td>{user.id}</td>
                            <td className='pp'>
                                <img src={user.avatar} alt="..." />
                            </td>
                            <td>{user.fname} {user.lname}</td>
                            <td>{user.username}</td>
                            <td>
                                <button onClick={async () =>{
                                    await axios.delete(`http://localhost:8000/data/${user.id}`)
                                        getUsers();}}
                                className='btn btn-danger'><RiDeleteBin2Fill /> Delete</button>
                             <Link to={`/edit/${user.id}`} className='btn btn-warning ms-2'><RiDeleteBin2Fill /> Edit</Link>
                            </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default AdminHome