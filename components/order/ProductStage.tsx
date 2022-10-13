import { Field, Form, FormikProps } from "formik";
import Order from "../../interfaces/Order";
import FormikFormStage, {
  NextFormikStage,
} from "../../utils/forms/FormikFormStage";
import useFocusOnRender from "../forms/useFocusOnRender";

class ProductStage extends FormikFormStage<Pick<Order, "productId">> {
  constructor(nextStage: NextFormikStage<Order> = undefined) {
    super({ productId: "" }, nextStage);
  }

  protected renderFormik({
    isSubmitting,
  }: FormikProps<Pick<Order, "productId">>): JSX.Element {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useFocusOnRender();
    return (
      <Form>
        <Field name="productId" innerRef={ref} />
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    );
  }

  validate(values: Pick<Order, "productId">): { productId?: string } {
    return values.productId === "" ? { productId: "Must Pick an Option" } : {};
  }

  renderCompleted(
    { productId }: Pick<Order, "productId">,
    onStageClick: () => void
  ): JSX.Element {
    return (
      <button className="cursur-pointer bold" onClick={onStageClick}>
        {productId}
      </button>
    );
  }
}

export default ProductStage;
