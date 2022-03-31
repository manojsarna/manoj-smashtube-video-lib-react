import { useContext, useState, createContext } from "react";
import { useEffect } from "react";
import { useToast } from "../toast-context/toast-context";
import axios from "axios";

const WatchLaterContext = createContext();

const useWatchLater = () => useContext(WatchLaterContext);

function WatchLaterProvider({ children }) {
  const encodedToken = localStorage.getItem("smashTubeToken");
  const [watchLater, setWatchLater] = useState([]);
  const { dispatch } = useToast();

  useEffect(() => {
    (async function () {
      if (encodedToken) {
        try {
          const watchLaterResponse = await axios.get("/api/user/watchlater", {
            headers: {
              authorization: encodedToken,
            },
          });

          if (watchLaterResponse.status === 200) {
            setWatchLater(watchLaterResponse.data.watchlater);
          }
        } catch (error) {
          console.error(error.response.data.errors);
        }
      }
    })();
  }, [encodedToken]);

  const addToWatchLater = async (item) => {
    try {
      const response = await axios.post(
        "/api/user/watchlater",
        { video: item },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );

      if (response.status === 201) {
        setWatchLater(response.data.watchlater);

        dispatch({
          type: "TOAST_SUCCESS",
          payload: "Added to Watch Later",
        });
      }
    } catch (error) {
      console.error(error.response.data.errors);
      dispatch({ type: "TOAST_ERROR", payload: error.response.data.errors });
    }
  };

  const removeFromWatchLater = async (item) => {
    try {
      const response = await axios.delete(`/api/user/watchlater/${item._id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      if (response.status === 200) {
        setWatchLater(response.data.watchlater);

        dispatch({
          type: "TOAST_SUCCESS",
          payload: "Removed from Watch Later",
        });
      }
    } catch (error) {
      console.error(error.response.data.errors);
      dispatch({ type: "TOAST_ERROR", payload: error.response.data.errors });
    }
  };

  return (
    <WatchLaterContext.Provider
      value={{
        watchLater,
        addToWatchLater,
        removeFromWatchLater,
      }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
}

export { WatchLaterProvider, useWatchLater };
