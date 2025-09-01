//import { defineConfig } from 'vite'
import { defineConfig } from 'vitest/config'; // we need to import it from vitest to be able to test components using testing library
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // we need to restart the command 'npm run test' and install this dependency
    globals: true
  }
})
