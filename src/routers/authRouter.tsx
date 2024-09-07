import { Hono } from "hono";
import Login from "../views/auth/login";
import Register from "../views/auth/register";
import { authMiddleware, guestMiddleware } from "../middlewares/authMiddleware";
import { Session } from "../session";
import loginHandler from "../handlers/auth/loginHandler";
import registerHandler from "../handlers/auth/registerHandler";

const authRouter = new Hono<Session>();

authRouter.get("/login", guestMiddleware, ({ render }) => render(<Login />));
authRouter.post("/login", loginHandler);
authRouter.get("/register", guestMiddleware, (c) => c.render(<Register />));
authRouter.post("/register", registerHandler);
authRouter.post("/logout", authMiddleware, (c) => {
  const session = c.get("session");

  session.deleteSession();

  return c.redirect("/auth/login");
});

export default authRouter;
