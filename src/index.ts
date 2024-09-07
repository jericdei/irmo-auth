import { Hono } from 'hono'
import { session, type Session } from './session'

const app = new Hono<Session>()

app.use('*', session)

app.get('/', (c) => {
  const session = c.get('session')

  if (session.get('counter')) {
    session.set('counter', session.get('counter') as number + 1)
  } else {
    session.set('counter', 1)
  }

  return c.html(`<h1>You have visited this page ${session.get('counter')} times</h1>`)
})

export default {
  port: 6969,
  fetch: app.fetch
}
