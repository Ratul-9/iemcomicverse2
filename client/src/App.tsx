import { useState } from 'react';
import { Router, Route, Switch } from "wouter";
import Home from './pages/Home';
import VideoLoader from './components/VideoLoader';
import Event1 from './components/event1';
import Event2 from './components/event2';
import Event3 from './components/event3';
import Event4 from './components/event4';
import Event5 from './components/event5';
import Event6 from './components/event6';
import Event7 from './components/event7';
import NotFound from './pages/not-found';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleVideoEnd = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 500);
  };

  const openChatbot = () => {
    window.open(
      "https://cdn.botpress.cloud/webchat/v3.0/shareable.html?configUrl=https://files.bpcontent.cloud/2025/02/17/03/20250217030619-PB4Z3EPI.json",
      "_blank",
      "width=400,height=600"
    );
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
          <Router>
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/events/1" component={Event1} />
              <Route path="/events/2" component={Event2} />
              <Route path="/events/3" component={Event3} />
              <Route path="/events/4" component={Event4} />
              <Route path="/events/5" component={Event5} />
              <Route path="/events/6" component={Event6} />
              <Route path="/events/7" component={Event7} />
              <Route component={NotFound} />
            </Switch>
          </Router>

          {/* Floating Chatbot with Left-side Message */}
          <div className="fixed bottom-8 right-8 z-50">
            <div className="relative group">
              <button
                onClick={openChatbot}
                className="transition-transform duration-300 hover:scale-105 focus:outline-none"
                aria-label="Chat with RYZN"
              >
                <img 
                  src="/src/components/chatbot.png" 
                  alt="RYZN Chatbot" 
                  className="h-36 w-auto drop-shadow-lg hover:drop-shadow-xl"
                />
              </button>
              
              {/* Left-side Message Box - Appears on hover */}
              <div className="absolute bottom-0 right-full mb-6 mr-4 w-64 bg-white rounded-lg p-4 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                   style={{ fontFamily: "'Arial Rounded MT Bold', 'Comic Sans MS', sans-serif" }}>
                <div className="text-black font-bold text-lg mb-1">
                  Hi I'm RYZN!
                </div>
                <div className="text-gray-700 text-sm">
                  The superhero of IEM<br />
                  I'm here to help you with<br />
                  all your questions!
                </div>
                {/* Speech bubble pointer (right side) */}
                <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-white"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;