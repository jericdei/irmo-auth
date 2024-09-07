import { Session as HonoSession, sessionMiddleware } from "hono-sessions"
import { BunSqliteStore } from 'hono-sessions/bun-sqlite-store'
import { db } from "./db"

const sessionStore = new BunSqliteStore(db)

const session = sessionMiddleware({
  store: sessionStore,
  encryptionKey: Bun.env.AUTH_KEY,
  expireAfterSeconds: 900,
  cookieOptions: {
    sameSite: 'Lax',
    path: '/',
    httpOnly: true
  }
})

type Session = {
  Variables: {
    session: HonoSession,
    session_key_rotation: boolean
  }
}

export { session, type Session }
