import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginReactHelmet from './vite-plugin-react-helmet'

export default defineConfig({
  plugins: [react(), vitePluginReactHelmet()],
})