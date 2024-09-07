import { JSX } from "hono/jsx"
import { cn } from "../../lib/utils"

type InputHTMLAttributes = JSX.IntrinsicElements['input']

interface InputProps extends InputHTMLAttributes {
  placeholder?: string
}

export default function Input({ className, ...props }: InputProps) {
  return <input class={cn('bg-zinc-700', className)} {...props} />
}
