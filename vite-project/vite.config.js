import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import generateMetaTags from './generateMetaTags'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        return html.replace(
          '<!-- OG_TAGS_PLACEHOLDER -->',
          generateMetaTags()
        )
      }
    }
  ]
})