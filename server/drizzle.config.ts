import { defineConfig } from 'drizzle-kit'
import { env } from './src/env'

// export default defineConfig({
//   schema: './src/db/schema.ts',
//   out: './.migrations',
//   dialect: 'postgresql',
//   dbCredentials: {
//     url: env.DATABASE_URL,
//   },
// })

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/db/schema.ts',
  out: './drizzle',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
})
