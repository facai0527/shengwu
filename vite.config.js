import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages「项目站点」地址为 https://<用户>.github.io/<仓库名>/
// 构建前设置环境变量：VITE_BASE=/<仓库名>/
// 用户主页仓库 <用户名>.github.io 根域名部署时用 VITE_BASE=/
export default defineConfig({
  plugins: [vue()],
  base: process.env.VITE_BASE || '/',
})
