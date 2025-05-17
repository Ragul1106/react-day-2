// src/App.jsx
import { useState } from 'react';
import '../assets/css/calculator.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const result = Number(num1) + Number(num2);

  return (
    <div className="calculator">
      <h2>Simple Calculator</h2>
      <input type="number" onChange={(e) => setNum1(e.target.value)} placeholder="First number" />
      <input type="number" onChange={(e) => setNum2(e.target.value)} placeholder="Second number" />
      <p>{num1} + {num2} = {result}</p>
    </div>
  );
}

export default App;
