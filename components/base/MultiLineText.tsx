import clsx from "clsx";
import { createElement } from "react";
import { ClassName } from "../types";

export interface IMultiLineTextProps extends ClassName {
  as?: "p" | "h1" | "h2" | "h3" | "div" | "span";
  text: string;
}

export default function MultiLineText({
  className,
  as = "span",
  text,
}: IMultiLineTextProps) {
  return (
    <>
      {text
        .split("\n")
        .map((line, i) =>
          createElement(
            as,
            { className: clsx("block", className), key: i },
            line
          )
        )}
    </>
  );
}
