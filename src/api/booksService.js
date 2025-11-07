
const API_BASE = "https://mock.apidog.com/m1/1118578-1109675-default";

export async function getBooks() {
  try {
    const res = await fetch(`${API_BASE}/books`);
    if (!res.ok) throw new Error("Error al obtener libros");
    return await res.json();
  } catch (error) {
    console.error("Error en getBooks:", error);
    return [];
  }
}
