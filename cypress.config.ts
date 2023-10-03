// import path from 'path';
import { defineConfig } from 'cypress';
// import vitePreprocessor from 'cypress-vite';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173/simple-dtrader-vite',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // on(
      //   'file:preprocessor',
      //   vitePreprocessor({
      //     configFile: path.resolve(__dirname, './vite.config.ts'),
      //     mode: 'development',
      //   })
      // );
    },
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
