import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useToast } from "../toast-context/toast-context";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const smashTubeToken = localStorage.getItem("smashTubeToken");
  const [user, setUser] = useState();
  const [encodedToken, setEncodedToken] = useState();
  const { dispatch } = useToast();

  useEffect(() => {
    (async function () {
      if (smashTubeToken) {
        setEncodedToken(smashTubeToken);
        try {
          const response = await axios.post("/api/auth/verify", {
            encodedToken: smashTubeToken,
          });
          if (response.status === 200) {
            setUser(response.data.foundUser);
          }
        } catch (error) {
          console.log(error);
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loginAuth = async (loginDetails) => {
    try {
      const response = await axios.post("/api/auth/login", {
        email: loginDetails.email,
        password: loginDetails.password,
      });
      if (response.status === 200) {
        localStorage.setItem("smashTubeToken", response.data.encodedToken);
        setUser(response.data.foundUser);
        setEncodedToken(response.data.encodedToken);
        dispatch({
          type: "TOAST_SUCCESS",
          payload: "Login Successful",
        });
      }
    } catch (error) {
      console.error(error.response.data.errors);
      dispatch({ type: "TOAST_ERROR", payload: error.response.data.errors });
    }
  };

  const logoutAuth = () => {
    localStorage.removeItem("smashTubeToken");
    setUser(null);
    setEncodedToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, encodedToken, loginAuth, logoutAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, useAuth };
