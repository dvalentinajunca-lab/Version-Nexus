import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useDarkMode } from "../hooks/useDarkMode";

function Navbar() {
  const { user, logout } = useUser();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!user) return null;

  return (
    <nav className="navbar  px-5 py-3">
      <div className="logo">📚 Nexus</div>
      <div className="links">
        <Link to="/home">Inicio</Link>
        <Link to="/libros">Libros</Link>
        <Link to="/autores">Autores</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/perfil">Perfil</Link>
      </div>
      <div className="actions">
        <button onClick={toggleDarkMode}>
          {darkMode ? "☀️" : "🌙"}
        </button>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </nav>
  );
}

export default Navbar;
