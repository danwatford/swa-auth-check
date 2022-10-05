import React from "react";

const LocalPrincipalDisplay = () => {
  const [clientPrincipal, setClientPrincipal] = React.useState("");

  const readDirectAccessEndpoint = React.useCallback(async () => {
    const response = await fetch("/.auth/me");
    const payload = await response.json();
    setClientPrincipal(JSON.stringify(payload.clientPrincipal, null, 2));
  }, []);

  return (
    <div style={{ width: 400, display: "flex", flexDirection: "column" }}>
      <h2>Local ClientPrincipal (via Direct-access endpoint)</h2>
      <button onClick={() => readDirectAccessEndpoint()}>Read /.auth/me</button>

      <textarea
        style={{ height: 200 }}
        value={clientPrincipal}
        readOnly
      ></textarea>
    </div>
  );
};

export default LocalPrincipalDisplay;
