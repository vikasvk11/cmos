import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { PlaylistProvider } from "./Context/PlaylistProvider";
import { AuthProvider } from "./Context/AuthProvider";
import { SnackbarProvider } from "./Context/SnackbarProvider";  

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AuthProvider>
      <PlaylistProvider>
        <SnackbarProvider>
          <Router>
            <App />
          </Router>
        </SnackbarProvider>
      </PlaylistProvider>
    </AuthProvider>
  </StrictMode>,
  rootElement
);
