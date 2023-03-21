import React, { useEffect } from 'react'
import {useForm} from 'react-hook-form'

const Form = ({createNewUSer, updateInfo, updateById, setUptdateInfo}) => {
    const {register, handleSubmit, reset} = useForm()
    useEffect(() => {
        reset(updateInfo)
    }, [updateInfo])
    
    const handleCreate = data => {
        if(updateInfo){
            //Update info user
            updateById(updateInfo.id, data)
            setUptdateInfo()
        } else {
            //Create user
            createNewUSer(data)
            
        }
        reset({
            first_name:"",
            last_name:"",
            email:"",
            password:"",
            birthday:""
        })
    }
    
  return (
    <form onSubmit={handleSubmit(handleCreate)} >
        <ul>
            <li>
                <label htmlFor="first_name">FirstName </label>
                <input {...register('first_name')}id = "first_name" type="text" placeholder='enter your firstname' />
            </li>
            <li>
                <label htmlFor="last_name">LasttName </label>
                <input {...register('last_name')}id = "last_name" type="text" placeholder='enter your lastname' />
            </li>
            <li>
                <label htmlFor="email">Email  </label>
                <input {...register('email')}id = "email" type="email" placeholder='enter your email' />
            </li>
            <li>
                <label htmlFor="password">Password  </label>
                <input {...register('password')}id = "password" type="password" placeholder='enter your password' />
            </li>
            <li>
                <label htmlFor="birthday">Birthday  </label>
                <input {...register('birthday')}id = "birthday" type="date" placeholder='enter your birthday' />
            </li>
        </ul>
        <button>{updateInfo ? 'Update info': 'Create user'}</button>
    </form>
  )
}

export default Form
