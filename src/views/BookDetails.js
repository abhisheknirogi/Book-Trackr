import { getBooks, updateBook } from "../utils/storage.js";
import page from "page";

export default function BookDetails(ctx) {
  const books = getBooks();
  const book = books.find(b => b.id == ctx.params.id);
  if (!book) return `<p class="p-4 text-center">Book not found</p>`;

  const isEdit = new URLSearchParams(window.location.search).get("edit");
  if (isEdit) {
    return `
      <div class="p-4 max-w-md mx-auto bg-white shadow rounded">
        <h1 class="text-xl font-bold mb-4">Edit Book</h1>
        <form id="edit-book-form" class="space-y-4">
          <input type="text" class="w-full p-2 border rounded" value="${book.title}" required/>
          <input type="text" class="w-full p-2 border rounded" value="${book.author}"/>
          <textarea class="w-full p-2 border rounded">${book.description}</textarea>
          <button class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Update</button>
        </form>
      </div>
    `;
  }

  return `
    <div class="p-4 max-w-md mx-auto bg-white shadow rounded">
      <h1 class="text-xl font-bold mb-2">${book.title}</h1>
      <p class="text-gray-700 mb-2">Author: ${book.author || "Unknown"}</p>
      <p class="text-gray-600 mb-2">${book.description}</p>
      <small class="text-gray-400 block mb-4">Added on: ${book.dateAdded}</small>
      <button id="edit-book-btn" class="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500">Edit</button>
      <a href="/" data-link class="text-blue-500 hover:underline ml-2">Back</a>
    </div>
  `;
}

BookDetails.attachEvents = () => {
  const editBtn = document.getElementById("edit-book-btn");
  if (editBtn) {
    editBtn.addEventListener("click", () => {
      const id = Number(window.location.pathname.split("/").pop());
      page(`/book/${id}?edit=true`);
    });
  }

  const form = document.getElementById("edit-book-form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const id = Number(window.location.pathname.split("/").pop());
      const title = form[0].value;
      const author = form[1].value;
      const description = form[2].value;
      updateBook(id, { title, author, description });
      page(`/book/${id}`);
    });
  }
};
