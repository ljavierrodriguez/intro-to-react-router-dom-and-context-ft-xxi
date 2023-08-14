import React, { createContext, useState } from 'react'

export const CartContext = createContext(null);

const ShoppingCartContext = ({ children }) => {

    const [cart, setCart] = useState([
        { id: 1, productName: 'Laptop Dell', price: 1000, quantity: 2 }
    ])

    return (
        <CartContext.Provider value={{ cart, setCart }}> {/* { cart: cart, setCart: setCart } */}
            {children}
        </CartContext.Provider>
    )
}

export default ShoppingCartContext