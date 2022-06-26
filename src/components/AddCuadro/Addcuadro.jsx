import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../../services/api";
import "./AddCuadro.scss"
const AddCuadro = () => {
 
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (formData) => {
    API.post("cuadros/", formData).then((res) => {
      console.log(res);
    });
    navigate("/login");
  };

  return (
    <div className="coleccion">
    <h2>Registro de nuevos cuadros</h2>
    <p>Rellene el formulario para registrar un nuevo cuadro</p>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="titulo">titulo:</label>
      <input
        type="text"
        id="titulo"
        {...register("titulo", { required: true })}
      />
      <label htmlFor="imagen">imagen:</label>
      <input
        type="text"
        id="imagen"
        {...register("imagen", { required: true })}
      />
      <button type="submit">Añadir</button>
    </form>
   
    </div>
  );
};

export default AddCuadro;
