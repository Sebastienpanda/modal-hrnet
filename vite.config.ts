import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ReactAccessibleModal",
      fileName: "index",
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: ["react", "react-dom"]
    }
  }
});