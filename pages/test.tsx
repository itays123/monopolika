import { Field, Form, FormikProps } from "formik";
import { ReactNode } from "react";
import FormikFormStage from "../utils/forms/FormikFormStage";
import useFormStages from "../utils/forms/useFormStages";

class Stage2 extends FormikFormStage<{ email: string }> {
  constructor() {
    super({ email: "" }, undefined);
  }

  protected renderFormik({
    isSubmitting,
  }: FormikProps<{ email: string }>): JSX.Element {
    return (
      <Form>
        <Field name="email" type="email" />
        {isSubmitting && "Wait..."}
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    );
  }

  validate(values: { email: string }): { email?: string } {
    const errors = {} as { email?: string };
    if (values.email.trim() === "") errors.email = "Name cannot be empty";
    if (values.email.trim() === "Itay") errors.email = "Name cannot be Itay";
    return errors;
  }

  renderCompleted(
    state: { email: string },
    onStageClick: () => void
  ): JSX.Element {
    return <button onClick={onStageClick}>{state.email}</button>;
  }
}

class Stage1 extends FormikFormStage<{ name: string }> {
  constructor() {
    super({ name: "" }, () => {
      return new Stage2();
    });
  }

  protected renderFormik({
    isSubmitting,
  }: FormikProps<{ name: string }>): JSX.Element {
    return (
      <Form>
        <Field name="name" />
        {isSubmitting && "Wait..."}
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    );
  }

  validate(values: { name: string }): { name?: string } {
    const errors = {} as { name?: string };
    if (values.name.trim() === "") errors.name = "Name cannot be empty";
    if (values.name.trim() === "Itay") errors.name = "Name cannot be Itay";
    return errors;
  }

  renderCompleted(
    state: { name: string },
    onStageClick: () => void
  ): JSX.Element {
    return <button onClick={onStageClick}>{state.name}</button>;
  }
}

export default function TestPage() {
  const [currentStage, previousStages] = useFormStages<{
    name: string;
    email: string;
  }>(
    [new Stage1()],
    ({ name, email }) =>
      new Promise((res) => {
        setTimeout(() => {
          console.log(name, email);
          res();
        }, 2000);
      })
  );
  return (
    <div>
      {previousStages}
      {currentStage}
    </div>
  );
}
