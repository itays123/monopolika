import Product from "../../interfaces/Product";
import strings from "../../strings";

export interface ProductPriceProps
  extends Pick<Product, "basePrice" | "additionsPrice"> {}

export default function ProductPrice({
  basePrice,
  additionsPrice,
}: ProductPriceProps) {
  return (
    <>
      <span className="font-bold text-xl">
        {basePrice}
        {strings.CURRENCY}
      </span>
      <span> · </span>
      <span>
        {strings.CAN_ADD} {additionsPrice}
        {strings.CURRENCY} {strings.FOR_ADDITIONS}
      </span>
    </>
  );
}
