import React from "react";

const SignInOut = () => {
  return (
    <div style={{ width: 400, display: "flex", flexDirection: "column" }}>
      <h2>Sign in/out</h2>

      <a href="/.auth/login/aad">Sign in</a>
      <a href="/.auth/logout">Sign Out</a>
    </div>
  );
};

export default SignInOut;
