import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Evita erro de resolução de caminho quando a pasta está em um diretório virtualizado do Windows
  resolve: { preserveSymlinks: true },
})
