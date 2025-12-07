// src/router.js
import page from "page";
import Home from "./views/Home.js";
import AddBook from "./views/AddBook.js";
import BookDetails from "./views/BookDetails.js";
import NotFound from "./views/NotFound.js";

function render(html, callback) {
  const view = document.getElementById("view");
  view.innerHTML = html;
  if (callback) callback();
}

export function initRouter() {
  page("/", async () => render(await Home(), Home.attachEvents));
  page("/add", async () => render(await AddBook(), AddBook.attachEvents));
  page("/book/:id", async (ctx) => render(await BookDetails(ctx)));
  page("*", () => render(NotFound(), NotFound.attachEvents));

  page();
}
