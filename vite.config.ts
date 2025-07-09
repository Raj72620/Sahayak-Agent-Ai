import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  // ✅ Remove base if deploying to Netlify root
  base: "/",  // or just remove this line entirely
  build: {
    outDir: "dist",
    emptyOutDir: true
  },
  server: {
    host: "::",
    port: 8080,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
});
