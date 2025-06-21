import React, { useState } from 'react';
import { Wifi, WifiOff } from 'lucide-react';

const WifiToggle = () => {
  const [connected, setConnected] = useState(false);

  
  const [data, setData] = React.useState(0);
  const [wifi, setWifi] = React.useState(0);

  React.useEffect(() => {
    setConnected(wifi === 1);
  }, [wifi]);
  const updateValues = (json) => {
  if (json && json.feeds && json.feeds.length > 0) {
    const value = parseInt(json.feeds[json.feeds.length - 1].field4, 10);
    setWifi(isNaN(value) ? 0 : value);
  }}
    React.  useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch(`https://water-level-controller.onrender.com/api/analytics`);
            const json = await res.json();
            setData(json);
            updateValues(json);
          } catch (err) {
            console.error(err);
          }
        };
    
        fetchData();
    
        const interval = setInterval(fetchData, 15000);
    
        return () => clearInterval(interval);
      }, []);

  const toggleConnection = () => {
    setConnected(!connected);
  };

  return (
    <div
      onClick={toggleConnection}
      className={`flex items-center w-20 h-10 rounded-full p-1 cursor-pointer transition-colors duration-500 
        ${connected ? 'bg-green-400' : 'bg-gray-300'}`}
    >
      <div
        className={`flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md transform transition-transform duration-500 
          ${connected ? 'translate-x-10' : 'translate-x-0'}`}
      >
        {connected ? (
          <Wifi className="text-green-500 animate-pulse" size={20} />
        ) : (
          <WifiOff className="text-red-500 animate-bounce" size={20} />
        )}
      </div>
    </div>
  );
};

export default WifiToggle;
