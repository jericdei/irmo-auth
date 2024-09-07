import { PropsWithChildren } from "hono/jsx";

export default function Template({
  title,
  children,
}: PropsWithChildren<{ title: string }>) {
  return (
    <html
      lang="en"
      class="dark"
    >
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <link
          rel="stylesheet"
          href="/css/index.css"
        />
        <title>{title}</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
