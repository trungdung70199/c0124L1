function UserGreeting(props) {
  // Use if-else
  //   if (props.isLoggedIn) {
  //     return (
  //       <h2>Welcome {props.username}</h2>
  //     );
  //   } else {
  //     return <h2>Please log in to continue.</h2>;
  //   }
  // Short write
  return (
    // eslint-disable-next-line react/prop-types
    props.isLoggedIn ? (
      // eslint-disable-next-line react/prop-types
      <h2 className="welcome.message">Welcome {props.username}</h2>
    ) : (
      <h2 className="login-prompt">Please log in to continue</h2>
    )
  );
}

export default UserGreeting;
