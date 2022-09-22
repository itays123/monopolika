import clsx from "clsx";
import Card from "../base/Card";
import { ClassName } from "../types";
import Link from "next/link";
import strings from "../../strings";

export interface ProductCardProps extends ClassName {
    variant?: 'cyan' | 'pink' | 'orange' | 'emerald';
    title: string;
    description: string;
    readMorePath?: string;
}

export default function ProductCard({ className, variant = 'cyan', title, description, readMorePath = "/" }: ProductCardProps) {
    return (
        <Card className={clsx("px-0 py-0 flex flex-col",className)}>
            <div className={clsx("min-h-[96px] flex-grow", {
                "bg-gradient-to-br from-cyan-300 to-cyan-600": variant === 'cyan',
                "bg-gradient-to-br from-pink-300 to-pink-600": variant === 'pink',
                "bg-gradient-to-br from-orange-300 to-orange-600": variant === 'orange',
                "bg-gradient-to-br from-emerald-300 to-emerald-600": variant === 'emerald',
            })}></div>
            <div className="p-3 flex flex-col">
                <h3 className="font-header">{title}</h3>
                <div className="text-slate-600">{description}</div>
                <Link href={readMorePath} ><a className="text-cyan-600 self-end select-none">{strings.READ_MORE}</a></Link>
            </div>
        </Card>
    )
}