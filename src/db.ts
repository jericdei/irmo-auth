import { Database } from 'bun:sqlite'
import { BunSqliteStore } from 'hono-sessions/bun-sqlite-store'

const db = new Database('./database.sqlite')
const store = new BunSqliteStore(db)

export { db, store }
