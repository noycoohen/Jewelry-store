import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedProducts = localStorage.getItem("Cart");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token && cart.length > 0) {
      setCart([]);
      localStorage.removeItem("Cart");

      toast.info("Session ended, cart cleared.");
    }
  }, [cart.length]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success("Added to cart");
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item._id !== id);
    setCart(newCart);
    toast.success("Removed from cart");
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
