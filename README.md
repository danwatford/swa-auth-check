# SWA Auth Check

Basic application authenticate the user and check the claims passed to the authecho api.

Can be used in conjunction with the [AuthEcho Azure Functions App](https://github.com/danwatford/func-auth-echo) to view the authentication information included in API requests from Static Web Apps.

# Prerequisites

The [SWA CLI](https://azure.github.io/static-web-apps-cli/) must be installed.

Node dependencies should be installed by running `npm install` in a terminal from the apps root folder.

# Use without AuthEcho

You can use this app to examine the emulated ClientPrincipal provided by the SWA client. This is the Client Principal accessed via the /Direct-access endpoing/ described [here](https://learn.microsoft.com/en-us/azure/static-web-apps/user-information?tabs=javascript).

From a terminal in the swa-auth-check's root folder run:

```bash
swa start
```

The SWA SLI will use settings from `swa-cli.config.json`.

Visit http://localhost:4280 in your browser.

Try signing in and out, clicking the **Read /.auth/me** button to see the available ClientPrincipal.

## Use with AuthEcho

Launch the [AuthEcho Azure Functions App](https://github.com/danwatford/func-auth-echo). You can run AuthEcho locally or in a GitHub Codespace.

If running in a GitHub Codespace, ensure port 7071 has been forwarded to your localhost by vscode.

From a terminal in the swa-auth-check's root folder run:

```bash
swa start --api-location http://localhost:7071
```

Visit http://localhost:4280 in your browser.

Try signing in and out, clicking the **Read /.auth/me** and **Read /api/authecho** buttons to see the available local and remote ClientPrincipals.
