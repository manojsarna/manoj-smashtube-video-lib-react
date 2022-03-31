import axios from "axios";
export const useLogin = async () => {
  try {
    const res = await axios.post("/api/auth/login", {
      email: "adarshbalika@gmail.com",
      password: "adarshBalika123",
    });
    localStorage.setItem("smashTubeToken", res.data.encodedToken);
  } catch (error) {
    console.log(error.response);
  }
};
