import axios from "../axios";

const handleProductApi = (userName: string, userPass: string) => {
  return axios.post("/api/login", {
    emailUser: userName,
    passwordUser: userPass,
  });
};

export { handleProductApi };
