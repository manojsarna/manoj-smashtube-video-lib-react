import { useContext, useState, createContext } from "react";
import { useEffect } from "react";
import { useToast } from "../toast-context/toast-context";
import axios from "axios";

const PlaylistsContext = createContext();

const usePlaylists = () => useContext(PlaylistsContext);

function PlaylistsProvider({ children }) {
  const encodedToken = localStorage.getItem("smashTubeToken");
  const [playlists, setPlaylists] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const { dispatch } = useToast();

  useEffect(() => {
    (async function () {
      try {
        const playlistsResponse = await axios.get("/api/user/playlists", {
          headers: {
            authorization: encodedToken,
          },
        });

        if (playlistsResponse.status === 200) {
          setPlaylists(playlistsResponse.data.playlists);
        }
      } catch (error) {
        console.error(error.response.data.errors);
      }
    })();
  }, [encodedToken]);

  const addToPlaylists = async (playlist) => {
    try {
      const response = await axios.post(
        "/api/user/playlists",
        { playlist },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );

      if (response.status === 201) {
        setPlaylists(response.data.playlists);
        console.log("in add to playlists", response);
        dispatch({
          type: "TOAST_SUCCESS",
          payload: "Added to Playlists",
        });
      }
    } catch (error) {
      console.error(error.response.data.errors);
      dispatch({ type: "TOAST_ERROR", payload: error.response.data.errors });
    }
  };

  const removeFromPlaylists = async (playlist) => {
    try {
      const response = await axios.delete(
        `/api/user/playlists/${playlist._id}`,
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (response.status === 200) {
        setPlaylists(response.data.playlists);
        console.log("in remove playlists", response);
        dispatch({
          type: "TOAST_SUCCESS",
          payload: "Removed from Playlists",
        });
      }
    } catch (error) {
      console.error(error.response.data.errors);
      dispatch({ type: "TOAST_ERROR", payload: error.response.data.errors });
    }
  };

  const getPlaylist = async (playlistId) => {
    try {
      const response = await axios.get(`/api/user/playlists/${playlistId}`, {
        headers: {
          authorization: encodedToken,
        },
      });

      if (response.status === 200) {
        setPlaylist(response.data.playlist);
        console.log("in add to particular playlist", response);
        dispatch({
          type: "TOAST_SUCCESS",
          payload: `Added to ${playlist.name}`,
        });
      }
    } catch (error) {
      console.error(error.response.data.errors);
      dispatch({ type: "TOAST_ERROR", payload: error.response.data.errors });
    }
  };

  const addToPlaylist = async (playlistId, video) => {
    try {
      const response = await axios.post(
        `/api/user/playlists/${playlistId}`,
        { video },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (response.status === 201) {
        setPlaylist(response.data.playlist);
        console.log("in add to particular playlist", response);
        dispatch({
          type: "TOAST_SUCCESS",
          payload: `Added to ${playlist.name}`,
        });
      }
    } catch (error) {
      console.error(error.response.data.errors);
      dispatch({ type: "TOAST_ERROR", payload: error.response.data.errors });
    }
  };

  const removeFromPlaylist = async (playlistId, videoId) => {
    try {
      const response = await axios.delete(
        `/api/user/playlists/${playlistId}/${videoId}`,
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );

      if (response.status === 201) {
        setPlaylist(response.data.playlist);
        console.log("in add to particular playlist", response);
        dispatch({
          type: "TOAST_SUCCESS",
          payload: `Added to ${playlist.name}`,
        });
      }
    } catch (error) {
      console.error(error.response.data.errors);
      dispatch({ type: "TOAST_ERROR", payload: error.response.data.errors });
    }
  };

  return (
    <PlaylistsContext.Provider
      value={{
        playlists,
        addToPlaylists,
        removeFromPlaylists,
        getPlaylist,
        addToPlaylist,
        removeFromPlaylist,
      }}
    >
      {children}
    </PlaylistsContext.Provider>
  );
}

export { PlaylistsProvider, usePlaylists };
