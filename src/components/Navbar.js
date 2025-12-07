export default function Navbar() {
  return `
    <nav class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      <div class="font-bold text-xl flex items-center gap-2">
         Book Trackr
      </div>
      <div class="space-x-6">
        <a href="/" data-link class="hover:underline">Home</a>
        <a href="/add" data-link class="hover:underline">Add Book</a>
      </div>
    </nav>
  `;
}
