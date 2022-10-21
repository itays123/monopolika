import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import Stage from "../components/forms/stages/Stage";
import FormStages, { useStages } from "../components/forms/stages/FormStages";
import { membersOfEnum } from "../utils/typescript";
import StagedFormik from "../components/forms/StagedFormik";

enum Stages {
  Email,
  Password,
}

const NUMBER_OF_STAGES = membersOfEnum(Stages);

export default function TestPage() {
  return (
    <StagedFormik
      initialStage={Stages.Email}
      limit={NUMBER_OF_STAGES}
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {} as { [k in keyof typeof values]: string };

        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));

          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <Form>
          <Stage idx={Stages.Email} stageCompletedDisplay={() => <>email</>}>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <button type="submit" disabled={isSubmitting || !isValid}>
              הבא
            </button>
          </Stage>
          <Stage idx={Stages.Password}>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting || !isValid}>
              הבא
            </button>
          </Stage>
        </Form>
      )}
    </StagedFormik>
  );
}
