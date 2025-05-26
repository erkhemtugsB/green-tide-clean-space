
import { useState, useEffect } from 'react';

export const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-green-50 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          {/* Cleaning brush animation */}
          <div className="w-32 h-32 relative mx-auto">
            <div 
              className="absolute inset-0 bg-green-600 rounded-full opacity-20 animate-pulse"
              style={{ animationDelay: '0s' }}
            ></div>
            <div 
              className="absolute inset-2 bg-green-500 rounded-full opacity-40 animate-pulse"
              style={{ animationDelay: '0.5s' }}
            ></div>
            <div 
              className="absolute inset-4 bg-green-400 rounded-full opacity-60 animate-pulse"
              style={{ animationDelay: '1s' }}
            ></div>
            
            {/* Cleaning brush icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-green-600 rounded-lg transform rotate-45 animate-bounce">
                <div className="w-4 h-12 bg-white rounded-full absolute top-1 left-6"></div>
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-green-800 mb-4">Green Tide Services</h2>
        <p className="text-green-600 mb-6">Preparing your clean space...</p>
        
        {/* Progress bar */}
        <div className="w-64 h-2 bg-green-200 rounded-full overflow-hidden mx-auto">
          <div 
            className="h-full bg-green-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-green-500 mt-2 text-sm">{progress}%</p>
      </div>
    </div>
  );
};
