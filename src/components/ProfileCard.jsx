import React from 'react'
import { useParams } from 'react-router-dom';
import userdata from '../data/db.json'

const ProfileCard = () => {
  const {userId} = useParams()
  
  const thisUser = userdata.data.filter(user => user.id == userId)

  
  return (
    <div className='ProfileCard' >
      <div className="box">
        <img src={thisUser[0].avatar} alt="" />
        <h1>{thisUser[0].fname} {thisUser[0].lname}</h1>
        <p>{thisUser[0].username}</p>
      </div>
    </div>
    
  )
}

export default ProfileCard