import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base so the built site works correctly on GitHub Pages
  // (served from https://<username>.github.io/<repo-name>/) regardless
  // of the repository name.
  base: './',
})
