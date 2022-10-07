import clsx from "clsx";
import { ClassName, Container } from "../types";

export type ButtonVariant = "cyan" | "pink";

export interface IButtonProps extends ClassName, Container {
  variant?: ButtonVariant;
}

export default function Button({
  className,
  children,
  variant = "cyan",
}: IButtonProps) {
  return (
    <button
      className={clsx(
        "px-6 py-2 rounded-full font-bold",
        {
          "bg-cyan-500 text-slate-50": variant == "cyan",
          "bg-pink-500 text-slate-50": variant == "pink",
        },
        className
      )}
    >
      {children}
    </button>
  );
}
