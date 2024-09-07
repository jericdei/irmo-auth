import Button from "../components/button";
import Input from "../components/input";
import Template from "../template";

export default function Register({ error }: { error?: string }) {
  return (
    <Template title="Register">
      <div className="grid place-items-center min-h-screen">
        <form action="/auth/register" method="post" enctype="application/x-www-form-urlencoded">
          <h1 className="font-bold text-3xl mb-3">Register</h1>
          {error && <pre className="text-red-700">{error}</pre>}

          <div className="flex flex-col gap-4 mb-8 mt-2">
            <Input name="name" type="text" placeholder="Name" />
            <Input name="email" type="email" placeholder="Email" />
            <Input name="password" type="password" placeholder="Password" />
            <Input name="passwordConfirmation" type="password" placeholder="Confirm Password" />

            <Button>Register</Button>
          </div>
        </form>
      </div>
    </Template>
  )
}
