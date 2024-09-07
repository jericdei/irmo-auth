import { Hono } from "hono";
import Login from "../views/auth/login";

const auth = new Hono()

auth.get('/login', ({ render }) => render(<Login />))

auth.post('/login', async (c) => {
  console.log(await c.req.formData())

  return c.redirect('/')
})

export default auth
