import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['iife'],
  target: 'es2017',
  outDir: 'dist',
  minify: true,
  sourcemap: false,
  bundle: true,
  splitting: false,
  treeshake: true,
  dts: false,

  // ✅ 이게 핵심
  define: {
    'process.env.NODE_ENV': '"production"',
  },
})
