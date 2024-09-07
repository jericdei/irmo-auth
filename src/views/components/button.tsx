import { JSX, PropsWithChildren } from "hono/jsx";
import { cn } from "../../lib/utils";

type ButtonHTMLAttributes = JSX.IntrinsicElements['button']

interface ButtonProps extends PropsWithChildren<ButtonHTMLAttributes> { }

export default function Button({ children, className, ...props }: ButtonProps) {
  return <button className={cn("px-4 py-2 bg-indigo-700 hover:bg-indigo-600 text-zinc-200 rounded-lg", className)} {...props}>{children}</button>
}
