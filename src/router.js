import page from "page";
import Home from "./views/Home.js";
import BookDetails from "./views/BookDetails.js";
import NotFound from "./views/NotFound.js";

/* helper to render into #view */
function render(html) {
  const view = document.getElementById("view");
  view.innerHTML = html;
  // re-activate page.js for client links that used hrefs
  // no-op here since page handles anchor clicks with data-link if used
}

export function initRouter() {
  page("/", async () => render(await Home()));
  page("/book/:id", async (ctx) => render(await BookDetails(ctx)));
  page("*", () => render(NotFound()));
  page();
}
