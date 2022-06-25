import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../context/jwtContext";
import { API } from "../services/api";
const LoginForm = () => {
  const { setJwt } = useContext(JwtContext);
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (formData) => {
    API.post("users/login", formData).then((res) => {
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("user", res.data.data.user.emoji);
      setJwt(localStorage.getItem("token"));
      navigate("/");
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        {...register("email", { required: true })}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        {...register("password", { required: true })}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
