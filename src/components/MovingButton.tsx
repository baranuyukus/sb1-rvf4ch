import React, { useState, useRef, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface MovingButtonProps {
  onComplete: () => void;
}

export const MovingButton: React.FC<MovingButtonProps> = ({ onComplete }) => {
  const [attempts, setAttempts] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const moveButton = () => {
    if (buttonRef.current) {
      const x = Math.random() * (window.innerWidth - 200);
      const y = Math.random() * (window.innerHeight - 200);
      buttonRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  };

  const handleClick = () => {
    setAttempts(prev => {
      if (prev >= 4) {
        onComplete();
        return prev;
      }
      moveButton();
      return prev + 1;
    });
  };

  useEffect(() => {
    moveButton();
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className="fixed transition-transform duration-200 ease-in-out 
                 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full
                 flex items-center gap-2 shadow-lg hover:shadow-xl"
    >
      <Heart className="w-5 h-5" />
      Bana Tıkla
    </button>
  );
};