
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
    <div className="fixed inset-0 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          {/* Cleaning bubbles animation */}
          <div className="w-32 h-32 relative mx-auto">
            {/* Main cleaning brush */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-green-600 rounded-lg transform rotate-12 animate-bounce relative">
                {/* Brush handle */}
                <div className="w-3 h-16 bg-yellow-500 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2"></div>
                {/* Brush bristles */}
                <div className="absolute -bottom-2 left-0 right-0">
                  <div className="flex justify-center space-x-1">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="w-1 h-4 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Cleaning bubbles */}
            <div className="absolute top-4 left-8 w-4 h-4 bg-blue-200 rounded-full animate-ping opacity-75"></div>
            <div className="absolute top-12 right-6 w-3 h-3 bg-blue-300 rounded-full animate-ping opacity-60" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-8 left-4 w-5 h-5 bg-blue-100 rounded-full animate-ping opacity-50" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-4 right-8 w-2 h-2 bg-blue-200 rounded-full animate-ping opacity-70" style={{ animationDelay: '1.5s' }}></div>
            
            {/* Sparkle effects */}
            <div className="absolute top-6 right-4 text-yellow-400 animate-pulse text-xl">✨</div>
            <div className="absolute bottom-6 left-6 text-yellow-300 animate-pulse text-lg" style={{ animationDelay: '0.8s' }}>✨</div>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-green-800 mb-2">Green Tide Services</h2>
        <p className="text-green-600 mb-6 text-lg">Making your space sparkle clean...</p>
        
        {/* Enhanced progress bar */}
        <div className="w-80 h-3 bg-green-200 rounded-full overflow-hidden mx-auto mb-4 shadow-inner">
          <div 
            className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-300 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
          </div>
        </div>
        <p className="text-green-600 font-semibold">{progress}%</p>
        
        {/* Loading messages */}
        <div className="mt-4 h-6">
          {progress < 25 && <p className="text-green-500 text-sm animate-fade-in">Gathering cleaning supplies...</p>}
          {progress >= 25 && progress < 50 && <p className="text-green-500 text-sm animate-fade-in">Preparing eco-friendly solutions...</p>}
          {progress >= 50 && progress < 75 && <p className="text-green-500 text-sm animate-fade-in">Setting up cleaning equipment...</p>}
          {progress >= 75 && progress < 100 && <p className="text-green-500 text-sm animate-fade-in">Almost ready to clean...</p>}
          {progress === 100 && <p className="text-green-600 text-sm font-semibold animate-fade-in">Ready to transform your space!</p>}
        </div>
      </div>
    </div>
  );
};
