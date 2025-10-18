import React from 'react';
import "./Card.css"
// Define las propiedades que la tarjeta recibirá
interface ProductCardProps {
    imageUrl: string;
    title: string;
    price: string;
    linkUrl: string; // Para el botón 'Ver Producto'
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title, price, linkUrl }) => {
    // Nota: Es mejor usar <Link to={linkUrl}> en lugar de <a href={linkUrl}>
    // para mantener la navegación de React Router.
    return (
        <a href={linkUrl} className="product-card"> 
            
            {/* 1. Imagen */}
            <div className="product-image-wrapper" > 
                <img src={imageUrl} alt={title} className="product-image" />
            </div>

            {/* 2. Detalles (Contiene título y precio) */}
            <div className="product-details" >
                <h3 className="product-title" >{title}</h3>
                <p className="product-price" >{price}</p>
            </div>

            {/* 3. Botón/CTA */}
            <button className="product-cta-button">
                Ver Producto
            </button>
            
        </a>
    );
};

export default ProductCard;


