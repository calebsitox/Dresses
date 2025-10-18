import FilterProducts from "./FilterProducts"
import { useState } from 'react';
import ProductGrid from "./ProductGrid"
import "./Cards/Card.css"

function ProductPage (){

      const [activeFilters, setActiveFilters] = useState({});

    const handleFilterChange = (category: string, value: string, isChecked: boolean) => {
    //TODO Aquí irá la lógica para actualizar el estado centralizado
    console.log(`Filtro cambiado: ${category} - ${value}, Activo: ${isChecked}`);
};

    return(
        <>
        <div className="product-page">
        <FilterProducts onFilterChange={handleFilterChange}/>
        <ProductGrid/>
        </div>
        </>
    );
}

export default ProductPage;