// Format a JS date object to readable string
export function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

// Generate a unique ID
export function generateId() {
  return Date.now() + Math.floor(Math.random() * 1000);
}

// Check if an object is empty
export function isEmpty(obj) {
  return !obj || Object.keys(obj).length === 0;
}
