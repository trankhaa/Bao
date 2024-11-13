import React, { createContext, useState } from 'react';

// Tạo ngữ cảnh cho giỏ hàng
export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Thêm một sản phẩm vào giỏ hàng
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantityCart: item.quantityCart + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantityCart: 1 }];
            }
        });
    };

    // Xóa một sản phẩm khỏi giỏ hàng
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
