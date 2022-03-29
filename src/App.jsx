import React from "react";
import { Routes, Route } from "react-router-dom";
import MockAPI from "./Mockman";
import { Header, Footer } from "./components";
import {
  Auth,
  CategoryPage,
  History,
  Home,
  Likes,
  Page404,
  PlaylistPage,
  Playlists,
  VideoPage,
  Videos,
  WatchLater,
} from "./pages";
import { useLogin } from "./hooks/useLogin";
import { ToastContainer } from "./components/toast/ToastContainer";

function App() {
  useLogin();

  return (
    <>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/playlists" element={<Playlists />}></Route>
        <Route path="/playlists/:playlistId" element={<PlaylistPage />}></Route>
        <Route path="/videos" element={<Videos />}></Route>
        <Route path="/videos/:videoId" element={<VideoPage />}></Route>
        <Route
          path="/categories/:categoryId"
          element={<CategoryPage />}
        ></Route>
        <Route path="/watchlater" element={<WatchLater />}></Route>
        <Route path="/likes" element={<Likes />}></Route>
        <Route path="/mockman" element={<MockAPI />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
