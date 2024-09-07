import Button from "../components/button";
import Input from "../components/input";
import Template from "../template";

export default function Login({ error }: { error?: string }) {
  return (
    <Template title="Login">
      <div className="grid place-items-center min-h-screen">
        <form action="/auth/login" method="post" enctype="application/x-www-form-urlencoded">
          <h1 className="font-bold text-3xl mb-3">Login to your account</h1>
          {error && <small className="text-red-700">{error}</small>}

          <div className="flex flex-col gap-4 mb-8 mt-2">
            <Input name="email" type="email" placeholder="Email" />
            <Input name="password" type="password" placeholder="Password" />

            <Button>Login</Button>

            <p>Don't have an account? <a href="/auth/register" className="underline">Register</a></p>
          </div>
        </form>
      </div>
    </Template>
  )
}
