import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Makes the built site open by double-clicking dist/index.html (file://):
// classic script instead of type="module", placed at the end of <body>.
function openFromDisk(): Plugin {
  return {
    name: 'open-from-disk',
    apply: 'build',
    enforce: 'post',
    transformIndexHtml(html) {
      const m = html.match(/<script[^>]*src="([^"]+)"[^>]*><\/script>/)
      if (!m) return html
      return html
        .replace(m[0], '')
        .replace('</body>', `<script defer src="${m[1]}"></script></body>`)
    },
  }
}

export default defineConfig({
  base: './',
  plugins: [react(), openFromDisk()],
  build: {
    modulePreload: false,
    rollupOptions: {
      output: { format: 'iife', inlineDynamicImports: true },
    },
  },
})
