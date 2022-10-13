import { Formik, FormikProps } from "formik";
import FormStage, { NextStage } from "./FormStage";

export type NextFormikStage<Fields> = NextStage<Fields, JSX.Element>;

abstract class FormikFormStage<Fields extends {}> extends FormStage<
  Fields,
  JSX.Element
> {
  protected abstract renderFormik(props: FormikProps<Fields>): JSX.Element;

  protected renderFormFromState(state: Fields, stageIdx: number): JSX.Element {
    return (
      <Formik
        key={stageIdx} // phew! that was hard to debug
        component={this.renderFormik}
        initialValues={state}
        validate={this.validate}
        onSubmit={(values, { setSubmitting }) => {
          this.completeHandler(values).then(() => {
            setSubmitting(false);
          });
        }}
      />
    );
  }
}

export default FormikFormStage;
