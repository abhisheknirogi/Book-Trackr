import { getBooks } from "../utils/storage.js";
import page from "page";

export default function NotFound() {
  return `
    <div class="p-4 text-center max-w-md mx-auto">
      <h1 class="text-2xl font-bold mb-2">404 - Page Not Found</h1>
      <p class="text-gray-500 mb-4">Oops! The page you are looking for does not exist.</p>
      
      <div class="mb-4">
        <input type="text" id="search-books" placeholder="Search for books..." 
               class="w-full p-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>

      <button id="go-home-btn" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Go Home</button>

      <div id="search-results" class="mt-4 grid grid-cols-1 gap-2"></div>
    </div>
  `;
}

NotFound.attachEvents = () => {
  const goHomeBtn = document.getElementById("go-home-btn");
  const searchInput = document.getElementById("search-books");
  const resultsContainer = document.getElementById("search-results");

  goHomeBtn.addEventListener("click", () => page("/"));

  // Search books as user types
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const books = getBooks().filter(b => b.title.toLowerCase().includes(query));
    
    resultsContainer.innerHTML = books.length
      ? books.map(book => `
          <div class="p-2 bg-white shadow rounded cursor-pointer hover:bg-gray-100" data-id="${book.id}">
            ${book.title} ${book.author ? `by ${book.author}` : ""}
          </div>
        `).join("")
      : `<p class="text-gray-500">No books found.</p>`;

    // Add click events to go to book details
    resultsContainer.querySelectorAll("div[data-id]").forEach(div => {
      div.addEventListener("click", () => {
        const id = div.dataset.id;
        page(`/book/${id}`);
      });
    });
  });
};
