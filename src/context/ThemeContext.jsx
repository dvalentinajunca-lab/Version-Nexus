import React, { createContext, useContext, useEffect, useState } from "react";


const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
const [dark, setDark] = useState(false);


useEffect(() => {
const saved = localStorage.getItem("nx_dark");
setDark(saved === "true");
}, []);


useEffect(() => {
if (dark) document.body.classList.add("nx-dark");
else document.body.classList.remove("nx-dark");
localStorage.setItem("nx_dark", dark ? "true" : "false");
}, [dark]);


return (
<ThemeContext.Provider value={{ dark, setDark }}>
{children}
</ThemeContext.Provider>
);
};


export const useTheme = () => useContext(ThemeContext);