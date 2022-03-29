import axios from "axios";
export const useLogin = async () => {
  try {
    const res = await axios.post("/api/auth/login", {
      email: "adarshbalika@gmail.com",
      password: "adarshBalika123",
    });
    console.log(res);
    localStorage.setItem("encodedToken", res.data.encodedToken);
  } catch (error) {
    console.log(error.response);
  }
};
