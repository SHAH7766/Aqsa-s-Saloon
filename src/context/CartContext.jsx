import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('arfa_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('arfa_cart', JSON.stringify(cartItems));
    } catch {}
  }, [cartItems]);

  const addToCart = (service) => {
    if (!cartItems.some(item => item.id === service.id)) {
      setCartItems([...cartItems, service]);
    }
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  const totalAmount = cartItems.reduce((sum, item) => {
    const numericPrice = parseInt(item.price.replace(/[^0-9]/g, ''), 10) || 0;
    return sum + numericPrice;
  }, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, totalAmount, isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
