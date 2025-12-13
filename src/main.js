// src/main.js
import "./style.css";
import { initRouter } from "./router.js";
import Navbar from "./components/Navbar.js";

document.addEventListener("DOMContentLoaded", () => {
  const appRoot = document.getElementById("app");

  // Insert navbar
  appRoot.insertAdjacentHTML("afterbegin", Navbar());

  // Create view container
  const viewWrap = document.createElement("div");
  viewWrap.id = "view";
  viewWrap.className = "mt-6";
  appRoot.appendChild(viewWrap);

  // Start router
  initRouter();
});
