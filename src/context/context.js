import React,{ useState, useEffect, createContext} from "react";

export const SWContext = createContext();

const BASEURL = "http://localhost:8001";

export const SWContextProvider =({ children }) => {

    const [cuadros, setCuadros] = useState([]);
    const [pintores, setPintores] = useState([]);

    
  useEffect(() => {
    
    const getCuadros = async () => {
        const cuadrosAPI = await fetch(`${BASEURL}/cuadros`);
        const cuadrosJSON = await cuadrosAPI.json();
        setCuadros(cuadrosJSON.cuadros);
        console.log(cuadrosJSON.cuadros)
        
        
        
    };
    getCuadros();
  }, []);

  useEffect(() => {
    
    const getPintores = async () => {
        const pintoresAPI = await fetch(`${BASEURL}/pintores`);
        const pintoresJSON = await pintoresAPI.json();
        setPintores(pintoresJSON.pintores);
        console.log(pintoresJSON.pintores)
        
        
        
    };
    getPintores();
  }, []);



  return (
    <SWContext.Provider value={{ cuadros, pintores }}>
      {children}
    </SWContext.Provider>
  );    
}