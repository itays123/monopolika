import { FormikProps } from "formik";
import { ReactNode } from "react";
import Order from "../../interfaces/Order";
import FormikFormStage, {
  NextFormikStage,
} from "../../utils/forms/FormikFormStage";

class ProductStage extends FormikFormStage<Pick<Order, "productId">> {
  constructor(nextStage: NextFormikStage<Order> = undefined) {
    super({ productId: "" }, nextStage);
  }

  protected renderFormik({
    setFieldValue,
    values,
  }: FormikProps<Pick<Order, "productId">>): JSX.Element {
    throw new Error("Method not implemented.");
  }

  validate(values: Pick<Order, "productId">): { productId?: string } {
    return values.productId === "" ? { productId: "Must Pick an Option" } : {};
  }

  renderCompleted(
    { productId }: Pick<Order, "productId">,
    onStageClick: () => void
  ): ReactNode {
    return (
      <button className="cursur-pointer bold" onClick={onStageClick}>
        {productId}
      </button>
    );
  }
}

export default ProductStage;
