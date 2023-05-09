import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  // root: "src",
  build: {
    sourcemap: true,
    minify: true,
    outDir: 'public',
    target: 'es2020',
    lib: {
      // eslint-disable-next-line no-undef
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'Miles web component library',
      fileName: format => `miles-wc.${format}.js`,
    },
  },
});
