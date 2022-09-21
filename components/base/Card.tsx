import clsx from "clsx";
import { ClassName, Container } from "../types";

export interface ICardProps extends ClassName, Container {
    
}

export default function Card({ className, children }: ICardProps) {
    return (
        <div className={clsx("shadow-xl bg-slate-50 m-2 px-4 py-8 rounded-[18px] overflow-hidden", className)}>
            {children}
        </div>
    )
}