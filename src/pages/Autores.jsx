import { useEffect, useState } from "react";
import { getAuthors } from "../services/api";
import "./Autores.css";

function Autores() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then(setAuthors);
  }, []);

  return (
    <div className="page autores-page">
      <h2>✍️ Nuestros Autores</h2>

      <div className="authors-list">
        {authors.length > 0 ? (
          authors.map((author) => (
            <div key={author.id} className="author-card">
              <img
                src={
                  author.image ||
                  "https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
                }
                alt={author.name}
                className="author-image"
              />
              <div className="author-info">
                <h3>{author.name}</h3>
                <p>{author.biography || "Sin biografía disponible."}</p>
                <p className="author-extra">
                  <strong>Nacionalidad:</strong> {author.nationality || "—"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>Cargando autores...</p>
        )}
      </div>
    </div>
  );
}

export default Autores;
