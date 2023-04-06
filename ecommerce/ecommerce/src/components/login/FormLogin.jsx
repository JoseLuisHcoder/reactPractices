import axios from 'axios'
import React from 'react'
import {useForm} from 'react-hook-form'


const FormLogin = () => {
   const {register, handleSubmit, reset} = useForm()
   const submit = data => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
    axios.post(url, data)
        .then(res => {
            localStorage.setItem('token', res.data.token)
        })
        .catch(err => console.log(err))
    reset({
        email:"",
        password:""
    })
   }
  return (
    <div >

    <form  onSubmit={handleSubmit(submit)}>
        <ul >
            <li ><b>Email:  </b>tarija789@gmail.com</li>
            <li ><b>Password:  </b>tarija789</li>
        </ul>
        <h3>Enter your email and password</h3>
        <ul>
            <li >
                <label  htmlFor="email">Email</label>
                <input  {...register('email')} type="email" id="email" />
            </li>
            <li >
            <label  htmlFor="password">Password</label>
                <input className='login__input' {...register('password')} type="password" id="password" />
            </li>
            {/* <div>
                {
                    isErrorLogin && 'Invalid credentials, Try again...'
                }
            </div> */}
        </ul>
        <button className='formLogin__btn'>Login</button>
    </form>
    {/* <div className='formLogin__footer'>
        <span>Don't have an account?</span>
        <button onClick={handleOpenFormUser} className='formLogin__btn__signup'>Sign up</button>
    </div> */}
</div>
      
   
  )
}

export default FormLogin
