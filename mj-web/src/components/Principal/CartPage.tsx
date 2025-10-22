// CartPage.tsx

import React from 'react';
import { useCart } from './CartContext'; // Asegúrate de la ruta correcta
import { Link } from 'react-router-dom';
import './CartPage.css';

const CartPage: React.FC = () => {
    // 🔑 Obtener los datos del estado global
    const { items, totalItems,  } = useCart();
    // Nota: Asumimos que updateQuantity, removeItem y calculateTotals existen en tu Context.
    // const { updateQuantity, removeItem, calculateTotals } = useCart();

    // Si el carrito está vacío, muestra un mensaje amigable
    if (items.length === 0) {
        return (
            <div className="cart-empty-state">
                <h2>Tu carrito está vacío 🙁</h2>
                <p>Parece que aún no has añadido nada. ¡Explora nuestra colección!</p>
                <Link to="/" className="continue-shopping-button">Seguir Comprando</Link>
            </div>
        );
    }

    // 🚧 Nota: Aquí llamaríamos a calculateTotals para obtener el subtotal/total
    const subtotal = 199.98; // Simulado
    const total = 205.98;    // Simulado

    return (
        <main className="cart-page-wrapper">
            <h1>Tu Carrito ({totalItems} {totalItems === 1 ? 'Artículo' : 'Artículos'})</h1>
            
            <div className="cart-layout">
                
                {/* 1. COLUMNA IZQUIERDA: Lista de Productos */}
                <div className="cart-items-list">
                    {items.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={`/images/${item.id}.jpg`} alt={item.title} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3 className="item-title">{item.title}</h3>
                                <p className="item-price">€{item.price.toFixed(2)}</p>
                                
                                <div className="item-controls">
                                    {/* Control de Cantidad (Aquí llamarías a updateQuantity) */}
                                    <input 
                                        type="number" 
                                        min="1" 
                                        value={item.quantity} 
                                        // onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                                        className="quantity-input-cart"
                                    />
                                    {/* Botón de Eliminar (Aquí llamarías a removeItem) */}
                                    <button 
                                        // onClick={() => removeItem(item.id)} 
                                        className="remove-item-button"
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                            <div className="item-subtotal">
                                €{(item.price * item.quantity).toFixed(2)}
                            </div>
                        </div>
                    ))}
                </div>

                {/* 2. COLUMNA DERECHA: Resumen del Pedido */}
                <aside className="order-summary-box">
                    <h2>Resumen del Pedido</h2>
                    <div className="summary-row">
                        <span>Subtotal ({totalItems} productos)</span>
                        <span>€{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                        <span>Envío Estimado</span>
                        <span>€6.00</span>
                    </div>
                    <div className="summary-total-row">
                        <strong>Total Estimado</strong>
                        <strong>€{total.toFixed(2)}</strong>
                    </div>
                    
                    <button className="checkout-button">
                        Proceder al Pago
                    </button>
                </aside>
            </div>
        </main>
    );
};

export default CartPage;