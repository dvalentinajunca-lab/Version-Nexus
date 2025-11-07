import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Ejemplo simple con usuario fijo
    if (email === "admin@nexus.com" && password === "123456") {
      const userData = {
        name: "Usuario Nexus",
        email: "admin@nexus.com",
      };
      setUser(userData);
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
