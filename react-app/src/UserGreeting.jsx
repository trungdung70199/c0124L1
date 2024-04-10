import PropTypes from 'prop-types'

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
  // eslint-disable-next-line react/prop-types
  const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>

  const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2>
  return (
    // eslint-disable-next-line react/prop-types
    props.isLoggedIn ? welcomeMessage : loginPrompt
  );
}

UserGreeting.prototypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "TD",
}
export default UserGreeting;
