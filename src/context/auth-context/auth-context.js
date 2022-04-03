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
    if (smashTubeToken) {
      (async function () {
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
      })();
    }
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

  const signUpAuth = async (signUpDetails) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        firstName: signUpDetails.firstName,
        lastName: signUpDetails.lastName,
        email: signUpDetails.email,
        password: signUpDetails.password,
      });
      if (response.status === 201) {
        localStorage.setItem("smashTubeToken", response.data.encodedToken);
        setUser(response.data.createdUser);
        setEncodedToken(response.data.encodedToken);
        dispatch({
          type: "TOAST_SUCCESS",
          payload: "SignUp Successful",
        });
      }
    } catch (error) {
      console.error(error.response.data.errors);
      dispatch({ type: "TOAST_ERROR", payload: error.response.data.errors });
    }
  };
  return (
    <AuthContext.Provider
      value={{ user, encodedToken, loginAuth, logoutAuth, signUpAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, useAuth };
