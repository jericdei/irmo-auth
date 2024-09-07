import { Hono } from "hono";
import { session, type Session } from "./session";
import authRouter from "./routers/authRouter";
import { serveStatic } from "hono/bun";
import { authMiddleware } from "./middlewares/authMiddleware";
import Index from "./views";

const app = new Hono<Session>();

app.use(
  "*",
  serveStatic({
    root: "./public",
  }),
);

app.use("*", session);

app.get("/", authMiddleware, (c) => c.render(<Index user={c.get("user")} />));

app.route("/auth", authRouter);

export default {
  port: 6969,
  fetch: app.fetch,
};
