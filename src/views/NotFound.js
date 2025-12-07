export default function NotFound() {
  return `
    <div class="text-center py-20">
      <h1 class="text-4xl font-bold text-red-600">404</h1>
      <p class="text-gray-600 mt-2">Page not found.</p>
      <button onclick="page('/')" class="mt-4 text-blue-600 underline">
        Go Home
      </button>
    </div>
  `;
}
