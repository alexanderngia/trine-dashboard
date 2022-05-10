import React from "react";
import styles from "./orderList.module.scss";
// import { useHistory } from "react-router-dom";
import { Layout } from "../layout/layout";
export interface OrderListProps {}

const OrderList: React.FC<OrderListProps> = (props) => {
  // const history = useHistory();

  // const logout = () => {
  //   localStorage.removeItem("accessToken");
  //   history.replace("/login");
  // };

  return (
    <Layout>
      <div className={styles["root"]}>OrderList</div>
    </Layout>
  );
};

export default OrderList;
