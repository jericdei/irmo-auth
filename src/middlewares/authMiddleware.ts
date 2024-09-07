import { createMiddleware } from "hono/factory";
import { User } from "../database/schema";

export const authMiddleware = createMiddleware(async (c, next) => {
  const session = c.get('session')

  const user = session.get('user') as User | undefined

  if (!user) {
    return c.redirect('/auth/login')
  }

  c.set('user', user)

  await next()
})

export const guestMiddleware = createMiddleware(async (c, next) => {
  const session = c.get('session')

  const user = session.get('user') as User | undefined

  if (user) {
    return c.redirect('/')
  }

  await next()
})
