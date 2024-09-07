import { Hono } from 'hono'
import { session, type Session } from './session'
import auth from './routers/auth'
import { serveStatic } from 'hono/bun'
import { User } from './database/schema'

const app = new Hono<Session>()

app.use('*', serveStatic({
  root: "./public",
}))

app.use('*', session)

app.get('/', (c) => {
  const session = c.get('session')

  const user = session.get('user') as User

  if (!user) {
    return c.redirect('/auth/login')
  }

  return c.html(`You are now logged in as ${user.name}`)
})

app.route("/auth", auth)

export default {
  port: 6969,
  fetch: app.fetch
}
