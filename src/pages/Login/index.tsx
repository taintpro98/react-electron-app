// import React, { FormEventHandler, useState } from "react";
import axios from "axios";
import { useForm } from "../../components";
import { baseURL } from "../../configs/axios";

function Login() {
  const initialState = {
    email: "",
    password: "",
  };

  const login = async () => {
    const response = await axios.post(`${baseURL}/login`, {
      username: 'bruno',
      password: '1234'
    })
    console.log(response);
  };

  const { onChange, onSubmit, values } = useForm(login, initialState);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Email"
            onChange={onChange}
            required
          />
          <br />

          <input
            name="password"
            id="password"
            type="password"
            placeholder="Password"
            onChange={onChange}
            required
          />
          <br />
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
