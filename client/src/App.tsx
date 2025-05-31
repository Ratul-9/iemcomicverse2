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
        </div>
      )}
    </div>
  );
}

export default App;