import { Session as HonoSession, sessionMiddleware } from "hono-sessions";
import { BunSqliteStore } from "hono-sessions/bun-sqlite-store";
import { sqlite } from "./database";
import { User } from "./database/schema";

const sessionStore = new BunSqliteStore(sqlite);

const session = sessionMiddleware({
  store: sessionStore,
  encryptionKey: Bun.env.AUTH_KEY,
  expireAfterSeconds: 900,
  cookieOptions: {
    sameSite: "Lax",
    path: "/",
    httpOnly: true,
  },
});

type Session = {
  Variables: {
    session: HonoSession;
    session_key_rotation: boolean;
    error: string;
    user: User;
  };
};

export { session, type Session };
