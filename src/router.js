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
  page("/", () => render(Home(), Home.attachEvents));
  page("/add", () => render(AddBook(), AddBook.attachEvents));

  // Book details with ctx passed to attachEvents
  page("/book/:id", (ctx) =>
    render(BookDetails(ctx), () => BookDetails.attachEvents(ctx))
  );

  page("*", () => render(NotFound(), NotFound.attachEvents));

  page();
}
