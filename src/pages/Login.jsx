import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import logo from "../assets/nexus-logo.png";

function Login() {
  const { login } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) navigate("/home");
    else setError("Credenciales incorrectas");
  };

  return (
    <div className="login-background">
      <div className="login-box">
        <img src={logo} alt="Nexus Logo" className="login-logo" />
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default Login;