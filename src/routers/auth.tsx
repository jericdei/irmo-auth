import { Hono } from "hono";
import Login from "../views/auth/login";
import { validator } from "hono/validator";
import { db } from "../database";
import { users } from "../database/schema";
import { eq } from "drizzle-orm";
import Register from "../views/auth/register";
import { z } from "zod";
import { authMiddleware, guestMiddleware } from "../middlewares/authMiddleware";
import { Session } from "../session";

const auth = new Hono<Session>()

auth.get('/login', guestMiddleware, ({ render }) => render(<Login />))

auth.post('/login', validator('form', async (value, c) => {
  const redirectWithError = (error: string) => c.render(<Login error={error} />)

  const schema = z.object({
    email: z.string().email(),
    password: z.string(),
  })

  const { error, success, data } = schema.safeParse(value)

  if (!success) {
    return redirectWithError(error.errors.map(x => x.message).join('\n'))
  }

  const { email, password } = data

  const [user] = await db.select().from(users).where(eq(users.email, email))

  const validPassword = await Bun.password.verify(password, user.password)

  if (!user || !validPassword) {
    return redirectWithError("Invalid credentials!")
  }

  const session = c.get('session')

  session.set('user', user)

  return c.redirect(c.req.path)
}))

auth.get('/register', guestMiddleware, (c) => c.render(<Register />))

auth.post('/register', validator('form', async (value, c) => {
  const redirectWithError = (error: string) => c.render(<Register error={error} />)

  const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email(),
    password: z.string().min(1, "Password is required"),
    passwordConfirmation: z.string().min(1, "Confirm Password is required"),
  }).refine(data => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ['confirm']
  })

  const { success, data, error } = schema.safeParse(value)

  if (!success) {
    return redirectWithError(error.errors.map(x => x.message).join('\n'))
  }

  const [existing] = await db.select().from(users).where(eq(users.email, data.email))

  if (existing) {
    return redirectWithError("Email already used.")
  }

  const [user] = await db.insert(users).values({
    name: data.name,
    email: data.email,
    password: await Bun.password.hash(data.password),
  }).returning()

  const session = c.get('session')

  session.set('user', user)

  return c.redirect('/')
}))

auth.post('/logout', authMiddleware, (c) => {
  const session = c.get('session')

  session.deleteSession()

  return c.redirect('/auth/login')
})

export default auth
