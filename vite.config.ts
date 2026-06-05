import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss/plugin";
import tsConfigPaths from "vite-tsconfig-paths";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: "/HustleEvents/",
  plugins: [react(), tsConfigPaths()],
  resolve: {
    alias: {
      "node:async_hooks": join(__dirname, "src/vite-browser-shims/async_hooks.ts"),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
