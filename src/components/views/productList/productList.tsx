import React from "react";
import styles from "./productList.module.scss";
// import { useHistory } from "react-router-dom";
import { Layout } from "../layout/layout";
export interface ProductListProps {}

const ProductList: React.FC<ProductListProps> = (props) => {
  // const history = useHistory();

  // const logout = () => {
  //   localStorage.removeItem("accessToken");
  //   history.replace("/login");
  // };

  return (
    <Layout>
      <div className={styles["root"]}>ProductList</div>
    </Layout>
  );
};

export default ProductList;
