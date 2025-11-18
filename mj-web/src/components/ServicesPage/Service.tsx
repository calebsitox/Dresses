import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img6 from '../../assets/img6.jpg';
import img7 from '../../assets/img7.jpg';
import img5 from '../../assets/img5.jpg';
import img9 from '../../assets/img9.jpg';
import './Service.css';


function Service() {
  const [showDetails, setShowDetails] = useState(false);

  const items = [
  { src: img5, label: 'Vestidos de novia' },
  { src: img6, label: 'Vestidos de cóctel' },
  { src: img7, label: 'Diseños exclusivos' },
];

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <>
      <div className="service-page" style={{ 
        backgroundImage: `url(${img9})`}}>

        <div className={`service-item-left ${showDetails ? "show" : ""}`}>
          <h1 className="main-title">
            Prendas personalizadas a medida:
            <br /> Hacemos realidad el vestido de tus sueños.
          </h1>

          <button
            className="cta-button"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Ver menos" : "Ver más"}
          </button>

          {showDetails && (
            <p className="animated-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia non
              eligendi nobis. Quis fuga quaerat, illo nemo excepturi unde alias
              earum dolores porro ipsum iusto, aliquam qui, esse laudantium!
              Iusto!
            </p>
          )}

          <p className="highlight-paragraph">
            Materiales de calidad, prendas hechas a mano
            <br /> y atención al detalle para momentos inolvidables.
          </p>
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

          <div className="flecha-abajo">↓</div>
          <h2>Diseño Personalizado</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus dolores consectetur ut praesentium placeat, alias
            exercitationem. Placeat delectus similique commodi neque
            consequuntur, nemo quaerat nobis eos in omnis nesciunt ea?
          </p>
          <div className="flecha-abajo">↓</div>
          <h2>Reparación y Restauración</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus dolores consectetur ut praesentium placeat, alias
            exercitationem. Placeat delectus similique commodi neque
            consequuntur, nemo quaerat nobis eos in omnis nesciunt ea?
          </p>
        </div>
      </div>

      <section className="gallery">
        {items.map((item, index) => (
          <div className="gallery-item" key={index}>
            <img src={item.src} alt={item.label} />
            <div className="overlay">
              <span>{item.label}</span>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Service;