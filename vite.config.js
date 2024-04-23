import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "fdl-eslint-base-conf",
      fileName: "fdl-eslint-base-conf",
    },
  },
});
