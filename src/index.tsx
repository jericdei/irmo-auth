import { Hono } from 'hono'
import { session, type Session } from './session'
import auth from './routers/auth'
import { serveStatic } from 'hono/bun'
import { User } from './database/schema'
import { authMiddleware } from './middlewares/authMiddleware'
import Index from './views'

const app = new Hono<Session>()

app.use('*', serveStatic({
  root: "./public",
}))

app.use('*', session)

app.get('/', authMiddleware, (c) => c.render(<Index user={c.get('user')} />))

app.route("/auth", auth)

export default {
  port: 6969,
  fetch: app.fetch
}
