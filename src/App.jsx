import React from "react";
import { Routes, Route } from "react-router-dom";
import MockAPI from "./Mockman";
import { Header, Footer, PrivateRoute, RestrictedRoute } from "./components";
import {
  Auth,
  History,
  Home,
  Likes,
  Page404,
  PlaylistPage,
  Playlists,
  User,
  VideoPage,
  Videos,
  WatchLater,
} from "./pages";
import { ToastContainer } from "./components/toast/ToastContainer";

function App() {
  return (
    <>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/videos/:videoId" element={<VideoPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/user" element={<User />} />
          <Route path="/history" element={<History />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/playlists/:playlistId" element={<PlaylistPage />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="/likes" element={<Likes />} />
        </Route>
        <Route element={<RestrictedRoute />}>
          <Route path="/auth" element={<Auth />} />
        </Route>

        <Route path="/mockman" element={<MockAPI />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
