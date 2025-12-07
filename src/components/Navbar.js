export default function Navbar() {
  const nav = document.createElement("nav");
  nav.className = "p-4 bg-black text-white";
  nav.innerHTML = `
    <a href="/">Home</a>
    <a href="/add-book">Add Book</a>
  `;
  return nav;
}
