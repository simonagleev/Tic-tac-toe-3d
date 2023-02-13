import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: "**/*.hdr"
  // assetsInclude(file) {
  //   return /\.(hdr|glb|usdz|png)$/.test(file)
  // }
})
