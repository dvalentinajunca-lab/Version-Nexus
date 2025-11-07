import React, { createContext, useContext, useState, useEffect } from "react";


const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null);


useEffect(() => {
const stored = localStorage.getItem("nx_user");
if (stored) setUser(JSON.parse(stored));
}, []);


const login = (email, password) => {
// Usuario fijo (simulado)
const validEmail = "nexus@uni.com";
const validPass = "1234";


if (email === validEmail && password === validPass) {
const u = { email };
setUser(u);
localStorage.setItem("nx_user", JSON.stringify(u));
return { ok: true };
}
return { ok: false, message: "Credenciales inválidas" };
};


const logout = () => {
setUser(null);
localStorage.removeItem("nx_user");
};


return (
<AuthContext.Provider value={{ user, login, logout }}>
{children}
</AuthContext.Provider>
);
};


export const useAuth = () => useContext(AuthContext);