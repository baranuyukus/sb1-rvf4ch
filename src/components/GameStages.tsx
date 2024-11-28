import React from 'react';
import { MovingButton } from './MovingButton';
import { HeartCollector } from './games/HeartCollector';
import { MemoryGame } from './games/MemoryGame';

export type GameStage = 'button' | 'hearts' | 'memory' | 'complete';

interface GameStagesProps {
  stage: GameStage;
  onStageComplete: () => void;
}

export const GameStages: React.FC<GameStagesProps> = ({ stage, onStageComplete }) => {
  return (
    <div className="relative w-full h-full">
      {stage === 'button' && <MovingButton onComplete={onStageComplete} />}
      {stage === 'hearts' && <HeartCollector onComplete={onStageComplete} />}
      {stage === 'memory' && <MemoryGame onComplete={onStageComplete} />}
    </div>
  );
};