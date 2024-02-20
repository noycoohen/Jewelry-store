import {createContext, useState} from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([{
        id: 3,
        name: "Product 3",
        description: "Description of product 3",
        price: 300,
        imageId: "https://via.placeholder.com/150"
    }]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    }

    const removeFromCart = (product) => {
        const newCart = cart.filter((item) => item.id !== product.id);
        setCart(newCart);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}
