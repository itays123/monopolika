import { ReactNode, useEffect, useRef, useState } from "react";
import FormStage from "./FormStage";

type Stage<FormResult> = FormStage<Partial<FormResult>, ReactNode>;

export default function useFormStages<FormResult>(initialStage: Stage<FormResult>) {
    const currentStage = useState(initialStage);

}