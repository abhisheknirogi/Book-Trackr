export function truncate(text, length = 70) {
  return text.length > length ? text.substring(0, length) + "..." : text;
}
