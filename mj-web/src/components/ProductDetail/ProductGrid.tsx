
import React from 'react';
import ProductCard from './Cards/Card'; 
import "./Cards/Card.css"

// Definición de la interfaz de datos
interface Product {
  id: number;
  title: string;
  price: string;
  imageUrl: string;
  linkUrl: string;
}

// Array de datos de productos (con tus ejemplos completados)
const products: Product[] = [
  // 1. Vestido de ejemplo
  { 
    id: 1,
    title: "Vestido Orgánico Luna", 
    price: "€149.99", 
    imageUrl: "/images/vestido-luna.jpg", 
    linkUrl: "/producto/vestido-luna" 
  },
  
  // 2. Camisa de ejemplo
  { 
    id: 2,
    title: "Camisa Lino Clásica", 
    price: "€89.99", 
    imageUrl: "/images/camisa-lino.jpg", 
    linkUrl: "/producto/camisa-lino" 
  },
  
  // 3. Abrigo de ejemplo
  { 
    id: 3,
    title: "Abrigo Lana Minimalista", 
    price: "€299.99", 
    imageUrl: "/images/abrigo-lana.jpg", 
    linkUrl: "/producto/abrigo-lana" 
  },
  { 
    id: 4,
    title: "Vestido Orgánico Luna", 
    price: "€149.99", 
    imageUrl: "/images/vestido-luna.jpg", 
    linkUrl: "/producto/vestido-luna" 
  },
  
  // 2. Camisa de ejemplo
  { 
    id: 5,
    title: "Camisa Lino Clásica", 
    price: "€89.99", 
    imageUrl: "/images/camisa-lino.jpg", 
    linkUrl: "/producto/camisa-lino" 
  },
  
  // 3. Abrigo de ejemplo
  { 
    id: 6,
    title: "Abrigo Lana Minimalista", 
    price: "€299.99", 
    imageUrl: "/images/abrigo-lana.jpg", 
    linkUrl: "/producto/abrigo-lana" 
  },
  { 
    id: 7,
    title: "Vestido Orgánico Luna", 
    price: "€149.99", 
    imageUrl: "/images/vestido-luna.jpg", 
    linkUrl: "/producto/vestido-luna" 
  },
  
  // 2. Camisa de ejemplo
  { 
    id: 8,
    title: "Camisa Lino Clásica", 
    price: "€89.99", 
    imageUrl: "/images/camisa-lino.jpg", 
    linkUrl: "/producto/camisa-lino" 
  },
  
  // 3. Abrigo de ejemplo
  { 
    id: 9,
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
                        id={product.id} 
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