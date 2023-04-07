import React from 'react'
import { useNavigate } from 'react-router-dom'

const UsersInfo = ({user, deleteUserById, setUpdateUserId}) => {
  const navigate = useNavigate()
  const handleNavigateUserInfo = () => navigate(`/userinfo/${user.id}`)
    
  return (
    <div className='card__user' >
    <ul>
     <li><span>Nombre: </span> {user.firstName} {user.lastName}</li>
     <li>Email: {user.email}</li>
     <li>Phone: {user.phone}</li>
    </ul>
    <button onClick={() => setUpdateUserId(user)} >Edit Info</button>
    <button onClick={() => deleteUserById(user.id)} >Delete</button>
    <button onClick={handleNavigateUserInfo} >View Info User</button>
 </div>
  )
}

export default UsersInfo
