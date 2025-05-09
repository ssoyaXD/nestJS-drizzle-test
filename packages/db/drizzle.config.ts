import type { Config } from 'drizzle-kit'

export default {
  schema: './schema.ts',
  out: './migrations',
  dialect: 'postgresql',
  dbCredentials: {
    host: 'localhost',
    port: 5433,
    user: 'postgres',
    password: 'postgres',
    database: 'testDB',
  },
} satisfies Config
