import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { PlaylistProvider } from "./Playlist/PlaylistProvider";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <PlaylistProvider>
      <Router>
        <App />
      </Router>
    </PlaylistProvider>
  </StrictMode>,
  rootElement
);
