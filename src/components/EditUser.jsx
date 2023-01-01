import React from 'react'
import { useParams } from 'react-router-dom'
import userdata from '../data/db.json'

const EditUser = () => {
    const {userId} = useParams()
  
  const thisUser = userdata.data.filter(user => user.id == userId)
  return (
    <div>

    </div>
  )
}

export default EditUser