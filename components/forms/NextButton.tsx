import { useFormikContext } from "formik";
import { ClassName, Container } from "../types";
import { useStages } from "./stages/FormStages";

export interface NextButtonProps extends Container, ClassName {}

export default function NextButton({ children, className }: NextButtonProps) {
  const { next } = useStages();
  const { isValid, isSubmitting } = useFormikContext();
  return (
    <button
      type="button"
      onClick={next}
      disabled={!isValid || isSubmitting}
      className={className}
    >
      {children}
    </button>
  );
}
