import axios from "axios";
export const useSignUp = async () => {
  try {
    const res = await axios.post("/api/auth/signup", {
      firstName: "Guest",
      lastName: "User",
      email: "guestuser@gmail.com",
      password: "GuestUser123",
    });
    localStorage.setItem("encodedToken", res.data.encodedToken);
  } catch (error) {
    console.error(error.response);
  }
};
