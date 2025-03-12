import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      // Adding alias to resolve a specific export path for node-vibrant, if needed
      "node-vibrant/lib-esm": "node-vibrant", // Replace 'lib-esm' with the valid sub-directory if available
    },
  },
});
