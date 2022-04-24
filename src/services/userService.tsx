import axios from "../axios";

const handleLoginApi = (userName: string, userPass: string) => {
  return axios.post("/api/login", {
    emailUser: userName,
    passwordUser: userPass,
  });
};

export { handleLoginApi };
