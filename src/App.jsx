import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Clock from './components/Clock';
import { backgrounds } from './utils/backgrounds';

function App() {
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    // Change background every 6 hours
    const getCurrentBackgroundIndex = () => {
      const hour = new Date().getHours();
      return Math.floor(hour / 6) % backgrounds.length;
    };

    setCurrentBackground(getCurrentBackgroundIndex());
    
    const interval = setInterval(() => {
      setCurrentBackground(getCurrentBackgroundIndex());
    }, 1000 * 60 * 60); // Check every hour

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="min-h-screen flex items-center justify-center transition-all duration-1000"
      style={{
        backgroundImage: `url(${backgrounds[currentBackground]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="backdrop-blur-sm bg-black/30 p-12 rounded-xl text-white">
        <Clock />
        <div className="mt-4 text-center">
          <div className="text-2xl">{format(new Date(), 'EEEE')}</div>
          <div className="text-xl">{format(new Date(), 'MMMM d, yyyy')}</div>
        </div>
      </div>
    </div>
  );
}

export default App;