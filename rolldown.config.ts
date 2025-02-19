import { defineConfig } from 'rolldown'
import { version } from './package.json'

export default defineConfig({
  input: [
    'src/index.ts',
    'src/cli.ts',
  ],
  output: {
    dir: 'dist',
    format: 'esm',
  },
  platform: 'node',
  define: {
    __CATALYST_VERSION__: JSON.stringify(version),
  },
})
