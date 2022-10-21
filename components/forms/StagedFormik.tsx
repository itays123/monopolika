import { Formik, FormikConfig } from "formik";
import Stages, { StagesProps, StagesConsumer } from "./stages/Stages";

export interface StagedFormikProps<Values>
  extends FormikConfig<Values>,
    Pick<StagesProps, "initialStage" | "limit"> {}

export default function StagedFormik<Values>({
  initialStage,
  limit,
  ...props
}: StagedFormikProps<Values>) {
  return (
    <Stages initialStage={initialStage} limit={limit}>
      <StagesConsumer>
        {({ next, isLast }) => (
          <Formik
            {...props}
            onSubmit={(values, ctx) => {
              if (!isLast) {
                next();
                ctx.setSubmitting(false);
              } else {
                props.onSubmit(values, ctx);
              }
            }}
          />
        )}
      </StagesConsumer>
    </Stages>
  );
}
