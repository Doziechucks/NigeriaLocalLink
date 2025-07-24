import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext', // try 'es2015' if esnext fails
    minify: 'esbuild', // or try false to debug
    sourcemap: true,   // optional: makes debugging easier
  }
});
