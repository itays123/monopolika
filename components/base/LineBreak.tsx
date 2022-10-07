import clsx from "clsx";
import { ClassName } from "../types";

export interface LineBreakProps extends ClassName {}

export default function LineBreak({ className }: LineBreakProps) {
  return (
    <div className={clsx("w-full h-[1px] bg-slate-900 my-8", className)}></div>
  );
}
