import path from 'path';
import { defineConfig } from 'vite';
import postcssCssVariables from 'postcss-css-variables';

let BASE_URL = 'https://miles.no/';

const buildConfig = {
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
  plugins: [
    {
      name: 'postcss',
      plugins: [
        postcssCssVariables({
          // Define your variables here
          variables: {
            '--miles-base-url': `${BASE_URL}`,
          },
        }),
      ],
    },
  ],
};

export default defineConfig(({ command, mode, ssrBuild }) => {
  if (mode === 'production') {
    BASE_URL = 'https://miles.no/';
  } else {
    BASE_URL = 'https://miles.no/newsite/';
  }

  console.log('------------ CONFIG ----------');
  console.log(`defineConfig mode: ${mode}`);
  console.log(`defineConfig command: ${command}`);
  console.log(`defineConfig ssrBuild: ${ssrBuild}`);
  console.log(`defineConfig BASEURL: ${BASE_URL}`);
  console.log('--------------------------------');

  return buildConfig;
});
