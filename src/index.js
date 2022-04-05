import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {
  AuthProvider,
  HistoryProvider,
  LikesProvider,
  PlaylistsProvider,
  ThemeProvider,
  ToastProvider,
  WatchLaterProvider,
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <ToastProvider>
          <AuthProvider>
            <PlaylistsProvider>
              <HistoryProvider>
                <LikesProvider>
                  <WatchLaterProvider>
                    <App />
                  </WatchLaterProvider>
                </LikesProvider>
              </HistoryProvider>
            </PlaylistsProvider>
          </AuthProvider>
        </ToastProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
