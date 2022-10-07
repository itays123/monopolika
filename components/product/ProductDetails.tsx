import clsx from "clsx";
import Image from "next/image";
import Product from "../../interfaces/Product";
import strings from "../../strings";
import Button from "../base/Button";
import MultiLineText from "../base/MultiLineText";
import { ClassName } from "../types";
import ProductPrice from "./ProductPrice";

export interface IProductDetails
  extends Pick<
    Product,
    "title" | "description" | "coverImageUrl" | "basePrice" | "additionsPrice"
  > {}

export interface ProductDetailsProps extends ClassName, IProductDetails {}

export default function ProductDetails({
  title,
  description,
  coverImageUrl,
  basePrice,
  additionsPrice,
  className,
}: ProductDetailsProps) {
  return (
    <div className={clsx("flex justify-center gap-16 items-center", className)}>
      <div className="min-w-[200px] min-h-[200px] relative">
        <Image src={coverImageUrl} alt="" layout="fill" objectFit="contain" />
      </div>
      <div className="flex flex-col gap-2 flex-grow">
        <h1 className="font-bold text-7xl">{title}</h1>
        <p className="text-xl">
          <MultiLineText text={description} />
          <ProductPrice basePrice={basePrice} additionsPrice={additionsPrice} />
        </p>
        <Button className="self-end">{strings.ORDER_ONE}</Button>
      </div>
    </div>
  );
}
