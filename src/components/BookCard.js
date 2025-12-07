export default function BookCard(book) {
  return `
    <div class="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 border">
      <img 
        src="${book.image}" 
        alt="${book.title}" 
        class="w-full h-48 object-cover rounded-md mb-3"
      />
      <h3 class="text-lg font-semibold">${book.title}</h3>
      <p class="text-sm text-gray-500 mb-3">${book.author}</p>

      <button 
        onclick="page('/book/${book.id}')"
        class="w-full mt-2 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700">
        View Details
      </button>
    </div>
  `;
}
