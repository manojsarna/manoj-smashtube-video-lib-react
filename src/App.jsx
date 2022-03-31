import React from "react";
import { Routes, Route } from "react-router-dom";
import MockAPI from "./Mockman";
import { Header, Footer, PrivateRoute, RestrictedRoute } from "./components";
import {
  Auth,
  CategoryPage,
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
        <Route path="/" element={<Home />}></Route>
        <Route path="/videos" element={<Videos />}></Route>
        <Route path="/videos/:videoId" element={<VideoPage />}></Route>
        <Route
          path="/categories/:categoryId"
          element={<CategoryPage />}
        ></Route>
        <Route element={<PrivateRoute />}>
          <Route path="/user" element={<User />}></Route>
          <Route path="/history" element={<History />}></Route>
          <Route path="/playlists" element={<Playlists />}></Route>
          <Route
            path="/playlists/:playlistId"
            element={<PlaylistPage />}
          ></Route>
          <Route path="/watchlater" element={<WatchLater />}></Route>
          <Route path="/likes" element={<Likes />}></Route>
        </Route>
        <Route element={<RestrictedRoute />}>
          <Route path="/auth" element={<Auth />}></Route>
        </Route>

        <Route path="/mockman" element={<MockAPI />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
