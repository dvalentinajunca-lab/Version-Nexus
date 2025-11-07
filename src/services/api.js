
const API_BASE = "https://mock.apidog.com/m1/1118578-1109675-default";

export async function getBooks() {
  try {
    const res = await fetch(`${API_BASE}/books`);
    const data = await res.json();
    return Array.isArray(data) ? data : data.data || [];
  } catch (error) {
    console.error("Error al obtener libros:", error);
    return [];
  }
}

export async function getBookById(id) {
  try {
    const res = await fetch(`${API_BASE}/books`);
    const data = await res.json();
    const book = Array.isArray(data) ? data.find((b) => b.id === Number(id)) : null;
    return book;
  } catch (error) {
    console.error("Error al obtener libro:", error);
    return null;
  }
}


export async function searchBooks(filters = {}) {
  try {
    const queryParams = new URLSearchParams(filters);
    const res = await fetch(`${API_BASE}/books/search?${queryParams.toString()}`);
    const data = await res.json();
    return Array.isArray(data) ? data : data.data || [];
  } catch (error) {
    console.error("Error al buscar libros:", error);
    return [];
  }
}
export async function getAuthors() {
  try {
    const res = await fetch(`${API_BASE}/authors`);
    const data = await res.json();
    return Array.isArray(data) ? data : data.data || [];
  } catch (error) {
    console.error("Error al obtener autores:", error);
    return [];
  }
}


export async function getCategories() {
  try {
    const res = await fetch(`${API_BASE}/categories`);
    const data = await res.json();
    return Array.isArray(data) ? data : data.data || [];
  } catch (error) {
    console.error("Error al obtener categorías:", error);
    return [];
  }
}