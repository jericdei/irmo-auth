import { User } from "../database/schema";
import Button from "./components/button";
import Template from "./template";

export default function Index({ user }: { user: User }) {
  return (
    <Template title="Home Page">
      <h1 className="text-3xl font-bold">Home Page</h1>

      <div className="mt-16">
        <p className="mb-4">You are logged in as {user.name}</p>

        <form
          action="/auth/logout"
          method="post"
        >
          <Button>Logout</Button>
        </form>
      </div>
    </Template>
  );
}
