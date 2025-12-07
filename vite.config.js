import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: ".", // project root containing index.html
  build: {
    rollupOptions: {
      input: resolve(__dirname, "index.html") // fully explicit path
    }
  },
  optimizeDeps: {
    include: ["page"]
  },
  server: {
    port: 5173
  }
});
