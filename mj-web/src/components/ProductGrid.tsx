
import React from 'react';
import ProductCard from './Cards/Card'; 
import "./Cards/Card.css"

// Definición de la interfaz de datos
interface Product {
  title: string;
  price: string;
  imageUrl: string;
  linkUrl: string;
}

// Array de datos de productos (con tus ejemplos completados)
const products: Product[] = [
  // 1. Vestido de ejemplo
  { 
    title: "Vestido Orgánico Luna", 
    price: "€149.99", 
    imageUrl: "/images/vestido-luna.jpg", 
    linkUrl: "/producto/vestido-luna" 
  },
  
  // 2. Camisa de ejemplo
  { 
    title: "Camisa Lino Clásica", 
    price: "€89.99", 
    imageUrl: "/images/camisa-lino.jpg", 
    linkUrl: "/producto/camisa-lino" 
  },
  
  // 3. Abrigo de ejemplo
  { 
    title: "Abrigo Lana Minimalista", 
    price: "€299.99", 
    imageUrl: "/images/abrigo-lana.jpg", 
    linkUrl: "/producto/abrigo-lana" 
  },
  { 
    title: "Vestido Orgánico Luna", 
    price: "€149.99", 
    imageUrl: "/images/vestido-luna.jpg", 
    linkUrl: "/producto/vestido-luna" 
  },
  
  // 2. Camisa de ejemplo
  { 
    title: "Camisa Lino Clásica", 
    price: "€89.99", 
    imageUrl: "/images/camisa-lino.jpg", 
    linkUrl: "/producto/camisa-lino" 
  },
  
  // 3. Abrigo de ejemplo
  { 
    title: "Abrigo Lana Minimalista", 
    price: "€299.99", 
    imageUrl: "/images/abrigo-lana.jpg", 
    linkUrl: "/producto/abrigo-lana" 
  },
  { 
    title: "Vestido Orgánico Luna", 
    price: "€149.99", 
    imageUrl: "/images/vestido-luna.jpg", 
    linkUrl: "/producto/vestido-luna" 
  },
  
  // 2. Camisa de ejemplo
  { 
    title: "Camisa Lino Clásica", 
    price: "€89.99", 
    imageUrl: "/images/camisa-lino.jpg", 
    linkUrl: "/producto/camisa-lino" 
  },
  
  // 3. Abrigo de ejemplo
  { 
    title: "Abrigo Lana Minimalista", 
    price: "€299.99", 
    imageUrl: "/images/abrigo-lana.jpg", 
    linkUrl: "/producto/abrigo-lana" 
  },
];

const ProductGrid: React.FC = () => {
    return (
        // Contenedor principal de la cuadrícula
        <div className="product-grid-container"> 
            <div className="product-grid"> 
                {/* 🔑 La función map es la clave para la renderización dinámica */}
                {products.map((product, index) => (
                    <ProductCard 
                        key={index} // La key es crucial para la eficiencia de React
                        title={product.title}
                        price={product.price}
                        imageUrl={product.imageUrl}
                        linkUrl={product.linkUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;