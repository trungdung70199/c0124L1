function UserGreeting(props) {
  // eslint-disable-next-line react/prop-types
  if (props.isLoggedIn) {
    return (
      // eslint-disable-next-line react/prop-types
      <h2>Welcome {props.username}</h2>
    );
  } else {
    return <h2>Please log in to continue.</h2>;
  }
}

export default UserGreeting;
