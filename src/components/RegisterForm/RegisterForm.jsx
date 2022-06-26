import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../../services/api";
import "./RegisterForm.scss"
const RegisterForm = () => {
 
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (formData) => {
    API.post("users/register", formData).then((res) => {
      console.log(res);
    });
    navigate("/login");
  };

  return (
    <div className="registro">
    <h2>Registro de nuevos usuarios</h2>
    <p>Rellene el formulario para crear un nuevo usuario y darle acceso a crear nuevas colecciones</p>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        {...register("username", { required: true })}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        {...register("password", { required: true })}
      />
      <label htmlFor="emoji">Emoji:</label>
      <select
        name="emoji"
        id="emoji"
        {...register("emoji", { required: true })}
      >
        <option value="💀">💀</option>
        <option value="🌙">🌙</option>
        <option value="🐖">🐖</option>
        <option value="🥜">🥜</option>
      </select>
      <button type="submit">Registrar</button>
    </form>
    </div>
  );
};

export default RegisterForm;
