'use client';
import "../public/intro.mp4";
import { useEffect, useRef, useState } from 'react';

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play();
      video.addEventListener('ended', handleVideoEnd);
    }

    return () => {
      if (video) {
        video.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, []);

  const handleVideoEnd = () => {
    setIsVisible(false);
    onFinish();
  };

  const handleSkip = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsVisible(false);
    onFinish();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <video
        ref={videoRef}
        src="/intro.mp4"
        className="w-full h-full object-cover"
        muted
        playsInline
      />
      <button
        onClick={handleSkip}
        className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded"
      >
        Skip
      </button>
    </div>
  );
}
