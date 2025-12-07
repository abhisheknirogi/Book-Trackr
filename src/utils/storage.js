// src/utils/storage.js
const BOOKS_KEY = "books";

export function getBooks() {
  const books = localStorage.getItem(BOOKS_KEY);
  return books ? JSON.parse(books) : [];
}

export function addBook(book) {
  const books = getBooks();
  book.id = Date.now().toString(); // unique id
  books.push(book);
  localStorage.setItem(BOOKS_KEY, JSON.stringify(books));
  return book;
}

export function updateBook(updatedBook) {
  const books = getBooks().map(book =>
    book.id === updatedBook.id ? updatedBook : book
  );
  localStorage.setItem(BOOKS_KEY, JSON.stringify(books));
}

export function getBookById(id) {
  return getBooks().find(book => book.id === id);
}

// ✅ NEW — remove a book by ID
export function removeBook(id) {
  const books = getBooks();
  const updated = books.filter(book => book.id !== id);
  localStorage.setItem(BOOKS_KEY, JSON.stringify(updated));
}
