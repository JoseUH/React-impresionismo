import React, { useContext } from "react";
import "./Navigator.scss";
import { Link } from "react-router-dom";
import ButtonLogout from "../ButtonLogout"
import { JwtContext } from "../../context/jwtContext";
const Navigator = () => {

  const { jwt } = useContext(JwtContext);

  // const userEmoji = localStorage.getItem("user");

  return (
    
    <nav className="top-nav">
     <h2 className="logo">
      Museo del impresionismo
    </h2>
    <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' for="menu-toggle">
    <div className='menu-button'></div>
  </label>
      <ul className="menu">
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
