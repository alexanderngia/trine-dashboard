import React from "react";
import styles from "./dashboard.module.scss";
import { useHistory } from "react-router-dom";
import Sidebar from "../../sidebar/sidebar";
import Header from "../../header/header";
interface LoginProps {}

const Dashboard: React.FC<LoginProps> = (props) => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("accessToken");
    history.replace("/login");
  };

  return (
    <div className={styles["root"]}>

      <div className={styles["container"]}>
        <Sidebar />
        <div className={styles["wrapper"]}>
          <Header />
          <div className={styles["main-container"]}></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
