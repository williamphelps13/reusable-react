import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import { defineConfig, UserConfigExport } from 'vite'

const app = async (): Promise<UserConfigExport> => {
  return defineConfig({
    assetsInclude: ['/sb-preview/runtime.js'],
    plugins: [react()],
    css: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
  })
}
export default app
