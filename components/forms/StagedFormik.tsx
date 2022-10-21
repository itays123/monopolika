import { Formik, FormikConfig } from "formik";
import FormStages, {
  StageContextProviderProps,
  StagesConsumer,
} from "./stages/FormStages";

export interface StagedFormikProps<Values>
  extends FormikConfig<Values>,
    Pick<StageContextProviderProps, "initialStage" | "limit"> {}

export default function StagedFormik<Values>({
  initialStage,
  limit,
  ...props
}: StagedFormikProps<Values>) {
  return (
    <FormStages initialStage={initialStage} limit={limit}>
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
    </FormStages>
  );
}
