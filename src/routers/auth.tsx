import { Hono } from "hono";
import Login from "../views/auth/login";

const auth = new Hono()

auth.get('/login', ({ render }) => render(<Login />))

auth.post('/login', async (c) => {
  const body = await c.req.parseBody()

  console.log(body)

  return c.redirect('/')
})

export default auth
