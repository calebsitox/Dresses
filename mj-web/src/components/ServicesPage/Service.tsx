import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import './Service.css';


function Service() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <>
      <div className="service-page">
        <div className="service-item-left">
          <h1 className="main-tittle">
            "Prendas personalizadas a medida:
            <br /> vestidos de novia, de cóctel y diseños exclusivos."
          </h1>

       <button className='cta-button' onClick={toggleDetails}>
          {showDetails ? 'Ver menos' : 'Ver más'}
        </button>

        {showDetails && (
          <p>
            Cada prenda es diseñada con atención al detalle, adaptándose a tus gustos, estilo y ocasión. 
            Utilizamos telas de alta calidad y técnicas artesanales para garantizar un acabado impecable.
          </p>
        )}

        
          <p>
            Materiales de calidad, prendas hechas a mano
            <br /> y atención al detalle para momentos inolvidables.
          </p>
        </div>
        <div className="service-item">
          <h2>Diseños únicos para cada estilo y ocasión</h2>
          <div className="flecha-abajo">↓</div>
          <div className="image-container">
            <img
              src={img4}
              alt="Servicio de diseño personalizado"
              className="service-image"
            />
          </div>
        </div>
      </div>
      <div className="service-details-section">
        <div className="container-image2">
          <img className="image2" src={img5} alt="" />
        </div>
        <div className="details">
          <h2>Vestidos de novia hechos a medida</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus dolores consectetur ut praesentium placeat, alias
            exercitationem. Placeat delectus similique commodi neque
            consequuntur, nemo quaerat nobis eos in omnis nesciunt ea?
          </p>
        </div>
      </div>
    </>
  );
}

export default Service;