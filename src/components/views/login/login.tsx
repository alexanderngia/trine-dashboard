import React, { useState } from "react";
import styles from "./login.module.scss";
import { handleLoginApi } from "../../../services/userService";
import { useHistory } from "react-router-dom";

// import { useDispatch } from "react-redux";
// import { loginUser } from "../../../redux/reducers/userSlice";

interface LoginProps {}

const Login: React.FC<LoginProps> = (props) => {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  const [errMessage, setErrMessage] = useState("");

  //History Hook from react-router-dom redirect user to other pages
  const history = useHistory();
  // const dispatch = useDispatch();

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setErrMessage("");
    try {
      let data: any = await handleLoginApi(userName, userPass);
      if (data && data.errCode !== 0) {
        setErrMessage(data.message);
      }
      if (data && data.errCode === 0) {
        setErrMessage(data.message);
        localStorage.setItem("accessToken", "true");
        history.replace("/dashboard");
      }
    } catch (error: any) {
      if (error.response) {
        if (error.response.data) {
          setErrMessage(error.response.data.message);
        }
      }
      console.log(error.response);
    }
  };
  return (
    <div className={styles["root"]}>
      <div className={styles["login-page"]}>
        <h1>Hi! Let's login!</h1>
        <div className={styles["form"]}>
          <div className={styles["login-form"]}>
            <input
              type="text"
              placeholder="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              autoComplete="off"
            />
            <input
              type="password"
              placeholder="password"
              value={userPass}
              onChange={(e) => setUserPass(e.target.value)}
              autoComplete="off"
            />
            <p className={styles["errMessage"]}>{errMessage}</p>
            <button onClick={handleLogin}>login</button>
            <p className={styles["message"]}>
              Not registered? <a href="#top">Create an account</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
