import * as React from 'react';
import { useState } from 'react';

import { Link } from 'react-router-dom';

const HomePage = (props) => {
    const [value,setValue] = useState('')

    const filteredUsers = props && props.userList.filter(data => data.fname.toLowerCase().includes(value.toLowerCase()))

    const InputHandler = (e) =>{
        setValue(e.target.value)
    }   
    
   
  return (
    <div className='container mt-2'>
        <div className="row ">
        <input onChange={InputHandler} type="text" placeholder='Search...' className='form-control w-50 mx-auto mt-3 my-3'/>

        <table className="table table-striped align-items-center">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Image</th>
                <th scope="col">FullName</th>
                <th scope="col">Username</th>
                <th scope="col">Details</th>
                </tr>
            </thead>
            <tbody>
                {
                    filteredUsers.map( user => {
                        return(
                            <tr key={user.id}>
                            <td>{user.id}</td>
                            <td className='pp'>
                                <img src={user.avatar} alt="..." />
                            </td>
                            <td>{user.fname} {user.lname}</td>
                            <td>{user.username}</td>
                            <td>                                                          
                            <Link className='btn btn-primary' to={`/details/${user.id}`}>Detail</Link>                 
                            </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div> 
    </div>
  )
}

export default HomePage