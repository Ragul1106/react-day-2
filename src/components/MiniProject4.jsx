import '../assets/css/avatar.css';
import React from 'react';
import EiffelTower from '../assets/images/Paris - Eiffel Tower.jpeg';

const Avatar = ({ url, alt }) => {
  return (
    <div className="avatar-container">
      <img src={url} alt={alt} className="avatar-img" />
      <p>{alt}</p>
    </div>
  );
};

function App() {
  return (
    <Avatar
      url={EiffelTower}
      alt="avatar"
    />
  );
}

export default App;
