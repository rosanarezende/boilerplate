import { useState } from "react";

export const useAuth = () => {
  const token = window.localStorage.getItem('token');
  const [isLogged, setIsLogged] = useState(!!token);

  const login = (token) => {
    window.localStorage.setItem('token', token);
    setIsLogged(true);
  };

  const logout = () => {
    window.localStorage.removeItem('token');
    setIsLogged(false);
  };

  return { token, login, logout, isLogged };
};
