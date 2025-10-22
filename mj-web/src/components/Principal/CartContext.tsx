import React, { useState, useContext, useMemo, createContext } from 'react';

// 1. DEFINICIÓN DE TIPOS
// -------------------------------------------------------------------
interface CartItem {
    id: string;
    title: string;
    price: number;
    quantity: number; // Cantidad de este producto en el carrito
}

interface CartContextValue {
    items: CartItem[];
    addToCart: (productToAdd: Omit<CartItem, 'quantity'> & { quantity?: number }) => void; 
    totalItems: number; // Contador total para el Navbar
    // 🚧 Nota: Aquí se añadirían removeItem, updateQuantity, etc.
}

// 2. VALOR INICIAL Y CREACIÓN DEL CONTEXTO
// -------------------------------------------------------------------
const initialContextValue: CartContextValue = {
    items: [],
    addToCart: () => { console.warn('addToCart called without a Provider'); },
    totalItems: 0,
};

export const CartContext = createContext<CartContextValue>(initialContextValue);

// 3. HOOK PERSONALIZADO (Para fácil uso en otros componentes)
// -------------------------------------------------------------------
export const useCart = () => useContext(CartContext);


// 4. EL PROVIDER (Contiene la Lógica y el Estado)
// -------------------------------------------------------------------
export const CartProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    
    // 🔑 Estado central que guarda la lista de productos
    const [items, setItems] = useState<CartItem[]>([]); 
    
    
    const totalItems = useMemo(() => {
        return items.reduce((acc, item) => acc + item.quantity, 0); 
    }, [items]); // Depende únicamente del array 'items'
    
    // 💡 Lógica de Mutación: Añadir al Carrito (Inmutable)
    const addToCart = (productToAddData: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
        
        // Asignar cantidad por defecto si no se pasa (por ejemplo, 1)
        const quantityToAdd = productToAddData.quantity || 1;
        const productId = productToAddData.id;

        // 1. Buscar si el producto ya existe por su ID
        const existingItemIndex = items.findIndex(
            (item) => item.id === productId
        );

        if (existingItemIndex > -1) {
            // --- SCENARIO A: EL PRODUCTO YA EXISTE (ACTUALIZAR) ---
            
            const newItems = [...items]; // Copia del array
            const existingItem = newItems[existingItemIndex]; // El objeto a actualizar
            
            // Reemplazar el ítem copiado con la cantidad incrementada
            newItems[existingItemIndex] = {
                ...existingItem, // Copia todas las propiedades
                quantity: existingItem.quantity + quantityToAdd, // Solo cambia la cantidad
            };

            setItems(newItems); // Establece el nuevo array
            
        } else {
            // --- SCENARIO B: EL PRODUCTO ES NUEVO (AÑADIR) ---
            const newItem: CartItem = {
                ...productToAddData,
                quantity: quantityToAdd,
            };
            
            // Añadir el nuevo artículo al final del array inmutable
            setItems([...items, newItem]);
        }


    };

    // 4. El valor final que el contexto proveerá
const contextValue: CartContextValue = useMemo(() => ({
        items,
        addToCart,
        totalItems,
    }), [items, totalItems, addToCart]); // Dependencias para useMemo

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};