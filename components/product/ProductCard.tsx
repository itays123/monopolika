import clsx from "clsx";
import Card from "../base/Card";
import { ClassName } from "../types";
import Link from "next/link";
import strings from "../../strings";

export const PRODUCT_CARD_VARIANTS = [
  "cyan",
  "pink",
  "orange",
  "emerald",
] as const;

export interface ProductCardProps extends ClassName {
  variant?: typeof PRODUCT_CARD_VARIANTS[number];
  title: string;
  description: string;
  readMorePath?: string;
}

export default function ProductCard({
  className,
  variant = "cyan",
  title,
  description,
  readMorePath = "/",
}: ProductCardProps) {
  return (
    <Card className={clsx("px-0 py-0 flex flex-col", className)}>
      <div
        className={clsx("min-h-[96px] flex-grow bg-gradient-to-br", {
          "gradient-cyan": variant === "cyan",
          "gradient-pink": variant === "pink",
          "gradient-orange": variant === "orange",
          "gradient-emerald": variant === "emerald",
        })}
      ></div>
      <div className="p-3 flex flex-col">
        <h3 className="font-header">{title}</h3>
        <div className="text-slate-600">{description}</div>
        <Link href={readMorePath}>
          <a className="text-cyan-600 self-end select-none">
            {strings.READ_MORE}
          </a>
        </Link>
      </div>
    </Card>
  );
}
