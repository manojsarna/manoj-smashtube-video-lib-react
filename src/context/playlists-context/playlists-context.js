import { useContext, useState, createContext } from "react";
import { useEffect } from "react";
import { useToast } from "../toast-context/toast-context";
import axios from "axios";
import { useAuth } from "../auth-context/auth-context";

const PlaylistsContext = createContext();

const usePlaylists = () => useContext(PlaylistsContext);

function PlaylistsProvider({ children }) {
  const [playlists, setPlaylists] = useState([]);
  const [playlist, setPlaylist] = useState();
  const { dispatch } = useToast();
  const { encodedToken } = useAuth();

  useEffect(() => {
    if (encodedToken) {
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
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [encodedToken, playlist]);

  /**
   *
   * addToPlaylists : This API call will create a new playlist
   */
  const addToPlaylists = async (playlist, video = null) => {
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
        dispatch({
          type: "TOAST_SUCCESS",
          payload: "Added to Playlists",
        });
        if (video !== null) {
          setTimeout(() => {
            addToPlaylist(response.data.playlists.slice(-1)[0]._id, video);
          }, 50);
        }
        setPlaylists(response.data.playlists);
      }
    } catch (error) {
      console.error(error.response.data.errors);
      dispatch({ type: "TOAST_ERROR", payload: error.response.data.errors });
    }
  };
  /**
   *
   * removeFromPlaylists : This API call will remove playlist from Playlists Array
   */
  const removeFromPlaylists = async (playlistId) => {
    try {
      const response = await axios.delete(`/api/user/playlists/${playlistId}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      if (response.status === 200) {
        setPlaylists(response.data.playlists);

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
      }
    } catch (error) {
      console.error(error.response.data.errors);
      dispatch({ type: "TOAST_ERROR", payload: error.response.data.errors });
    }
  };

  /**
   *
   * addToPlaylist : This API call will add video to the particular playlist using playlistId
   */
  const addToPlaylist = async (playlistId, item) => {
    try {
      const response = await axios.post(
        `/api/user/playlists/${playlistId}`,
        { video: item },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        setPlaylist(response.data.playlist);

        dispatch({
          type: "TOAST_SUCCESS",
          payload: `Added to ${response.data.playlist.title}`,
        });
      }
    } catch (error) {
      console.error(error.response.data.errors);
      dispatch({ type: "TOAST_ERROR", payload: error.response.data.errors });
    }
  };
  /**
   *
   * removeFromPlaylist : This API call will remove video from particular playlist using playlistId
   */
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

      if (response.status === 200) {
        setPlaylist(response.data.playlist);
        dispatch({
          type: "TOAST_SUCCESS",
          payload: `Removed from ${response.data.playlist.title}`,
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
        playlist,
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
