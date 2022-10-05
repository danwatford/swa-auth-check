import React from "react";
import LocalPrincipalDisplay from "./LocalPrincipalDisplay";
import RemotePrincipalDisplay from "./RemotePrincipalDisplay";
import SignInOut from "./SignInOut";

function App() {
  return (
    <div>
      <h1>SWA Auth Check</h1>
      <SignInOut />
      <LocalPrincipalDisplay />
      <RemotePrincipalDisplay />
    </div>
  );
}

export default App;
