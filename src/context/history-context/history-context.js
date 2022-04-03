import { useContext, useState, createContext } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useToast } from "../toast-context/toast-context";
import { useAuth } from "../auth-context/auth-context";

const HistoryContext = createContext();

const useHistory = () => useContext(HistoryContext);

function HistoryProvider({ children }) {
  const [history, setHistory] = useState([]);
  const { dispatch } = useToast();
  const { encodedToken } = useAuth();

  useEffect(() => {
    if (encodedToken) {
      (async function () {
        try {
          const historyResponse = await axios.get("/api/user/history", {
            headers: {
              authorization: encodedToken,
            },
          });

          if (historyResponse.status === 200) {
            setHistory(historyResponse.data.history);
          }
        } catch (error) {
          console.error(error.response.data.errors);
        }
      })();
    }
  }, [encodedToken]);

  const addToHistory = async (item) => {
    try {
      const response = await axios.post(
        "/api/user/history",
        { video: item },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (response.status === 201) {
        setHistory(response.data.history);
        dispatch({
          type: "TOAST_SUCCESS",
          payload: "Added to History",
        });
      }
    } catch (error) {
      console.error(error.response.data.errors);
      dispatch({ type: "TOAST_ERROR", payload: error.response.data.errors });
    }
  };

  const clearHistory = async (item) => {
    try {
      const response = await axios.delete("/api/user/history/all", {
        headers: {
          authorization: encodedToken,
        },
      });
      if (response.status === 200) {
        setHistory(response.data.history);
        dispatch({
          type: "TOAST_SUCCESS",
          payload: "Cleared History",
        });
      }
    } catch (error) {
      console.error(error.response.data.errors);
      dispatch({ type: "TOAST_ERROR", payload: error.response.data.errors });
    }
  };

  const deleteFromHistory = async (item) => {
    try {
      const response = await axios.delete(`/api/user/history/${item._id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      if (response.status === 200) {
        setHistory(response.data.history);
        dispatch({
          type: "TOAST_SUCCESS",
          payload: "Removed from History",
        });
      }
    } catch (error) {
      console.error(error.response.data.errors);
      dispatch({ type: "TOAST_ERROR", payload: error.response.data.errors });
    }
  };

  return (
    <HistoryContext.Provider
      value={{ history, addToHistory, clearHistory, deleteFromHistory }}
    >
      {children}
    </HistoryContext.Provider>
  );
}

export { HistoryProvider, useHistory };
