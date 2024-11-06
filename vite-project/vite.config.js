import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginReactHelmet from './vite-plugin-react-helmet'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginReactHelmet()],
})
