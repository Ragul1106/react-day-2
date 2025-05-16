import React from 'react';

const Task13 = () => {
  const showMessage = true;

  return (
    <div>
      {showMessage && <p>This message is conditionally rendered.</p>}
    </div>
  );
};

export default Task13;
