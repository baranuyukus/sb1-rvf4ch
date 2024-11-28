import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface HeartCollectorProps {
  onComplete: () => void;
}

export const HeartCollector: React.FC<HeartCollectorProps> = ({ onComplete }) => {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [collected, setCollected] = useState(0);
  const required = 5;

  useEffect(() => {
    const newHearts = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * (window.innerWidth - 100),
      y: Math.random() * (window.innerHeight - 100),
    }));
    setHearts(newHearts);
  }, []);

  const collectHeart = (id: number) => {
    setHearts(hearts.filter(heart => heart.id !== id));
    setCollected(prev => {
      const newCount = prev + 1;
      if (newCount >= required) {
        onComplete();
      }
      return newCount;
    });
  };

  return (
    <div className="relative w-full h-full min-h-screen">
      <div className="fixed top-4 left-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
        Toplanan Kalpler: {collected}/{required}
      </div>
      {hearts.map(heart => (
        <button
          key={heart.id}
          className="absolute transition-transform hover:scale-125"
          style={{ left: heart.x, top: heart.y }}
          onClick={() => collectHeart(heart.id)}
        >
          <Heart className="w-8 h-8 text-pink-500 animate-bounce" fill="currentColor" />
        </button>
      ))}
    </div>
  );
};