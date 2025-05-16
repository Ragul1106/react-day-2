// src/App.jsx
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
  return <TemperatureDisplay temp={32} />;
}

export default App;
