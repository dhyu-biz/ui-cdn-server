// tsup.config.ts
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['iife'],
  target: 'es2017',
  outDir: 'dist',
  minify: true,
  sourcemap: false,
  bundle: true,
  name: 'MyWidget', // 전역으로 노출될 이름 (필수)
})

