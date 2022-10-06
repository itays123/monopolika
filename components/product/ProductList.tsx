import clsx from "clsx";
import { ClassName } from "../types";
import ProductCard, {
  ProductCardProps,
  PRODUCT_CARD_VARIANTS,
} from "./ProductCard";

export interface ProductListProps extends ClassName {
  products: Exclude<ProductCardProps, "variant" | "className">[];
}

function pickVariant(index: number): ProductCardProps["variant"] {
  const variantCount = PRODUCT_CARD_VARIANTS.length;
  return PRODUCT_CARD_VARIANTS[index % variantCount];
}

export default function ProductList({ className, products }: ProductListProps) {
  return (
    <div className={clsx("", className)}>
      {products.map((product, key) => (
        <ProductCard {...product} key={key} variant={pickVariant(key)} />
      ))}
    </div>
  );
}
