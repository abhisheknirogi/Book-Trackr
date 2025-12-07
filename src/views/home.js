// src/views/Home.js
import { getBooks } from "../utils/storage.js";
import page from "page";

export default async function Home() {
  const books = getBooks();

  return `
    <div class="p-6 max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-6 text-center">My Book Collection</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        ${books.length 
          ? books.map(book => `
            <div class="bg-white shadow-md rounded p-4 cursor-pointer hover:shadow-lg transition" data-id="${book.id}">
              <h2 class="text-lg font-semibold mb-2">${book.title}</h2>
              <p class="text-gray-600">${book.author || ""}</p>
            </div>
          `).join("")
          : `<p class="col-span-full text-gray-500 text-center">No books added yet.</p>`
        }
      </div>
    </div>
  `;
}

Home.attachEvents = () => {
  document.querySelectorAll("div[data-id]").forEach(div => {
    div.addEventListener("click", () => {
      const id = div.dataset.id;
      page(`/book/${id}`);
    });
  });
};
