import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../context/jwtContext";

const ButtonLogout = () => {
  const { setJwt } = useContext(JwtContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setJwt(null);
    navigate("/login");
  };
  return <button onClick={logout}>Logout</button>;
};

export default ButtonLogout;
