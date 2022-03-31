import { useContext, useState, createContext } from "react";
import { useEffect } from "react";
import { useToast } from "../toast-context/toast-context";
import axios from "axios";

const LikesContext = createContext();

const useLikes = () => useContext(LikesContext);

function LikesProvider({ children }) {
  const encodedToken = localStorage.getItem("smashTubeToken");
  const [likes, setLikes] = useState([]);
  const { dispatch } = useToast();

  useEffect(() => {
    (async function () {
      if (encodedToken) {
        try {
          const likesResponse = await axios.get("/api/user/likes", {
            headers: {
              authorization: encodedToken,
            },
          });

          if (likesResponse.status === 200) {
            setLikes(likesResponse.data.likes);
          }
        } catch (error) {
          console.error(error.response.data.errors);
        }
      }
    })();
  }, [encodedToken]);

  const addToLikes = async (item) => {
    try {
      const response = await axios.post(
        "/api/user/likes",
        { video: item },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );

      if (response.status === 201) {
        setLikes(response.data.likes);

        dispatch({
          type: "TOAST_SUCCESS",
          payload: "Added to Liked Videos",
        });
      }
    } catch (error) {
      console.error(error.response.data.errors);
      dispatch({ type: "TOAST_ERROR", payload: error.response.data.errors });
    }
  };

  const removeFromLikes = async (item) => {
    try {
      const response = await axios.delete(`/api/user/likes/${item._id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      if (response.status === 200) {
        setLikes(response.data.likes);

        dispatch({
          type: "TOAST_SUCCESS",
          payload: "Removed from Liked Videos",
        });
      }
    } catch (error) {
      console.error(error.response.data.errors);
      dispatch({ type: "TOAST_ERROR", payload: error.response.data.errors });
    }
  };

  return (
    <LikesContext.Provider
      value={{
        likes,
        addToLikes,
        removeFromLikes,
      }}
    >
      {children}
    </LikesContext.Provider>
  );
}

export { LikesProvider, useLikes };
