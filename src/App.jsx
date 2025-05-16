import React from 'react';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import Task4 from './components/Task4';
import Task5 from './components/Task5';
import Task6 from './components/Task6';
import Task7 from './components/Task7';
import Task8 from './components/Task8';
import Task9 from './components/Task9';
import Task10 from './components/Task10';
import Task11 from './components/Task11';
import Task12 from './components/Task12';
import Task13 from './components/Task13';
import Mini1 from './components/MiniProject1';
import Mini2 from './components/MiniProject2';
import Mini3 from './components/MiniProject3';
import Mini4 from './components/MiniProject4';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>1. JSX Introduction</h2>
      <Task1 />

      <h2>2. Simple JSX Element</h2>
      <Task2 />

      <h2>3. Embedding Expressions</h2>
      <Task3 />

      <h2>4. Using Variables in JSX</h2>
      <Task4 />

      <h2>5. Attributes in JSX</h2>
      <Task5 />

      <h2>6. Inline Styling</h2>
      <Task6 />

      <h2>7. Class-based Styling</h2>
      <Task7 />

      <h2>8. ReactDOM.render() Usage</h2>
      <Task8 />

      <h2>9. Self-closing Tags</h2>
      <Task9 />

      <h2>10. JSX Comments</h2>
      <Task10 />

      <h2>11. JSX with Functions</h2>
      <Task11 />

      <h2>12. Multiple Elements in JSX</h2>
      <Task12 />

      <h2>13. Conditional Rendering with JSX</h2>
      <Task13 />
      {/* Mini Projects */}
      <h3>Mini Project 1: Simple Profile card</h3>
      <Mini1 />

      <h3>Mini Project 2: Temperature </h3>
      <Mini2 /> 

      <h3>Mini Project 3: Simple calcukator</h3>
      <Mini3 /> 

      <h3>Mini Project 4: image Component accepts url</h3>
      <Mini4 />
    </div>
  );
}

export default App;
