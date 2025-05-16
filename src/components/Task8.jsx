import React from 'react';
import ReactDOM from 'react-dom/client';

const element = <h2>Rendered with ReactDOM.render()</h2>;

const Task8 = () => {
  return element;
};

export default Task8;

// Note: React 18 uses createRoot instead of ReactDOM.render()
