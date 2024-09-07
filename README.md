# IRMO (I Rolled My Own) Auth

This is a simple project that demonstrates how to create a credentials-based authentication in TypeScript.

## Technologies used

### [Bun](https://bun.sh)
The runtime I used because it has a lot of features out of the box like password hashing using `Bun.password` and an easy to use SQLite driver.

## [Hono](https://hono.dev)
I chose Hono as my HTTP library because it has a first-party integration with Bun and `bun-sqlite`

### [Hono Sessions](https://github.com/jcs224/hono_sessions)
I used this simple utility library to easily manipulate sessions using HTTP-only cookies. This also has good integration with `bun-sqlite`, so it's a pretty obvious choice.

### [Zod](https://zod.dev/)
To easily have good and easy input validation.

### [Drizzle](https://orm.drizzle.team/)
So I could have a typesafe models and an easy access to my database.

### [Tailwind](https://tailwindcss.com/)
I used Hono's JSX renderer for my templates, so I've added Tailwind to style things up easily.

#### [Tailwind Merge](https://www.npmjs.com/package/tailwind-merge) and [CLSX](https://www.npmjs.com/package/clsx)
To efficiently merge Tailwind classes in my template components.

## Running Locally

Install dependencies
```bash
bun install
```

Create a `.env` file for required environment variables
```bash
cp .env.example .env
```

Populate the `AUTH_KEY` with a string that is at least 32 characters in length. 

To easily generate one, you can use this command:

```bash
bunx uuid-cli

# should return a random UUID
dba0a66a-2af9-4983-8dfd-61bc94b268e4
```

Run the database migrations
```bash
bun db:push
```

Then you can now run the dev server
```bash
bun dev
```

The server will run on [http://localhost:6969]().
