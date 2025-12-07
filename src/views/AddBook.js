import { addBook } from "../utils/storage.js";
import page from "page";

export default function AddBook() {
  return `
    <div class="p-6 max-w-md mx-auto bg-white shadow rounded mt-6">
      <h1 class="text-2xl font-bold mb-4 text-center">Add a New Book</h1>
      <form id="add-book-form" class="space-y-4">
        <input type="text" id="title" placeholder="Book Title" required
               class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <input type="text" id="author" placeholder="Author"
               class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <textarea id="description" placeholder="Description"
                  class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Add Book</button>
      </form>
    </div>
  `;
}

// Attach event listener
AddBook.attachEvents = () => {
  const form = document.getElementById("add-book-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const description = document.getElementById("description").value;
    const dateAdded = new Date().toLocaleDateString();

    addBook({ id: Date.now(), title, author, description, dateAdded });

    page("/"); // navigate to Home
  });
};
