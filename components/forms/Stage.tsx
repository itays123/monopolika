import { ComponentType, useMemo } from "react";
import { Container } from "../types";
import { useStages } from "./StageContext";

export interface StageProps extends Container {
  key: Required<JSX.IntrinsicAttributes>["key"] & number;
  stageCompletedDisplay?: ComponentType<{}>;
}

export default function Stage({
  children,
  key,
  stageCompletedDisplay: StageCompletedDisplay,
}: StageProps) {
  const { currentStage } = useStages();
  const [isCurrentStage, isCompleted] = useMemo(
    () => [key === currentStage, key < currentStage],
    [currentStage, key]
  );
  if (isCompleted && StageCompletedDisplay) return <StageCompletedDisplay />;
  if (isCurrentStage) return children;
  else return null;
}
