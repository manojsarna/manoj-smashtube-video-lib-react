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
    <ThemeProvider>
      <ToastProvider>
        <AuthProvider>
          <PlaylistsProvider>
            <HistoryProvider>
              <LikesProvider>
                <WatchLaterProvider>
                  <Router>
                    <App />
                  </Router>
                </WatchLaterProvider>
              </LikesProvider>
            </HistoryProvider>
          </PlaylistsProvider>
        </AuthProvider>
      </ToastProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
