import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr({
            svgrOptions: {
                // SVGR will optimise the compononents to improve performance.
                // More here: https://www.vandebron.tech/blog/optimizing-converting-and-exporting-svg-icons-in-react
                icon: true
            },
            // Also include only the dedicated icons directory for obvious performance reasons.
            include: 'src/assets/icons/*.svg?react'
        })
    ]
})
