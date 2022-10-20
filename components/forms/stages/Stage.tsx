import { ComponentType, Fragment, useCallback, useMemo } from "react";
import { Container } from "../../types";
import { useStages } from "./FormStages";

export interface StageCompletedDisplayProps {
  navigateToStage: () => void;
}

export interface StageProps extends Container {
  idx?: number;
  stageCompletedDisplay?: ComponentType<StageCompletedDisplayProps>;
}

export default function Stage({
  children,
  idx,
  stageCompletedDisplay: StageCompletedDisplay,
}: StageProps) {
  const { currentStage, setCurrentStage } = useStages();
  const [isCurrentStage, isCompleted] = useMemo(
    () => [idx === currentStage, idx < currentStage],
    [currentStage, idx]
  );
  const navigateToStage = useCallback(
    () => setCurrentStage(currentStage),
    [currentStage, setCurrentStage]
  );
  return (
    <Fragment>
      {isCompleted && StageCompletedDisplay && (
        <StageCompletedDisplay navigateToStage={navigateToStage} />
      )}
      {isCurrentStage && children}
    </Fragment>
  );
}
