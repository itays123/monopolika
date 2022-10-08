import {
  Fragment,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import FormStage from "./FormStage";

type Stage<FormResult> = FormStage<Partial<FormResult>, ReactNode>;

export default function useFormStages<FormResult>(
  initialStages: [Stage<FormResult>],
  submit: (res: FormResult) => Promise<void>
) {
  const data = useRef({} as FormResult);
  const stages = useRef(initialStages);
  const [currentStageIdx, setCurrentStageIdx] = useState(
    stages.current.length - 1
  );

  useEffect(() => {
    const isLastStage = currentStageIdx === stages.current.length - 1;
    const currentStage = stages.current[currentStageIdx];
    currentStage.onComplete(async (values) => {
      data.current = { ...data.current, ...values };

      // add next stage if needed
      if (!isLastStage) {
        setCurrentStageIdx((i) => i + 1);
        return;
      }

      if (currentStage.nextStage) {
        stages.current.push(
          currentStage.nextStage(values) as Stage<FormResult>
        );
        setCurrentStageIdx((i) => i + 1);
        return;
      }

      await submit(data.current);
    });
  }, [currentStageIdx, submit]);

  return useMemo(() => {
    return [
      stages.current[currentStageIdx].renderForm(data.current),
      stages.current
        .filter((_, idx) => idx < currentStageIdx)
        .map((stage, idx) => (
          <Fragment key={idx}>
            {stage.renderCompleted(data.current, () => setCurrentStageIdx(idx))}
          </Fragment>
        )),
    ];
  }, [currentStageIdx]);
}
