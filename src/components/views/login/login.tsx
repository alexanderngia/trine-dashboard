import React, { useState } from "react";
import styles from "./login.module.scss";
import { handleLoginApi } from "../../../services/userService";

interface LoginProps {}

const Login: React.FC<LoginProps> = (props) => {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");

  const onChangeUserName = (e: any) => {
    setUserName(e.target.value);
  };
  const onChangePassword = (e: any) => {
    setUserPass(e.target.value);
  };

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await handleLoginApi(userName, userPass);
    } catch (error) {
      console.log(error);
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
              onChange={onChangeUserName}
              autoComplete="off"
            />
            <input
              type="password"
              placeholder="password"
              value={userPass}
              onChange={onChangePassword}
              autoComplete="off"
            />
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
