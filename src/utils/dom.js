// Helper to render HTML into a container
export function render(container, html) {
  container.innerHTML = html;
}

// Create element with optional classes
export function createEl(tag, classNames = "", innerHTML = "") {
  const el = document.createElement(tag);
  if (classNames) el.className = classNames;
  if (innerHTML) el.innerHTML = innerHTML;
  return el;
}

// Clear all children of a container
export function clear(container) {
  container.innerHTML = "";
}
