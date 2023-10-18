import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: 'src/index.ts', // 这里指定了入口点的路径
      output: {
        entryFileNames: 'index.js', // 自定义入口文件名
      },
    }
  }
});