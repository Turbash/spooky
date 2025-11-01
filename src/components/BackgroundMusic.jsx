import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const highRef = useRef(null);
  const mediumRef = useRef(null);
  const lowRef = useRef(null);

  useEffect(() => {
    if (highRef.current) highRef.current.volume = 0.6;   
    if (mediumRef.current) mediumRef.current.volume = 0.4;
    if (lowRef.current) lowRef.current.volume = 0.2;     

    const playDelay = setTimeout(() => {
      playAll();
    }, 500);

    return () => {
      clearTimeout(playDelay);
      stopAll();
    };
  }, []);

  const playAll = () => {
    const promises = [];
    
    if (highRef.current) {
      promises.push(highRef.current.play().catch(e => console.log('High track play failed:', e)));
    }
    if (mediumRef.current) {
      promises.push(mediumRef.current.play().catch(e => console.log('Medium track play failed:', e)));
    }
    if (lowRef.current) {
      promises.push(lowRef.current.play().catch(e => console.log('Low track play failed:', e)));
    }

    Promise.all(promises).then(() => {
      setIsPlaying(true);
      console.log('All music tracks playing!');
    });
  };

  const stopAll = () => {
    if (highRef.current) highRef.current.pause();
    if (mediumRef.current) mediumRef.current.pause();
    if (lowRef.current) lowRef.current.pause();
    setIsPlaying(false);
  };

  const toggleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);

    if (newMutedState) {
      if (highRef.current) gsap.to(highRef.current, { volume: 0, duration: 0.5 });
      if (mediumRef.current) gsap.to(mediumRef.current, { volume: 0, duration: 0.5 });
      if (lowRef.current) gsap.to(lowRef.current, { volume: 0, duration: 0.5 });
    } else {
      if (highRef.current) gsap.to(highRef.current, { volume: 0.6, duration: 0.5 });
      if (mediumRef.current) gsap.to(mediumRef.current, { volume: 0.4, duration: 0.5 });
      if (lowRef.current) gsap.to(lowRef.current, { volume: 0.2, duration: 0.5 });
    }
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      stopAll();
    } else {
      playAll();
    }
  };

  return (
    <>
      <audio ref={highRef} loop preload="auto">
        <source src="/audio/track1.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={mediumRef} loop preload="auto">
        <source src="/audio/track2.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={lowRef} loop preload="auto">
        <source src="/audio/track3.mp3" type="audio/mpeg" />
      </audio>

      <div className="fixed bottom-8 right-8 z-50 group">
        <button
          onClick={toggleMute}
          className="w-16 h-16 rounded-full bg-orange/90 hover:bg-orange border-2 border-orange text-black flex items-center justify-center text-3xl transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg hover:shadow-orange/50 relative"
          aria-label={isMuted ? 'Unmute music' : 'Mute music'}
          title={isMuted ? 'Click to unmute' : 'Click to mute'}
        >
          {isMuted ? '🔇' : '🔊'}
          
          {isPlaying && !isMuted && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green rounded-full animate-pulse shadow-lg shadow-green/50" />
          )}
        </button>

        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-black/90 text-white text-sm px-3 py-2 rounded whitespace-nowrap">
            {isMuted ? '🔇 Music Muted' : '🔊 Music Playing'}
          </div>
        </div>
      </div>
    </>
  );
};

export default BackgroundMusic;
