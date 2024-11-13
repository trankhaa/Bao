import React, { createContext, useState } from 'react';

// Tạo ngữ cảnh cho xác thực
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        isAuthenticated: false,
        name: '',
        email: '',
    });

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
