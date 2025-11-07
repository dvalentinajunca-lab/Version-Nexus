import React, { useState, useEffect } from "react";
import "./Contacto.css";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: ""
  });

  const [enviado, setEnviado] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    setEnviado(true);

    setFormData({ nombre: "", correo: "", mensaje: "" });

    setTimeout(() => setEnviado(false), 3000);
  };

  useEffect(() => {
    document.title = "Contacto - Nexus Librería";
  }, []);

  return (
    <div className="contacto-container">
      <h2>📞 Contáctanos</h2>

      <section className="contact-info">
        <h3>Información básica de contacto</h3>
        <p><strong>Dirección:</strong> Madrid, España</p>
        <p><strong>Teléfono / WhatsApp:</strong> 310 555 6789</p>
        <p><strong>Correo electrónico:</strong> contacto@nexuslibros.com</p>
        <p>
          <strong>Horario de atención:</strong> Lunes a viernes de 9:00 a.m. a 6:00 p.m. — 
          Sábados de 9:00 a.m. a 2:00 p.m.
        </p>
      </section>


      <section className="contact-form">
        <h3>Formulario de contacto</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="correo"
            placeholder="Tu correo electrónico"
            value={formData.correo}
            onChange={handleChange}
            required
          />
          <textarea
            name="mensaje"
            placeholder="Escribe tu mensaje..."
            rows="4"
            value={formData.mensaje}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Enviar mensaje</button>
        </form>

        {enviado && <p className="mensaje-exito">✅ Mensaje enviado con éxito</p>}
      </section>


      <section className="contact-map">
        <h3>Ubicación</h3>
        <iframe
          title="Mapa de ubicación Nexus"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.9532938249674!2d-3.703790884602942!3d40.416775979364915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42289c8c46e1b9%3A0x3d7f5a6212d49b58!2sMadrid%2C%20España!5e0!3m2!1ses!2ses!4v1694030123456!5m2!1ses!2ses"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}

export default Contacto;
