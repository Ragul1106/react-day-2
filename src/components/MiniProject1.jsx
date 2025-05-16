import '../assets/css/profileCard.css';

const ProfileCard = () => {
  const cardStyle = {
    border: '2px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    width: '300px',
    textAlign: 'center',
    margin: '50px auto'
  };

  return (
    <div style={cardStyle} className="card">
      <h2>Ragul</h2>
      <p>Age: 25</p>
      <p>Location: Chennai</p>
    </div>
  );
};

export default ProfileCard;
