const BASE = "https://www.googleapis.com/books/v1/volumes";

/* safeFetch wraps fetch with error handling */
async function safeFetch(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Network error (${res.status})`);
    return await res.json();
  } catch (err) {
    console.error("safeFetch:", err);
    throw err;
  }
}

/* fetchBooks(query, startIndex, maxResults) */
export async function fetchBooks(query = "fiction", startIndex = 0, maxResults = 12) {
  const q = encodeURIComponent(query);
  const url = `${BASE}?q=${q}&startIndex=${startIndex}&maxResults=${maxResults}`;
  try {
    const data = await safeFetch(url);
    const items = data.items || [];
    return {
      items: items.map(b => ({
        id: b.id,
        title: b.volumeInfo.title || "Untitled",
        author: (b.volumeInfo.authors || []).join(", ") || "Unknown",
        description: b.volumeInfo.description || "",
        thumbnail: b.volumeInfo.imageLinks?.thumbnail?.replace("http:", "https:") || "",
        published: b.volumeInfo.publishedDate || "Unknown",
        pages: b.volumeInfo.pageCount || null
      })),
      totalItems: data.totalItems || 0
    };
  } catch (err) {
    return { items: [], totalItems: 0 };
  }
}

export async function fetchBookById(id) {
  try {
    const data = await safeFetch(`${BASE}/${id}`);
    const b = data;
    return {
      id: b.id,
      title: b.volumeInfo.title || "Untitled",
      author: (b.volumeInfo.authors || []).join(", ") || "Unknown",
      description: b.volumeInfo.description || "",
      thumbnail: b.volumeInfo.imageLinks?.thumbnail?.replace("http:", "https:") || "",
      published: b.volumeInfo.publishedDate || "Unknown",
      pages: b.volumeInfo.pageCount || null
    };
  } catch (err) {
    return null;
  }
}
