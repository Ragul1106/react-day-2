// src/App.jsx
import '../assets/css/calculator.css';

const Calculator = ({ num1, num2 }) => {
  const result = num1 + num2;

  return (
    <div className="calculator">
      <p>{num1} + {num2} = {result}</p>
    </div>
  );
};

function App() {
  return <Calculator num1={10} num2={25} />;
}

export default App;
