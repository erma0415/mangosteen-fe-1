import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";
// https://vitejs.dev/config/
export default defineConfig({
  base:'/mangosteen-fe-1/dist/',
  plugins: [vue(),
    vueJsx({
      transformOn: true,
      mergeProps: true,
      // 理论上babel能配什么它就能配什么
    }),
  ],
  // server: {				// ← ← ← ← ← ←
  //   host: '0.0.0.0'	// ← 新增内容 ←
  // }		
})
