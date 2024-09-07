import Input from "../components/input";
import Template from "../template";

export default function Login() {
  return (
    <Template title="Login">
      <div className="grid place-items-center min-h-screen">
        <form action="/auth/login" method="post" enctype="application/x-www-form-urlencoded">
          <h1 className="font-bold text-3xl mb-8">Login to your account</h1>
          <div className="flex flex-col gap-4">
            <Input name="email" type="email" placeholder="Email" />
            <Input name="password" type="password" placeholder="Password" />

            <Input type="submit" />
          </div>
        </form>
      </div>
    </Template>
  )
}
