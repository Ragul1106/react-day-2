import React from 'react';

const renderMessage = () => {
  return <p>Hello from a function!</p>;
};

const Task11 = () => {
  return <div>{renderMessage()}</div>;
};

export default Task11;
