import { ErrorMessage, Field, Form, Formik } from "formik";
import NextButton from "../components/forms/NextButton";
import Stage from "../components/forms/stages/Stage";
import StageContextProvider from "../components/forms/stages/StageContext";
import { membersOfEnum } from "../utils/typescript";

enum Stages {
  Email,
  Password,
}

const NUMBER_OF_STAGES = membersOfEnum(Stages);

export default function TestPage() {
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
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));

          setSubmitting(false);
        }, 400);
      }}
      isInitialValid={false}
    >
      {({ isSubmitting, isValid }) => (
        <Form>
          <StageContextProvider
            initialStage={Stages.Email}
            limit={NUMBER_OF_STAGES}
          >
            <Stage idx={Stages.Email}>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
              <NextButton>הבא</NextButton>
            </Stage>
            <Stage idx={Stages.Password}>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              <button type="submit" disabled={isSubmitting || !isValid}>
                הבא
              </button>
            </Stage>
          </StageContextProvider>
        </Form>
      )}
    </Formik>
  );
}
