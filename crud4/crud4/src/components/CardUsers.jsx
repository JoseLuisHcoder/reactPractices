import React from 'react'

const CardUsers = ({user, deleteById, setUptdateInfo}) => {
    return(
        <div>
           <ul>
            <li><span>Nombre: </span> {user.firstName} {user.lastName}</li>
            <li>Email: {user.email}</li>
            <li>Birthday: {user.birthday}</li>
           </ul>
           <button onClick={() => setUptdateInfo(user)} >Edit Info</button>
           <button onClick={() => deleteById(user.id)} >Delete</button>
        </div>
    )
}
export default CardUsers