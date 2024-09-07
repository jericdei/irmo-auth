import { Session as HonoSession, sessionMiddleware } from "hono-sessions"
import { store } from "./db"

const session = sessionMiddleware({
  store,
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
