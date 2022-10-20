import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { useIteration } from "../../../hooks/useIteration";
import { Container } from "../../types";

export interface IStageContext
  extends Omit<
    ReturnType<typeof useIteration>,
    "currentIndex" | "setCurrentIndex"
  > {
  currentStage: number;
  setCurrentStage: Dispatch<SetStateAction<number>>;
}

export const StageContext = createContext({} as IStageContext);

export function useStages() {
  return useContext(StageContext);
}

export interface StageContextProviderProps extends Container {
  initialStage: number;
  limit?: number;
}

export default function FormStages({
  children,
  initialStage,
  limit,
}: StageContextProviderProps) {
  const { currentIndex, setCurrentIndex, ...iteration } = useIteration(
    initialStage,
    limit
  );
  return (
    <StageContext.Provider
      value={{
        currentStage: currentIndex,
        setCurrentStage: setCurrentIndex,
        ...iteration,
      }}
    >
      {children}
    </StageContext.Provider>
  );
}
