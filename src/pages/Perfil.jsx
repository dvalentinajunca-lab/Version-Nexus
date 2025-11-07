import React from "react";
import { useUser } from "../context/UserContext";
import "./Perfil.css";

function Perfil() {
  const { user, logout } = useUser();

  if (!user) {
    return (
      <div className="perfil-container">
        <h2>👤 Mi perfil</h2>
        <p>No hay un usuario logueado.</p>
      </div>
    );
  }

  return (
    <div className="perfil-container">
      <div className="perfil-card">
        <h2>👤 Mi perfil</h2>

        <div className="perfil-info">
          <p><strong>Nombre:</strong> {user.name}</p>
          <p><strong>Correo:</strong> {user.email}</p>
        </div>

        <button className="logout-btn" onClick={logout}>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}

export default Perfil;
