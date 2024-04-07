import profilePic from "./assets/profile.jpg";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture" />
      <h2 className="title">Dng</h2>
      <p className="card-text">Make a website with react</p>
    </div>
  );
}

export default Card;
