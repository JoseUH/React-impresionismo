import React from 'react'
import "./Footer.scss"
const Footer = () => {
  return (
    <div>
        <img className='madrid'
  src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Wv_Madrid_centro_banner.jpg"
  alt=""
/>
<footer>
  <section className='redes'>
    <ul>
      <li>
        <a href="https://twitter.com/?lang=es"
          ><img className='icono'
            src="https://cdn-icons-png.flaticon.com/512/60/60580.png" alt="twitter"
        /></a>
      </li>
      <li>
        <a href="https://es-es.facebook.com/"
          ><img className='icono'
            src="https://iconape.com/wp-content/files/bl/4244/svg/-%D8%A8%D9%88%D9%83-facebook-logo-icon-png-svg.png" alt="face"
        /></a>
      </li>
      <li>
        <a href="https://www.instagram.com/"
          ><img class="invert"
            src="https://www.pngkey.com/png/full/1-19361_watercolor-instagram-icon-png-instagram-logo-white-on.png" alt="insta"
        /></a>
      </li>
    </ul>
  </section>
  <section className='horario'>
    <h2>Abierto</h2>
    <p>De lunes a sábado de 10.00 a 20.00 h</p>
    <p>Domingos y festivos de 10.00 a 19.00 h</p>
    <h2>Cerrado</h2>
    <p>1 de enero</p>
    <p>1 de mayo</p>
    <p>25 de diciembre</p>
    <h2>Horario reducido</h2>
    <p>6 de enero</p>
    <p>24 y 31 de diciembre</p>
    <p>De 10.00 a 14.00 h</p>
    <h2>Horario gratuito</h2>
    <p>De lunes a sábado de 18.00 a 20.00 h</p>
    <p>Domingos y festivos de 17.00 a 19.00 h</p>
  </section>
  <section className="gobierno">
    <a href="http://www.mcu.es/">
      <img
        alt="Gobierno de España - Ministerio de Cultura y Deporte"
        src="https://content3.cdnprado.net/imagenes/proyectos/personalizacion/7317a29a-d846-4c54-9034-6a114c3658fe/ElPrado/img/svg/logo_cultura.svg"
      />
    </a>
  </section>
  <section className="exposiciones">
      <h2>Exposiciones actuales</h2>
      <ul>
        <li>
          <img
            src="https://www.todocuadros.es/imagenes/artistas/foto-claude-monet.jpg"
            alt=""
          />
          <h3>Vida y Obra. Claude Monet  </h3>
          
        </li>
        <li>
            <img
            src="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRZRwjkspDM4g0_cTSr97QRLSFhYfmTgPLdYoCJ_f9XauN_ZJcsitVT0Kchilx5GPde"
            alt=""
          />
          <h3>Impresionismo. Camille Pissarro</h3>
          
        </li>
        
      </ul>
  </section>
</footer>

    </div>
  )
}

export default Footer