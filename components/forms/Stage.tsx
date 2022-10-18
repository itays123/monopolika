import { ComponentType, useCallback, useMemo } from "react";
import { Container } from "../types";
import { useStages } from "./StageContext";

export interface StageCompletedDisplayProps {
  navigateToStage: () => void;
}

export interface StageProps extends Container {
  key: Required<JSX.IntrinsicAttributes>["key"] & number;
  stageCompletedDisplay?: ComponentType<StageCompletedDisplayProps>;
}

export default function Stage({
  children,
  key,
  stageCompletedDisplay: StageCompletedDisplay,
}: StageProps) {
  const { currentStage, setCurrentStage } = useStages();
  const [isCurrentStage, isCompleted] = useMemo(
    () => [key === currentStage, key < currentStage],
    [currentStage, key]
  );
  const navigateToStage = useCallback(
    () => setCurrentStage(currentStage),
    [currentStage, setCurrentStage]
  );
  if (isCompleted && StageCompletedDisplay)
    return <StageCompletedDisplay navigateToStage={navigateToStage} />;
  if (isCurrentStage) return children;
  else return null;
}
