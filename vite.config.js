import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  let base = ''
  base = command === 'build' ? '/healtyH5' : './'
  return{
    base,
    plugins: [vue()],
    build: {
      outDir: 'healtyH5'
    }
   
  }
})
