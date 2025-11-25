
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import PhysicsHero from './components/PhysicsHero';
import Portfolio from './components/Portfolio';
import Biography from './components/Biography';
import Text from './components/Text';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('HOME');

  const renderContent = () => {
    switch (currentView) {
      case 'HOME':
        return <PhysicsHero />;
      case 'PORTFOLIO':
        return <Portfolio />;
      case 'TEXT':
        return <Text />;
      case 'BIOGRAPHY':
        return <Biography />;
      default:
        return <PhysicsHero />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col text-black bg-white overflow-hidden selection:bg-black selection:text-white">
      <Navigation currentView={currentView} onChangeView={setCurrentView} />
      
      <main className="flex-grow relative pt-20 md:pt-24 h-[calc(100vh)]">
        {/* 
           Using a full height container. 
           For non-HOME views, we allow scrolling within the container 
           if content overflows.
           For HOME, we want hidden overflow for the canvas.
        */}
        <div className={`w-full h-full ${currentView === 'HOME' ? 'overflow-hidden' : 'overflow-y-auto'}`}>
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
