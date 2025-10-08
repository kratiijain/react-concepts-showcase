import React, { useState } from "react";

function UserGreeting({ userName }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <h2>Welcome back, {userName}!</h2> : <h2>Please login</h2>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default UserGreeting;
