import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {
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
      </ToastProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
