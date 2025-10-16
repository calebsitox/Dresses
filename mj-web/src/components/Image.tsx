import './Image.css'
import videoSource from '../assets/video1.mp4';

function Image(){

    return (
      <>
        <div className="hero-container">
          {/* 1. Video de Fondo */}
          <video className="video-background" autoPlay loop muted>
            {/* REEMPLAZA ESTA RUTA CON LA RUTA A TU VIDEO */}
            <source src={videoSource} type="video/mp4" />
            Tu navegador no soporta el tag de video.
          </video>

          {/* 2. Contenido Superpuesto */}
          <div className="hero-content">
            {/* Título en la parte superior-central */}
            <h1 className="hero-title">
              Descubre Moda Artesanal y de Alta Costura Online
            </h1>
            <h2 className="hero-subtittle">
              Piezas únicas de diseño atemporal. Explora nuestra colección
              exclusiva de prendas hechas a mano con materiales sostenibles.
              Envío rápido en España.
            </h2>
            {/* Botón Llamativo en el medio */}
            <a href="#cta" className="hero-button">
              VER COLECCIÓN EXCLUSIVA
            </a>
          </div>

          {/* 3. Barra de Indicador de Scroll */}
          <div className="scroll-indicator-bar">
            <p className="scroll-text">Continúa Abajo</p>
            <div className="arrow-down"></div>
          </div>
        </div>
      </>
    );

}

export default Image;