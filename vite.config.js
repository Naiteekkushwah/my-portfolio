import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  plugins: [react(),tailwindcss()]
})
