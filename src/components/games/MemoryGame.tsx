import React, { useState, useEffect } from 'react';

interface MemoryGameProps {
  onComplete: () => void;
}

const photos = [
  'https://i.hizliresim.com/mcymm00.JPG',
  'https://i.hizliresim.com/rlj3rhy.JPG',
  'https://i.hizliresim.com/e84isbd.JPG',
  'https://i.hizliresim.com/lizzi9u.png',
];

export const MemoryGame: React.FC<MemoryGameProps> = ({ onComplete }) => {
  const [cards, setCards] = useState<Array<{ id: number; photoIndex: number; flipped: boolean; matched: boolean; removed: boolean }>>([]);
  const [flipped, setFlipped] = useState<number[]>([]);

  useEffect(() => {
    const pairs = [...Array(8)].map((_, i) => ({
      id: i,
      photoIndex: Math.floor(i / 2),
      flipped: false,
      matched: false,
      removed: false,
    }));
    setCards(pairs.sort(() => Math.random() - 0.5));
  }, []);

  useEffect(() => {
    if (flipped.length === 2) {
      const [first, second] = flipped;
      if (cards[first].photoIndex === cards[second].photoIndex) {
        setTimeout(() => {
          setCards(cards.map((card, i) =>
            i === first || i === second ? { ...card, removed: true } : card
          ));
          if (cards.filter(card => !card.removed).length === 2) {
            onComplete();
          }
        }, 500);
      } else {
        setTimeout(() => {
          setCards(cards.map((card, i) =>
            i === first || i === second ? { ...card, flipped: false } : card
          ));
        }, 1000);
      }
      setFlipped([]);
    }
  }, [flipped, cards, onComplete]);

  const handleClick = (index: number) => {
    if (flipped.length < 2 && !cards[index].flipped && !cards[index].removed) {
      setCards(cards.map((card, i) =>
        i === index ? { ...card, flipped: true } : card
      ));
      setFlipped([...flipped, index]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl mb-4">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Anılarımızı Eşleştir</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
        {cards.map((card, index) => (
          <button
            key={card.id}
            onClick={() => handleClick(index)}
            className={`aspect-square rounded-xl transition-all duration-500 transform 
                      ${card.removed ? 'opacity-0 pointer-events-none' : ''}
                      ${card.flipped ? 'rotate-0' : 'rotate-y-180'}
                      overflow-hidden shadow-lg hover:shadow-xl`}
          >
            <div className={`w-full h-full transition-all duration-500 
                          ${card.flipped ? 'opacity-100' : 'opacity-0'}`}>
              {card.flipped ? (
                <img
                  src={photos[card.photoIndex]}
                  alt="Memory Card"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-pink-200 to-rose-300 flex items-center justify-center">
                  <span className="text-4xl">❤️</span>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};