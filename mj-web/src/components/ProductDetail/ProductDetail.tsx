// ProductDetailPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
// import useProductDetails from './useProductDetails'; // Asume este hook

const ProductDetailPage: React.FC = () => {
    // 🔑 Capturamos el ID dinámico de la URL (ej: 'vestido-luna')
    const { productId } = useParams<{ productId: string }>();

    // 🚧 Lógica: Aquí llamarías a la API para obtener los datos
    // const { product, isLoading } = useProductDetails(productId); 
    
    // Datos de MOCK para la estructura visual
    const product = {
        title: "Vestido Orgánico Luna",
        price: "€149.99",
        description: "Un vestido confeccionado en algodón orgánico con caída suave y ajuste holgado. Ideal para primavera/verano.",
        availableSizes: ["XS", "S", "M", "L", "XL"],
        mainImage: "/images/vestido-luna-main.jpg",
        thumbnails: ["/images/vestido-luna-thumb1.jpg", "/images/vestido-luna-thumb2.jpg"],
    };
    
    // if (isLoading) return <div>Cargando detalles del producto...</div>;
    // if (!product) return <div>Producto no encontrado.</div>;


    return (
        <main className="product-detail-page-wrapper">
            
            {/* 1. Contenedor de las dos columnas: Imagen y Detalles */}
            <div className="product-detail-layout">
                
                {/* 2. COLUMNA IZQUIERDA: Galería de Imágenes */}
                <div className="product-gallery">
                    <div className="main-image-container">
                        <img src={product.mainImage} alt={product.title} className="main-product-image" />
                    </div>
                    
                    <div className="thumbnails-container">
                        {product.thumbnails.map((img, index) => (
                            <img 
                                key={index} 
                                src={img} 
                                alt={`Vista ${index + 1}`} 
                                className="thumbnail-image" 
                                // onClick={() => setMainImage(img)}
                            />
                        ))}
                    </div>
                </div>

                {/* 3. COLUMNA DERECHA: Información y Controles de Compra */}
                <div className="product-info">
                    
                    <h1 className="product-title">{product.title}</h1>
                    <p className="product-price">{product.price}</p>
                    
                    <div className="product-selection-controls">
                        
                        {/* Control de Talla */}
                        <div className="size-selector">
                            <label className="control-label">Talla:</label>
                            <div className="size-options">
                                {product.availableSizes.map(size => (
                                    <button key={size} className="size-button">
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Botón y Cantidad */}
                        <div className="purchase-area">
                            <input type="number" min="1" defaultValue="1" className="quantity-input" />
                            <button className="add-to-cart-button">
                                Añadir al Carrito
                            </button>
                        </div>
                    </div>
                    
                    <div className="product-description-area">
                        <h3 className="description-title">Descripción</h3>
                        <p className="product-description">{product.description}</p>
                    </div>

                </div>
            </div>
            
            {/* 4. Sección de Productos Relacionados (opcional) */}
            <div className="related-products">
                {/* Aquí iría el componente de la cuadrícula de productos relacionados */}
                <h2>Productos Relacionados</h2>
            </div>
        </main>
    );
};

export default ProductDetailPage;