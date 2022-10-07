import clsx from "clsx";
import Card from "../base/Card";
import { ClassName } from "../types";
import Link from "next/link";
import strings from "../../strings";
import Product from "../../interfaces/Product";
import Image from "next/image";
import { productPage } from "../navigation/linkBuilder";

export const PRODUCT_CARD_VARIANTS = [
  "cyan",
  "pink",
  "orange",
  "emerald",
] as const;

export interface ProductCardProps
  extends ClassName,
    Pick<Product, "title" | "description" | "coverImageUrl" | "id"> {
  variant?: typeof PRODUCT_CARD_VARIANTS[number];
}

export default function ProductCard({
  className,
  variant = "cyan",
  title,
  description,
  coverImageUrl,
  id,
}: ProductCardProps) {
  return (
    <Card className={clsx("px-0 py-0 flex flex-col", className)}>
      <div
        className={clsx("flex-grow bg-gradient-to-br py-2", {
          "gradient-cyan": variant === "cyan",
          "gradient-pink": variant === "pink",
          "gradient-orange": variant === "orange",
          "gradient-emerald": variant === "emerald",
        })}
      >
        <div className="min-h-[120px] relative mx-auto">
          <Image
            src={coverImageUrl}
            alt={strings.PRODUCT_IMAGE}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="p-3 flex flex-col">
        <h3 className="font-header">{title}</h3>
        <div className="text-slate-600">{description}</div>
        <Link href={productPage(id)}>
          <a className="text-cyan-600 self-end select-none">
            {strings.READ_MORE}
          </a>
        </Link>
      </div>
    </Card>
  );
}
