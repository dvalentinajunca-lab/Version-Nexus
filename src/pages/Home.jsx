import React, { useEffect, useState } from "react";
import { getBooks } from "../services/api";

import "./Home.css";

import banner1 from "../assets/BANNER-1.jpg";
import banner2 from "../assets/BANNER-2-.jpg";
import banner3 from "../assets/BANNER-3-.jpg";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getBooks();
        console.log("Libros obtenidos:", data); 
        setBooks(data.slice(0, 3)); 
      } catch (error) {
        console.error("Error al obtener libros:", error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="home-container">

      <div id="carouselExample" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-inner rounded shadow">
          <div className="carousel-item active">
            <img src={banner1} className="d-block w-100" alt="Banner 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Bienvenido a Nexus 📚</h5>
              <p>Tu librería digital favorita</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src={banner2} className="d-block w-100" alt="Banner 2" />
            <div className="carousel-caption d-none d-md-block">
             
            </div>
          </div>

          <div className="carousel-item">
            <img src={banner3} className="d-block w-100" alt="Banner 3" />
            <div className="carousel-caption d-none d-md-block">
              
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>


      <div className="books-section text-center">
        <h2>📘 Libros destacados</h2>
        <div className="books-grid">
          {books.length > 0 ? (
            books.map((book) => (
              <div key={book.id} className="book-card">
                <img src={book.coverImage} alt={book.title} />
                <h3>{book.title}</h3>
                <p>{book.author?.name}</p>
              </div>
            ))
          ) : (
            <p>Cargando libros...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
