import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'comps': path.resolve(__dirname, 'src/components'),
      'views': path.resolve(__dirname, 'src/views'),
    },
  },   
  plugins: [
    vue(),
    viteMockServe({
      mockPath: './src/mock'
    })
  ],
  server:{
    
    proxy:{
      '/api': 'http://82.156.11.187'
    }
  }

})
