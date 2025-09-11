import { defineConfig } from 'rolldown'
import settingJson from './settings.json' assert { type: 'json' }

export default defineConfig({
  input: 'src/index.ts',
  output: {
    format: 'esm',
    file: 'dist/index.js',
  },
  platform: 'browser',
  define: {
    SETTINGS: JSON.stringify(settingJson),
  },
})
