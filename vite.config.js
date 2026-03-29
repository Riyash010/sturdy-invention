import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/sturdy-invention/",
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
