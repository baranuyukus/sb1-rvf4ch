import React, { useState } from 'react';
import { GameStages, type GameStage } from './components/GameStages';
import { LovePage } from './components/LovePage';

function App() {
  const [stage, setStage] = useState<GameStage>('button');
  const [completed, setCompleted] = useState(false);

  const handleStageComplete = () => {
    const stages: GameStage[] = ['button', 'hearts', 'memory', 'complete'];
    const currentIndex = stages.indexOf(stage);
    
    if (currentIndex === stages.length - 2) {
      setCompleted(true);
    } else {
      setStage(stages[currentIndex + 1] as GameStage);
    }
  };

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1482517967863-00e15c9b44be?auto=format&fit=crop&q=80')] 
                bg-cover bg-center bg-no-repeat relative">
      <div className="absolute inset-0 bg-gradient-to-r from-rose-100/90 to-pink-100/90 backdrop-blur-sm">
        {!completed ? (
          <GameStages stage={stage} onStageComplete={handleStageComplete} />
        ) : (
          <LovePage />
        )}
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-[snow_10s_linear_infinite] opacity-70">
          {'❄️'.repeat(50).split('').map((snowflake, i) => (
            <span
              key={i}
              className="absolute text-xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20}%`,
                animation: `fall ${5 + Math.random() * 10}s linear ${Math.random() * 10}s infinite`,
              }}
            >
              {snowflake}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;