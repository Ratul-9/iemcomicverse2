import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SkipForward } from 'lucide-react';

interface VideoLoaderProps {
  onVideoEnd: () => void;
  onSkip: () => void;
}

const VideoLoader: React.FC<VideoLoaderProps> = ({ onVideoEnd, onSkip }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showSkipButton, setShowSkipButton] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Show skip button after 2 seconds
    const skipTimer = setTimeout(() => {
      setShowSkipButton(true);
    }, 2000);

    // Auto-play video
    const playVideo = async () => {
      try {
        // Add a small delay to ensure video is loaded
        await new Promise(resolve => setTimeout(resolve, 100));
        await video.play();
      } catch (error) {
        console.warn('Video autoplay failed:', error);
        setVideoError(true);
        // If autoplay fails, show skip button immediately and auto-proceed after 3 seconds
        setShowSkipButton(true);
        setTimeout(onVideoEnd, 3000);
      }
    };

    const handleVideoEnd = () => {
      onVideoEnd();
    };

    const handleVideoError = () => {
      console.error('Video loading failed');
      setVideoError(true);
      setShowSkipButton(true);
      // Auto-proceed if video fails to load
      setTimeout(onVideoEnd, 2000);
    };

    const handleCanPlay = () => {
      console.log('Video can play');
      playVideo();
    };

    video.addEventListener('ended', handleVideoEnd);
    video.addEventListener('error', handleVideoError);
    video.addEventListener('canplay', handleCanPlay);

    return () => {
      clearTimeout(skipTimer);
      video.removeEventListener('ended', handleVideoEnd);
      video.removeEventListener('error', handleVideoError);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [onVideoEnd]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      {/* Video Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {!videoError ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            playsInline
            preload="auto"
            onError={() => {
              console.error('Video element error');
              setVideoError(true);
              setShowSkipButton(true);
              setTimeout(onVideoEnd, 2000);
            }}
          >
            {/* Try multiple source paths */}
            <source src="/intro.mp4" type="video/mp4" />
            <source src="./intro.mp4" type="video/mp4" />
            <source src="/public/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          // Fallback loading screen if video fails
          <div className="text-white text-center">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-6xl font-bold mb-4"
            >
              IEM COMIC VERSE
            </motion.div>
            <div className="text-xl">Loading...</div>
          </div>
        )}

        {/* Skip Button */}
        <AnimatePresence>
          {showSkipButton && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={onSkip}
              className="absolute bottom-8 right-8 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/30 transition-all duration-300 group"
            >
              <SkipForward size={20} className="group-hover:translate-x-1 transition-transform" />
              <span className="font-medium">Skip Intro</span>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Loading Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <motion.div
            className="h-full bg-gradient-to-r from-[#FF3B3F] to-[#FFEB3B]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: videoError ? 2 : 10, // Adjust based on your video length
              ease: "linear"
            }}
          />
        </div>
      </div>

      
      
    </motion.div>
  );
};

export default VideoLoader;