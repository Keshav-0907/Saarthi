import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-xwoqghc1yzr0r25r.us.auth0.com"
    clientId="XWIw5dgnmmYroz8eRtrr0QoruTfxDRoe"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);