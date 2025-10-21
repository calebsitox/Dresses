import React from 'react';
import { Link } from 'react-router-dom'; // 👈 Importar Link
import "./Card.css"
// Define las propiedades que la tarjeta recibirá
interface ProductCardProps {
    id: number
    imageUrl: string;
    title: string;
    price: string;
    linkUrl: string; // Para el botón 'Ver Producto'
}

const ProductCard: React.FC<ProductCardProps> = ({id, imageUrl, title, price }) => {
    // Nota: Es mejor usar <Link to={linkUrl}> en lugar de <a href={linkUrl}>
    // para mantener la navegación de React Router.
    const productDetailPath = `/producto/${id}`;
    return (
        <Link to={productDetailPath} className="product-card"> 
            
            {/* 1. Imagen */}
            <div className="product-image-wrapper" > 
                <img src={imageUrl} alt={title} className="product-image" />
            </div>

            {/* 2. Detalles (Contiene título y precio) */}
            <div className="card-details" >
                <h3 className="card-title" >{title}</h3>
                <p className="card-price" >{price}</p>
            </div>

            {/* 3. Botón/CTA */}
            
            <button className="product-cta-button">
                Ver Producto
            </button>
            
        </Link>
    );
};

export default ProductCard;


