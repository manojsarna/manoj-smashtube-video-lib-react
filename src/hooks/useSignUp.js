import axios from "axios";
export const useSignUp = async () => {
  try {
    const res = await axios.post("/api/auth/signup", {
      firstName: "Manoj",
      lastName: "Sarna",
      email: "manojsarna@gmail.com",
      password: "Manojsarna@123",
    });
    localStorage.setItem("encodedToken", res.data.encodedToken);
  } catch (error) {
    console.log(error);
  }
};
