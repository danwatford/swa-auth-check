import React from "react";

const RemotePrincipalDisplay = () => {
  const [clientPrincipal, setClientPrincipal] = React.useState("");

  const readAuthEchoApi = React.useCallback(async () => {
    const response = await fetch("/api/authecho");
    if (response.ok) {
      if (response.headers.get("Content-Length") !== "0") {
        const payload = await response.json();
        setClientPrincipal(JSON.stringify(payload.clientPrincipal, null, 2));
      } else {
        setClientPrincipal(
          "No content returned from remote API. If using SWA CLI, please check the API is being proxied correctly."
        );
      }
    } else {
      setClientPrincipal("Error: " + response.status);
    }
  }, []);

  return (
    <div style={{ width: 400, display: "flex", flexDirection: "column" }}>
      <h2>Remote ClientPrincipal (via authecho API)</h2>
      <button onClick={() => readAuthEchoApi()}>Read /api/authecho</button>

      <textarea
        style={{ height: 200 }}
        value={clientPrincipal}
        readOnly
      ></textarea>
    </div>
  );
};

export default RemotePrincipalDisplay;
