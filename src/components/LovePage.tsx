import React from 'react';
import { Heart, Music } from 'lucide-react';

export const LovePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 
                    flex flex-col items-center justify-center p-8 text-center">
      <div className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
        <div className="flex justify-center mb-6">
          <Heart className="w-16 h-16 text-pink-500 animate-pulse" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Seni Biricik Prensesimi Aşşşırı Çok Seviyorum ❤️
        </h1>
        <p className="text-xl text-gray-700 mb-4">
          Benim biricik prensesim küçük zeyzeyim olduğun için çok ama çok mutluyum.
        </p>
        <p className="text-xl text-gray-700 mb-4">
          Bu güzel prensesime ve bizi tanıştıran bu hayata binlerce kere teşekkürler. Birlikte ilk yeni yılımıza ve daha nicelerine :)
        </p>
        <div className="mt-8 text-pink-600 font-semibold text-lg">
          iyi ki benimsin❤️
        </div>
        <a
          href="https://open.spotify.com/intl-tr/track/55nYdeizd651fyJMGr1ZQa"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#1DB954] text-white rounded-full hover:bg-[#1ed760] transition-colors"
        >
          <Music className="w-5 h-5" />
          Şarkımızı Dinle
        </a>
      </div>
    </div>
  );
};