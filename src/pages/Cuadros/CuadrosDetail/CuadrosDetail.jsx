import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./CuadrosDetail.scss"
const CuadrosDetail = () => {

    const { id } = useParams();
    const [cuadro, setCuadro] = useState({});

    useEffect(() => {
        const getCuadroByName = async () => {
          const res = await axios.get(
            `https://node-backimpresionismo.vercel.app/cuadros/${id}`
          );
          
          setCuadro(res.data.Cuadro);
          // console.log(res.data.Cuadro)
        };
    
        getCuadroByName();
      },[]);


  return (
    <div className='detalle'>
    
    {cuadro ? (
        <div className='cuadros'>
        
          
          <img src={cuadro.imagen} alt={cuadro.titulo}  />
          
         
        </div>
      ) : null}
      </div>
  )
}

export default CuadrosDetail