import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || null;
  });

  const [cart, setCart] = useState([]);

  const login = (userData, userToken) => {
    setUser(userData);
    setToken(userToken);

    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", userToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setCart([]);

    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === product._id);
      if (exists) {
        return prevCart.map((item) => {
          item.id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };


  const removeFromCart = () => {

  }

  const updateQuantity = () => {

  }

  const emptyCart = () => {

  }

  const cartCount = cart.reduce((total , item) => total + item.quantity , 0)

  const cartTotal = cart.reduce((total , item) => total + item.price * item.quantity , 0)

  const isAdmin = user?.role === 'admin';

  const value = {
    user,
    token,
    cart , 
    cartCount,
    login,
    logout,
    addToCart,
    removeFromCart,
    emptyCart,
    cartTotal
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
};

export const useAuth = () => {
  return useContext(AuthContext)
}
