import React, { useContext } from "react";
import "./Navigator.scss";
import { Link } from "react-router-dom";
import ButtonLogout from "../ButtonLogout"
import { JwtContext } from "../../context/jwtContext";
const Navigator = () => {
  //Recuperamos la variable de estado a través del contexto
  const { jwt } = useContext(JwtContext);

  const userEmoji = localStorage.getItem("user");

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pintores">Pintores</Link>
        </li>
        <li>
          <Link to="/cuadros">Cuadros</Link>
        </li>
        {jwt && (
          <>
           <li> 
              <Link to="/register">Register</Link>
            </li>
            <li>
              <ButtonLogout />
            </li>
          </>
        )}
        {jwt === null && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
           
          </>
        )}
        {userEmoji != undefined && (<li>Bienvenido {userEmoji}</li>)}
      </ul>
    </nav>
  );
};

export default Navigator;
