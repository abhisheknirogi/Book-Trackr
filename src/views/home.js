import { fetchBooks } from "../api/booksAPI.js";
import BookCard from "../components/BookCard.js";

export default async function Home() {
  const books = await fetchBooks();

  return `
    <div class="py-6">
      <h2 class="text-3xl font-bold mb-6 text-center">Popular Books</h2>

      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        ${books.map(BookCard).join("")}
      </div>
    </div>
  `;
}
