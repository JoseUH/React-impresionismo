import React, { useContext, useState} from "react";
import { SWContext } from "../../context/context";
import "./Cuadros.scss";
import { Link } from "react-router-dom";

const Cuadros = () => {
    const { cuadros } = useContext(SWContext);
  const [H2, setH2] = useState();

  return (
    <div className='cuadros'>
    
     

      {cuadros.map((cuadro) => (
        
        <Link key={cuadro._id} to={`${cuadro._id}` }>
        <div
         onMouseOver={() => setH2(cuadro.titulo)}
          key={cuadro._id}
          class='carta'>
          <h2 className='hover'>{H2}</h2>
          <img src={cuadro.imagen} alt={cuadro.titulo}></img>
          
        </div>
        </Link>

        
      ))}
    </div>
  )
}

export default Cuadros