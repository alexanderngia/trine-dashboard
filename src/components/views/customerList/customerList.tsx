import React from "react";
import styles from "./customerList.module.scss";
// import { useHistory } from "react-router-dom";
import { Layout } from "../layout/layout";
export interface CustomerListProps {}

const CustomerList: React.FC<CustomerListProps> = (props) => {
  // const history = useHistory();

  // const logout = () => {
  //   localStorage.removeItem("accessToken");
  //   history.replace("/login");
  // };

  return (
    <Layout>
      <div className={styles["root"]}>CustomerList</div>
    </Layout>
  );
};

export default CustomerList;
