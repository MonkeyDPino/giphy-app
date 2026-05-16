import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { existsSync } from 'fs'
import { fileURLToPath } from 'url'

const srcDir = fileURLToPath(new URL('src', import.meta.url))

// Rolldown's dep scanner doesn't read jsconfig baseUrl, so bare project-file
// imports (e.g. `import App from 'App'`) trip it up. This plugin intercepts
// them, finds the actual file in src/, and marks it external — telling the
// scanner "this is a project file, not a node_module to pre-bundle."
const resolveSrcBaseUrl = {
  name: 'resolve-src-baseurl',
  resolveId(id) {
    if (id.startsWith('.') || id.startsWith('/') || id.startsWith('@') || id.startsWith('\0')) return null
    const exts = ['', '.jsx', '.js', '.tsx', '.ts', '.css', '.json']
    for (const ext of exts) {
      const candidate = resolve(srcDir, id + ext)
      if (existsSync(candidate)) return { id: candidate, external: true }
      const index = resolve(srcDir, id, `index${ext}`)
      if (existsSync(index)) return { id: index, external: true }
    }
    return null
  },
}

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  optimizeDeps: {
    rolldownOptions: {
      plugins: [resolveSrcBaseUrl],
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
})
