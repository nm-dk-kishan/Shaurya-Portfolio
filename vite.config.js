import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

export default defineConfig({
  plugins: [preact(), tailwindcss()],

  resolve: {
    alias: {
      '#components': resolve(
        dirname(fileURLToPath(import.meta.url)),
        'src/components'
      ),

      '#constants': resolve(
        dirname(fileURLToPath(import.meta.url)),
        'src/constants'
      ),

      '#store': resolve(
        dirname(fileURLToPath(import.meta.url)),
        'src/store'
      ),

      '#hoc': resolve(
        dirname(fileURLToPath(import.meta.url)),
        'src/hoc'
      ),

      '#windows': resolve(
        dirname(fileURLToPath(import.meta.url)),
        'src/windows'
      ),
    },
  },
})