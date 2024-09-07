import Button from "../components/button";
import Input from "../components/input";
import Template from "../template";

export default function Register({ error }: { error?: string }) {
  return (
    <Template title="Register">
      <div className="grid min-h-screen place-items-center">
        <form
          action="/auth/register"
          method="post"
          enctype="application/x-www-form-urlencoded"
        >
          <h1 className="mb-3 text-3xl font-bold">Register</h1>
          {error && <pre className="text-red-700">{error}</pre>}

          <div className="mb-8 mt-2 flex flex-col gap-4">
            <Input
              name="name"
              type="text"
              placeholder="Name"
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
            />
            <Input
              name="passwordConfirmation"
              type="password"
              placeholder="Confirm Password"
            />

            <Button>Register</Button>
          </div>
        </form>
      </div>
    </Template>
  );
}
