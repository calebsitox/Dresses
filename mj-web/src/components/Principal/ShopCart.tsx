// ShopCart.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Badge from '@mui/material/Badge';
import './ShopCart.css';
// import { useCart } from '../context/CartContext'; // Lo haremos en el siguiente paso

interface ShopCartProps {
    // Para simplificar, asumimos que recibimos el conteo por ahora
    totalItems: number; 
}

const ShopCart: React.FC<ShopCartProps> = ({ totalItems }) => {
    
    // La ruta '/cart' te llevará a la vista completa del carrito
    return (
        <Link to="/cart" className="shopcart-link">
            {/* 🔑 Este contenedor permite posicionar el contador de forma absoluta */}
            <div className="shopcart-icon-container">
                
                {/* Ícono de Carrito (usando un emoji o un componente SVG/Font Awesome) */}
                <Badge badgeContent={totalItems} color="error">
                <ShoppingCartIcon className="cart-icon" role="img" aria-label="Carrito de compras"></ShoppingCartIcon>
                </Badge>
                {/* Contador de Artículos (Badge) */}

            </div>
            <span className="cart-text"></span>
        </Link>
    );
};

export default ShopCart;