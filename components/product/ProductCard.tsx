import clsx from "clsx";
import Card from "../base/Card";
import { ClassName, Container } from "../types";

export interface ProductCardProps extends ClassName, Container {
    variant?: 'cyan' | 'pink';
    title: string;
}

export default function ProductCard({ className, children, variant = 'cyan', title }: ProductCardProps) {
    return (
        <Card className={clsx("px-0 py-0 flex flex-col",className)}>
            <div className={clsx("min-h-[96px] flex-grow", {
                "bg-gradient-to-br from-cyan-300 to-cyan-600": variant === 'cyan',
                "bg-gradient-to-br from-pink-400 to-pink-600": variant === 'pink',
            })}></div>
            <div className="p-3 flex flex-col">
                <h3 className="font-header">{title}</h3>
                <div>{children}</div>
            </div>
        </Card>
    )
}