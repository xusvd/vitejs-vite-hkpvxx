import { useState, useEffect } from 'react';
import { format } from 'date-fns';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center">
      <div className="text-8xl font-bold font-mono tracking-wider">
        {format(time, 'HH:mm:ss')}
      </div>
    </div>
  );
}

export default Clock;