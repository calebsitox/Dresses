import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Service.css';


function Service() {    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    }; 
    return (
        <div className="service-page">
            <h1>Servicios</h1>
            <div className="service-item">
                <h2>Ofrecemos una gran variedad de productos</h2>
                <p>Desde vestidos de fiesta hasta ropa casual, tenemos algo para cada ocasión.</p>
                <button onClick={toggleDetails}>
                    {showDetails ? 'Ocultar detalles' : 'Ver más detalles'}
                </button>
                {showDetails && (
                    <div className="service-details">
                        <p>Nuestros productos están hechos con materiales de alta calidad y diseñados para brindar comodidad y estilo.</p>
                        <p>Además, ofrecemos servicios personalizados para adaptarnos a tus necesidades.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Service;