import React, { useState } from 'react';
import './FilterProducts.css'; 

const filterOptions = [
  {
    id: 'category-gender',
    title: "Género",
    options: ["Hombre", "Mujer", "Niña"]
  },
  {
    id: 'category-type',
    title: "TYPE",
    options: ["Camisas", "Pantalones", "Vestidos", "Abrigos"]
  }
];

interface FilterProps {
    // 🔑 El tipo de la función que viene del padre
    onFilterChange: (category: string, value: string, isChecked: boolean) => void;
}


// 🔑 La función reduce crea el objeto de estado inicial:
const initialExpandedState = filterOptions.reduce((acc, category) => {
    // Inicializa cada categoría a 'true' (abierto)
    acc[category.id] = false; 
    return acc;
}, {} as Record<string, boolean>); // Inicializamos como un objeto vacío

const FilterPanel: React.FC<FilterProps> = ({onFilterChange}) => {
  // Estado para manejar qué filtros están activos (opcional, pero buena práctica)
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>(initialExpandedState);


const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => ({
        // 1. Copiamos todas las categorías existentes
        ...prev, 
        
        // 2. Sobrescribimos SÓLO la categoría que se está haciendo clic
        // Accedemos a la clave: prev[categoryId] y negamos su valor: !prev[categoryId]
        [categoryId]: !prev[categoryId] 
    }));
};

  return (
    // <aside> es semánticamente perfecto para un panel lateral de navegación/filtro (SEO)
    <aside className="filter-panel">
      <div className="filter-header">
                <h3 className="filter-title">FILTER BY</h3>
            </div>
      
      {filterOptions.map(category => (
        <div key={category.id} className="filter-category">
        <div 
            className="filter-category-header" 
            onClick={() => toggleCategory(category.id)} // 👈 Llamada a la función
        >
            <h4 className="filter-category-title">{category.title}</h4>
            
            {/* Ícono de flecha que rota: Usa el estado aquí */}
            <span className={`toggle-icon ${expandedCategories[category.id] ? 'open' : ''}`}>&#9660;</span>
        </div>
         
          {category.options.map(option => (
            <div className={`filter-content ${expandedCategories[category.id] ? 'open' : 'closed'}`}>
            <div key={option} className="filter-option">
              <input 
                type="checkbox" 
                id={option} 
                name={category.id} 
                value={option} 
                className="filter-checkbox"
                onChange={(e) => onFilterChange(
                    category.id, 
                    option,
                    e.target.checked
                )}
              />
              <label htmlFor={option} className="filter-label">
                {option}
              </label>
            </div>
            </div>
          ))}
          
        </div>
      ))}
    </aside>
  );
};

export default FilterPanel;