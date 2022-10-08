import { Formik, FormikProps } from "formik";
import { ReactNode } from "react";
import FormStage from "./FormStage";

abstract class FormikFormStage<Fields extends {}> extends FormStage<
  Fields,
  ReactNode
> {
  protected abstract renderFormik(props: FormikProps<Fields>): JSX.Element;

  protected renderFormFromState(state: Fields): ReactNode {
    return (
      <Formik
        key={JSON.stringify(state)} // phew! that was hard to debug
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
