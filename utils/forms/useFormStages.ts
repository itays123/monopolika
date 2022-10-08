import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import FormStage from "./FormStage";

type Stage<FormResult> = FormStage<Partial<FormResult>, ReactNode>;

export default function useFormStages<FormResult>(initialStage: Stage<FormResult>, submit: (res: FormResult) => Promise<void>) {
    const data = useRef({} as FormResult);
    const stages = useRef([initialStage]);
    const [currentStageIdx, setCurrentStageIdx] = useState(0);

    useEffect(() => {
        const isLastStage = currentStageIdx === stages.current.length - 1;
        const currentStage = stages.current[currentStageIdx]
        currentStage.onComplete(async (values) => {
            data.current = { ...data.current, ...values }

            // add next stage if needed
            if (!isLastStage) {
                setCurrentStageIdx(i => i + 1);
                return;
            }
            
            const nextStage = currentStage.nextStage(values);
            if (nextStage) {
                setCurrentStageIdx(i => i + 1);
                return;
            }

            await submit(data.current);
        })
    }, [currentStageIdx, submit])

    return useMemo(() => ([
        stages.current[currentStageIdx].renderForm(), 
        stages.current.splice(0, currentStageIdx)
            .map((stage, idx) => stage.renderCompleted(data.current, () => setCurrentStageIdx(idx))
    )]), [currentStageIdx]);
}