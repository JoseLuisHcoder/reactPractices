import React, { useEffect } from 'react'
import {useForm} from 'react-hook-form'

const FormUser = ({createUsers, updateInfo, updateInfoById, setUpdateInfo}) => {
   const {register, handleSubmit, reset} = useForm()
    useEffect(() => {
        reset(updateInfo)
    }, [updateInfo])

    const submitSendInfo = data => {
        if(updateInfo){
            //UPDATE USER INFO
            updateInfoById(updateInfo.id, data)
            setUpdateInfo()
        }else{
            //CREATE NEW USER
            createUsers(data)
        }
        reset({
            email:"",
            password:"",
            first_name:"",
            last_name:"",
            birthday:""
        }
        )
    }
    

  return (
    <form onSubmit={handleSubmit(submitSendInfo)}>
    <ul>
        <li>
            <label htmlFor="email">Email</label>
            <input {...register('email')} type="email" id="email" placeholder='email' />
        </li>
        <li>
            <label htmlFor="password">Password</label>
            <input {...register('password')} type="password" id="password" placeholder='password' />
        </li>
        <li>
            <label htmlFor="first_name">Firstname</label>
            <input {...register('first_name')} type="text" id="first_name" placeholder='firstname' />
        </li>
        <li>
            <label htmlFor="last_name">Lastname</label>
            <input {...register('last_name')} type="text" id='last_name' placeholder='lastname' />
        </li>
        <li>
            <label htmlFor="birthday">Birthday</label>
            <input {...register('birthday')} type="date" id='birthday' placeholder='birthday' />
        </li>
       
    </ul>
    
    <button >{updateInfo ? 'Update user': 'Create user'}</button>

</form>
  )
}

export default FormUser