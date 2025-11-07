import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBooks, searchBooks, getCategories } from "../services/api";
import "./Libros.css";

function Libros() {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({
    title: "",
    author: "",
    category: "",
  });

  useEffect(() => {
    getBooks().then(setBooks);
    getCategories().then(setCategories);
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSearch = async () => {
    const query = {};
    if (filters.title) query.title = filters.title;
    if (filters.author) query.author = filters.author;
    if (filters.category) query.category = filters.category;

    const filteredBooks = await searchBooks(query);
    setBooks(filteredBooks);
  };

  const handleReset = async () => {
    setFilters({
      title: "",
      author: "",
      category: "",
    });
    const all = await getBooks();
    setBooks(all);
  };

  return (
    <div className="page">
      <h2>📚 Libros disponibles</h2>


      <div className="filters">
        <input
          type="text"
          name="title"
          placeholder="Buscar por título"
          value={filters.title}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Buscar por autor"
          value={filters.author}
          onChange={handleFilterChange}
        />

            <select
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
        >
          <option value="">Todas las categorías</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>

        <div className="buttons">
          <button onClick={handleSearch}>Filtrar</button>
          <button onClick={handleReset}>Limpiar</button>
        </div>
      </div>


      <div className="book-grid">
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book.id} className="book-card">
              <img
                src={book.coverImage || "https://via.placeholder.com/150"}
                alt={book.title}
              />
              <h3>{book.title}</h3>
              <p>{book.author?.name || "Autor desconocido"}</p>
              <p>{book.category?.name || "Sin categoría"}</p>
           <Link to={`/libros/${book.id}`} className="details-link">
  Ver detalles
</Link>

            </div>
          ))
        ) : (
          <p>Cargando libros.</p>
        )}
      </div>
    </div>
  );
}

export default Libros;
