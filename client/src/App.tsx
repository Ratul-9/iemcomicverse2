import { useState } from 'react';
import Home from './pages/Home';
import VideoLoader from './components/VideoLoader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleVideoEnd = () => {
    setIsLoading(false);
    // Small delay for smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 500);
  };

  const handleSkipIntro = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  return (
    <div className="App">
      {isLoading && (
        <VideoLoader 
          onVideoEnd={handleVideoEnd}
          onSkip={handleSkipIntro}
        />
      )}
      
      {showContent && (
        <div className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <Home />
        </div>
      )}
    </div>
  );
}

export default App;