import { Children, Component, ComponentType } from "react";
import Stage, { StageCompletedDisplayProps } from "./stages/Stage";
import StageContextProvider, {
  StageContextProviderProps,
} from "./stages/StageContext";

export interface StageElement {
  currentStage: ComponentType<{}>;
  completedStage: ComponentType<StageCompletedDisplayProps>;
}

export interface StagesProps {
  stages: StageElement[];
  initialStage?: number;
  onLastStageComplete: () => {};
}

export default function Stages({ stages, initialStage = 0 }: StagesProps) {
  return (
    <StageContextProvider initialStage={initialStage} limit={stages.length}>
      {stages.map(({ currentStage: Current, completedStage }, idx) => (
        <Stage key={idx} idx={idx} stageCompletedDisplay={completedStage}>
          <Current />
        </Stage>
      ))}
    </StageContextProvider>
  );
}
