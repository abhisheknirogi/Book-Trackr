import { fetchBookById } from "../api/booksAPI.js";

export default async function BookDetails(ctx) {
  const { id } = ctx.params;
  const book = await fetchBookById(id);

  return `
    <div class="py-6 max-w-3xl mx-auto">

      <button onclick="page('/')" class="text-blue-600 underline mb-4">
        ← Back to Home
      </button>

      <div class="bg-white p-6 rounded-xl shadow-md border">
        <img 
          src="${book.image}" 
          alt="${book.title}"
          class="w-full h-80 object-cover rounded-lg mb-6"
        />

        <h1 class="text-4xl font-bold mb-2">${book.title}</h1>
        <p class="text-xl text-gray-600 mb-4">by ${book.author}</p>

        <p class="text-gray-700 leading-relaxed">
          ${book.description}
        </p>

        <button class="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add to Favorites
        </button>
      </div>
    </div>
  `;
}
