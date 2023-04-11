import { createContext, useContext } from "react";
import { useAuth } from "../hooks";
import { useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { login, logout, isLogged } = useAuth();

  return (
    <UserContext.Provider value={{ user, setUser, login, logout, isLogged }}>
      {children}
    </UserContext.Provider>
  );
}

const useUserContext = () => useContext(UserContext);


export { UserContext, UserProvider, useUserContext };
