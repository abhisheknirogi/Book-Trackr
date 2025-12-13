// src/views/BookDetails.js
import { getBooks, updateBook, removeBook } from "../utils/storage.js";
import page from "page";

export default function BookDetails(ctx) {
  const id = ctx.params.id.toString(); // always string
  const book = getBooks().find(b => b.id === id);

  if (!book) return `<p class="p-4 text-center">Book not found</p>`;

  const isEdit = new URLSearchParams(window.location.search).get("edit");

  // ------------------- EDIT MODE -------------------
  if (isEdit) {
    return `
      <div class="p-4 max-w-md mx-auto bg-white shadow rounded">
        <h1 class="text-xl font-bold mb-4">Edit Book</h1>
        <form id="edit-book-form" class="space-y-4">
          <input type="text" class="w-full p-2 border rounded" value="${book.title}" required/>
          <input type="text" class="w-full p-2 border rounded" value="${book.author || ""}"/>
          <textarea class="w-full p-2 border rounded">${book.description || ""}</textarea>
          <button class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Update</button>
        </form>
      </div>
    `;
  }

  // ------------------- VIEW MODE -------------------
  return `
    <div class="p-4 max-w-md mx-auto bg-white shadow rounded">
      <h1 class="text-xl font-bold mb-2">${book.title}</h1>
      <p class="text-gray-700 mb-2">Author: ${book.author || "Unknown"}</p>
      <p class="text-gray-600 mb-2">${book.description || ""}</p>
      <small class="text-gray-400 block mb-4">Added on: ${book.dateAdded || ""}</small>

      <div class="flex items-center gap-3">
        <button id="edit-book-btn" class="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500">Edit</button>
        <button id="delete-book-btn" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
        <a href="/" data-link class="text-blue-500 hover:underline ml-2">Back</a>
      </div>
    </div>
  `;
}

// attachEvents now receives ctx
BookDetails.attachEvents = (ctx) => {
  const id = ctx.params.id.toString(); // get ID from ctx

  // ----- EDIT BUTTON -----
  const editBtn = document.getElementById("edit-book-btn");
  if (editBtn) {
    editBtn.addEventListener("click", () => {
      page(`/book/${id}?edit=true`);
    });
  }

  // ----- DELETE BUTTON -----
  const deleteBtn = document.getElementById("delete-book-btn");
  if (deleteBtn) {
    deleteBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to delete this book?")) {
        removeBook(id);
        page("/"); // rerender home
      }
    });
  }

  // ----- UPDATE FORM -----
  const form = document.getElementById("edit-book-form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();

      const updatedBook = {
        id,
        title: form[0].value,
        author: form[1].value,
        description: form[2].value,
        dateAdded: new Date().toLocaleDateString(),
      };

      updateBook(updatedBook);
      page(`/book/${id}`);
    });
  }
};
