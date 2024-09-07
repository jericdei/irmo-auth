import { validator } from "hono/validator";
import Login from "../../views/auth/login";
import { z } from "zod";
import { db } from "../../database";
import { users } from "../../database/schema";
import { eq } from "drizzle-orm";

const loginHandler = validator("form", async (value, c) => {
  const redirectWithError = (error: string) =>
    c.render(<Login error={error} />);

  const schema = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  const { error, success, data } = schema.safeParse(value);

  if (!success) {
    return redirectWithError(error.errors.map((x) => x.message).join("\n"));
  }

  const { email, password } = data;

  const [user] = await db.select().from(users).where(eq(users.email, email));

  const validPassword = await Bun.password.verify(password, user.password);

  if (!user || !validPassword) {
    return redirectWithError("Invalid credentials!");
  }

  const session = c.get("session");

  session.set("user", user);

  return c.redirect(c.req.path);
});

export default loginHandler;
