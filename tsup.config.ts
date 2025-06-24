import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['iife'],
  target: 'es2017',
  outDir: 'dist',
  minify: true,
  sourcemap: false,
  bundle: true,
  splitting: false, // iife는 이걸 꺼야 함
  treeshake: true,
  dts: false,
})
