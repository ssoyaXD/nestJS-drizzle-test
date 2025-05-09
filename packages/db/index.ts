// packages/db/index.ts
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

const pool = new Pool({
    host: 'localhost',
    port: 5433,
    user: 'postgres',
    password: 'postgres',
    database: 'testDB',
    max: 10
});

// DB 연결 확인
pool.connect()
    .then((client: { release: () => void; }) => {
        console.log('DB 연결 성공');
        client.release();
    })
    .catch((err: { stack: any; }) => {
        console.error('DB 연결 실패', err.stack);
    });

export const db = drizzle(pool, { schema });
export type DrizzleDb = typeof db;
export * from './schema';