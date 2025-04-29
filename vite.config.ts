import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: './index.ts',
      name: 'NAKit',
      fileName: (format) =>
        format === 'es' ? `NAKit.esm.js` : `NAKit.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom',],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',

        },
      },
    },
  },
  plugins: [dts()],
});


