import React, { useContext } from "react";
import "./Navigator.scss";
import { Link } from "react-router-dom";
import ButtonLogout from "../ButtonLogout"
import { JwtContext } from "../../context/jwtContext";
const Navigator = () => {

  const { jwt } = useContext(JwtContext);

  // const userEmoji = localStorage.getItem("user");

  return (
    <nav >
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
              <Link to="/register">Registro</Link>
            </li>
            <li>
          <Link to="/add">Add</Link>
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
        {/* {userEmoji != undefined && alert ("Bienvenido")} */}
      </ul>
    </nav>
  );
};

export default Navigator;
