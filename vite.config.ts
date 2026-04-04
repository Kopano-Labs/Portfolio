import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Vite 8 uses Rolldown which requires manualChunks as a function, not an object
        manualChunks(id) {
          if (id.includes("node_modules/react-dom") || id.includes("node_modules/react/")) {
            return "vendor-react";
          }
          if (id.includes("node_modules/react-router-dom") || id.includes("node_modules/react-router/")) {
            return "vendor-router";
          }
          if (id.includes("node_modules/framer-motion")) {
            return "vendor-motion";
          }
          if (id.includes("node_modules/lucide-react")) {
            return "vendor-icons";
          }
        },
      },
    },
    // Warn when any chunk exceeds 200kb (down from Vite's 500kb default)
    chunkSizeWarningLimit: 200,
  },
});