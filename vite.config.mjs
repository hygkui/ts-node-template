
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // ... Specify options here.
      testTimeout: 10 * 1000
  },
})