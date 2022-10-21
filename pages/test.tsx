import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import NextButton from "../components/forms/NextButton";
import Stage from "../components/forms/stages/Stage";
import FormStages, { useStages } from "../components/forms/stages/FormStages";
import { membersOfEnum } from "../utils/typescript";

enum Stages {
  Email,
  Password,
}

const NUMBER_OF_STAGES = membersOfEnum(Stages);

export const StagedFormikForm = ({ children }: any) => {
  const { next, isLast } = useStages();
  return (
    <Formik
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
        if (!isLast) {
          next();
          setSubmitting(false);
        } else {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

            setSubmitting(false);
          }, 400);
        }
      }}
      isInitialValid={false}
    >
      {children}
    </Formik>
  );
};

export default function TestPage() {
  return (
    <FormStages initialStage={Stages.Email} limit={NUMBER_OF_STAGES}>
      <StagedFormikForm>
        {({ isSubmitting, isValid }) => (
          <>
            <Stage idx={Stages.Email} stageCompletedDisplay={() => <>email</>}>
              <Form>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
                <button type="submit" disabled={isSubmitting || !isValid}>
                  הבא
                </button>
              </Form>
            </Stage>
            <Stage idx={Stages.Password}>
              <Form>
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
                <button type="submit" disabled={isSubmitting || !isValid}>
                  הבא
                </button>
              </Form>
            </Stage>
          </>
        )}
      </StagedFormikForm>
    </FormStages>
  );
}
