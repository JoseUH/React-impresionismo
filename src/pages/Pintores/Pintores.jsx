import React, { useContext} from "react";
import { SWContext } from "../../context/context";
import "./Pintores.scss";

const Pintores = () => {
    const { pintores } = useContext(SWContext);

  return (
    <div className='pintores'>
     
      
      {pintores.map((pintore) => (
        
        
        <div
          key={pintore._id}
          class='carta'>
          <h2 className='hover'>{pintore.nombre}</h2>
          <img src={pintore.foto} alt={pintore.nombre}></img>
          
        </div>

        
      ))}
    </div>
  )
}

export default Pintores