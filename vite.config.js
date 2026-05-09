import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

/**
 * GitHub Pages 项目站：https://<用户>.github.io/<仓库名>/
 * - 本地开发：base 为 /
 * - GitHub Actions：自动读取 GITHUB_REPOSITORY（如 facai0527/shengwu → /shengwu/）
 * - 也可手动：VITE_BASE=/仓库名/ npm run build
 */
function resolveBase() {
  const manual = process.env.VITE_BASE?.trim()
  if (manual) {
    return manual.endsWith('/') ? manual : `${manual}/`
  }
  const gh = process.env.GITHUB_REPOSITORY || ''
  const repo = gh.split('/')[1]
  if (!repo) return '/'
  if (repo.endsWith('.github.io')) return '/'
  return `/${repo}/`
}

export default defineConfig({
  plugins: [vue()],
  base: resolveBase(),
})
