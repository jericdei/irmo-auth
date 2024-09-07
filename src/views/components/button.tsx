import { JSX, PropsWithChildren } from "hono/jsx";
import { cn } from "../../lib/utils";

type ButtonHTMLAttributes = JSX.IntrinsicElements["button"];

interface ButtonProps extends PropsWithChildren<ButtonHTMLAttributes> {}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-lg bg-indigo-700 px-4 py-2 text-zinc-200 hover:bg-indigo-600",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
