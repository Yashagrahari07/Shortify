import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://shortify-5rrs.onrender.com/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: '_redirects',
          dest: '.',
        },
      ],
    }),
  ],
})
