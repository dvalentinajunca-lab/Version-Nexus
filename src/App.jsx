// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useUser } from "./context/UserContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Libros from "./pages/Libros";
import Detalle from "./pages/Detalle";
import Autores from "./pages/Autores";
import Perfil from "./pages/Perfil";
import Navbar from "./components/Navbar";
import Contacto from "./pages/Contacto";

function App() {
  const { user } = useUser();

  return (
    <Router>
         {user && <Navbar />}
      <Routes>
        
        <Route path="/" element={<Login />} />

    
        {user ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/libros" element={<Libros />} />
            <Route path="/libros/:id" element={<Detalle />} />
            <Route path="/autores" element={<Autores />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/perfil" element={<Perfil />} />
          </>
        ) : (
       
          <Route path="*" element={<Navigate to="/" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
