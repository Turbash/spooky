import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

const LoadingScreen = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [glitchText, setGlitchText] = useState('SPOOKY');
  const [showWarning, setShowWarning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef(null);

  const handleStart = () => {
    setHasStarted(true);
    
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Audio playing successfully!');
          })
          .catch(error => {
            console.error('Audio play failed:', error);
            console.log('Audio src:', audioRef.current.src);
          });
      }
    } else {
      console.error('Audio ref is null');
    }
  };

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 4000;
    const interval = 100;
    let currentProgress = 0;

    const progressTimer = setInterval(() => {
      const jump = Math.random() * 15 + 5;
      currentProgress += jump;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(progressTimer);
        
        setShowWarning(true);
        
        setTimeout(() => {
          if (audioRef.current) {
            gsap.to(audioRef.current, {
              volume: 0,
              duration: 0.5
            });
          }

          gsap.to('.loading-screen', {
            opacity: 0,
            duration: 0.3,
            ease: 'power4.in',
            onComplete: () => {
              if (audioRef.current) {
                audioRef.current.pause();
              }
              onLoadComplete();
            }
          });
        }, 1000);
      }
      setProgress(Math.floor(currentProgress));
    }, interval);

    const glitchTimer = setInterval(() => {
      const glitchChars = ['S', 'P', 'O', 'O', 'K', 'Y', '$', '₱', 'Ø', '§'];
      const original = 'SPOOKY';
      
      if (Math.random() > 0.7) {
        const glitched = original.split('').map(char => 
          Math.random() > 0.7 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char
        ).join('');
        setGlitchText(glitched);
        
        setTimeout(() => setGlitchText('SPOOKY'), 50);
      }
    }, 200);

    const shakeInterval = setInterval(() => {
      if (Math.random() > 0.8) {
        gsap.to('.loading-screen', {
          x: Math.random() * 10 - 5,
          y: Math.random() * 10 - 5,
          duration: 0.05,
          onComplete: () => {
            gsap.to('.loading-screen', {
              x: 0,
              y: 0,
              duration: 0.05
            });
          }
        });
      }
    }, 300);

    const flickerInterval = setInterval(() => {
      if (Math.random() > 0.85) {
        gsap.to('.loading-content', {
          opacity: 0.3,
          duration: 0.05,
          onComplete: () => {
            gsap.to('.loading-content', {
              opacity: 1,
              duration: 0.05
            });
          }
        });
      }
    }, 500);

    return () => {
      clearInterval(progressTimer);
      clearInterval(glitchTimer);
      clearInterval(shakeInterval);
      clearInterval(flickerInterval);
    };
  }, [hasStarted, onLoadComplete]);

  if (!hasStarted) {
    return (
      <div className="fixed inset-0 z-9999 bg-black flex flex-col items-center justify-center overflow-hidden">
        <audio ref={audioRef} loop preload="auto">
          <source src="/audio/loading.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.03)_4px)]" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-8">
          <div className="text-9xl md:text-[12rem] filter drop-shadow-[0_0_40px_rgba(255,0,0,0.6)] animate-pulse">
            🎃
          </div>

          <h1 className="text-7xl md:text-9xl font-bold text-red text-center font-heading tracking-widest"
              style={{
                textShadow: '0 0 10px rgba(255,0,0,0.8), 0 0 20px rgba(255,0,0,0.6), 0 0 30px rgba(255,0,0,0.4)'
              }}>
            SPOOKY
          </h1>

          <button
            onClick={handleStart}
            className="mt-8 px-12 py-4 bg-red/20 border-2 border-red text-red text-2xl font-mono font-bold tracking-wider hover:bg-red hover:text-black transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer animate-pulse"
            style={{
              boxShadow: '0 0 20px rgba(255,0,0,0.5), inset 0 0 20px rgba(255,0,0,0.1)'
            }}
          >
            [ CLICK TO ENTER ]
          </button>

          <p className="text-gray-500 text-sm md:text-base font-mono mt-4 tracking-wider animate-pulse">
            ⚠ WARNING: Contains spooky content ⚠
          </p>
        </div>

        <div className="absolute bottom-10 left-10 text-4xl animate-bounce" style={{ animationDelay: '0.5s' }}>
          👻
        </div>
        <div className="absolute top-20 right-20 text-3xl animate-bounce" style={{ animationDelay: '1s' }}>
          🦇
        </div>
      </div>
    );
  }

  return (
    <div className="loading-screen fixed inset-0 z-9999 bg-black flex flex-col items-center justify-center overflow-hidden">
      <audio ref={audioRef} loop preload="auto">
        <source src="/audio/loading.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.03)_4px)]" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />

      <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none animate-pulse">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
      </div>

      <div className="loading-content relative z-10 flex flex-col items-center gap-6">
        <div className="relative">
          <div className="text-9xl md:text-[12rem] filter drop-shadow-[0_0_40px_rgba(255,0,0,0.6)]">
            🎃
          </div>
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-20 h-8 bg-red blur-xl opacity-70 animate-pulse" />
        </div>

        <h1 
          className="text-7xl md:text-9xl font-bold text-red text-center font-heading tracking-widest"
          style={{
            textShadow: '0 0 10px rgba(255,0,0,0.8), 0 0 20px rgba(255,0,0,0.6), 0 0 30px rgba(255,0,0,0.4)',
            filter: Math.random() > 0.9 ? 'blur(2px)' : 'none'
          }}
        >
          {glitchText}
        </h1>

        <div className="w-96 md:w-lg mt-8">
          <div className="h-2 bg-[#1a0000] border border-red/30 relative overflow-hidden">
            <div
              className="h-full bg-red transition-none relative"
              style={{ 
                width: `${progress}%`,
                boxShadow: '0 0 10px rgba(255,0,0,0.5)'
              }}
            >
              {Math.random() > 0.8 && (
                <div className="absolute inset-0 bg-white/50 w-1" style={{ left: `${Math.random() * 100}%` }} />
              )}
            </div>
          </div>
          
          <div className="text-right text-red font-mono text-2xl mt-2 tracking-wider">
            {progress}%
          </div>
        </div>

        {showWarning && (
          <div className="mt-8 text-red font-mono text-xl md:text-2xl animate-pulse border border-red/50 px-8 py-4 bg-red/10">
            ⚠ ENTERING SPOOKY ZONE ⚠
          </div>
        )}

        <p className="text-gray-500 text-sm md:text-base font-mono mt-4 tracking-wider">
          {progress < 100 ? '[ LOADING NIGHTMARE... ]' : '[ COMPLETE ]'}
        </p>
      </div>

      {Math.random() > 0.95 && (
        <div className="absolute inset-0 bg-red/20 pointer-events-none animate-pulse" />
      )}
    </div>
  );
};

export default LoadingScreen;
