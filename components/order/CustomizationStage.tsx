import { Field, Form, FormikProps } from "formik";
import Order from "../../interfaces/Order";
import FormikFormStage, {
  NextFormikStage,
} from "../../utils/forms/FormikFormStage";

class CustomizationStage extends FormikFormStage<
  Pick<Order, "includeAdditions">
> {
  constructor(nextStage: NextFormikStage<Order> = undefined) {
    super({ includeAdditions: false }, nextStage);
  }

  protected renderFormik(
    props: FormikProps<Pick<Order, "includeAdditions">>
  ): JSX.Element {
    return (
      <Form>
        <Field name="includeAdditions" type="checkbox" />
      </Form>
    );
  }
  validate(values: Pick<Order, "includeAdditions">): {
    includeAdditions?: string;
  } {
    return {};
  }
  renderCompleted(
    state: Pick<Order, "includeAdditions">,
    onStageClick: () => void
  ): JSX.Element {
    return (
      <button className="cursur-pointer bold" onClick={onStageClick}>
        {state.includeAdditions}
      </button>
    );
  }
}

export default CustomizationStage;
