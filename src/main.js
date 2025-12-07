import "./style.css";
import page from "page";
import { initRouter } from "./router.js";
import Navbar from "./components/Navbar.js";

// render Navbar and mount router container
document.addEventListener("DOMContentLoaded", () => {
  const appRoot = document.getElementById("app");

  // inject navbar (DOM element)
  appRoot.prepend(Navbar());

  // create view container
  const viewWrap = document.createElement("div");
  viewWrap.id = "view";
  viewWrap.className = "mt-6";
  appRoot.appendChild(viewWrap);

  initRouter();
});
