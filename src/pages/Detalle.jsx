import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookById } from "../services/api";
import "./Detalle.css";

function Detalle() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    getBookById(id).then(setBook);
  }, [id]);

  if (!book) return <p className="loading">Cargando detalles del libro...</p>;

  return (
    <div className="detalle-container">
      <div className="detalle-card">
        <div className="detalle-image">
          <img
            src={book.coverImage || "https://via.placeholder.com/300x450"}
            alt={book.title}
          />
        </div>

        <div className="detalle-info">
          <h2>{book.title}</h2>
          <p className="detalle-author">
            <strong>Autor:</strong> {book.author?.name || "Desconocido"}
          </p>
          <p><strong>Categoría:</strong> {book.category?.name || "Sin categoría"}</p>
          <p><strong>Año:</strong> {book.year}</p>
          <p><strong>ISBN:</strong> {book.isbn}</p>
          <p><strong>Editorial:</strong> {book.publisher?.name || "—"}</p>
          <p className="detalle-price">
            <strong>Precio:</strong> ${book.price?.toFixed(2) || "N/A"}
          </p>

          <div className="detalle-description">
            <h4>Sinopsis</h4>
            <p>{book.description || "No hay sinopsis disponible para este libro."}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detalle;
