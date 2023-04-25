import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const FormLogin = () => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    const url = "https://barber-nocountry.onrender.com/api/v1/auth/login";
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data.tokenGenerated);
        // localStorage.setItem("token", res.data.token);
        localStorage.setItem("token", res.data.tokenGenerated);
      })
      .catch((err) => console.log(err));

    reset({
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="">Email</label>
          <input
            {...register("email")}
            type="email"
            id="email"
            placeholder="Ingresa tu email"
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            {...register("password")}
            type="password"
            id="password"
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default FormLogin;
