// src/App.jsx
import { useState } from 'react';
import '../assets/css/temperature.css';

const TemperatureDisplay = ({ temp }) => {
  let status = 'Normal';
  if (temp > 30) status = 'Hot';
  else if (temp < 15) status = 'Cold';

  return (
    <div className="temperature">
      Temperature: {temp}°C - {status}
    </div>
  );
};

function App() {
  const [temp, setTemp] = useState('');

  return (
    <div className="app">
      <h2>Temperature Checker</h2>
      <input
        type="number"
        placeholder="Enter temperature (°C)"
        onChange={(e) => setTemp(e.target.value)}
      />
      {temp !== '' && <TemperatureDisplay temp={Number(temp)} />}
    </div>
  );
}

export default App;
