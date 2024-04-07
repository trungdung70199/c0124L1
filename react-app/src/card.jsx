import profilePic from "./assets/profile.jpg";

function Card() {
  return (
    <div className="card">
      <img src={profilePic} alt="profile picture" />
      <h2>Dng</h2>
      <p>Make a website with react</p>
    </div>
  );
}

export default Card;
