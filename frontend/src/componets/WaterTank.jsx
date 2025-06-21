import React from 'react';
import '../App.css';

const WaterTank = (props) => {

  const [data, setData] = React.useState(null);
  const [water,setWater]=React.useState(0);
  const updateValues = (json) => {
  if (json && json.feeds && json.feeds.length > 0) {
    const value = parseInt(json.feeds[json.feeds.length - 1].field1, 10);;
    setWater(isNaN(value) ? 0 : value);
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
    
        const interval = setInterval(fetchData, 900000);
    
        return () => clearInterval(interval);
      }, []);
  return (
    <div className="tank-container">
      <div className="tank">
  <div className="water wave" style={{ height: `${water}%` }}></div>
  <div className="level-text">{water}%</div>
  </div>
    </div>
  );
};

export default WaterTank;
