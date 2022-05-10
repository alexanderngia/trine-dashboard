import React from "react";
import styles from "./memberList.module.scss";
// import { useHistory } from "react-router-dom";
import { Layout } from "../layout/layout";
export interface MemberListProps {}

const MemberList: React.FC<MemberListProps> = (props) => {
  // const history = useHistory();

  // const logout = () => {
  //   localStorage.removeItem("accessToken");
  //   history.replace("/login");
  // };

  return (
    <Layout>
      <div className={styles["root"]}>MemberList</div>
    </Layout>
  );
};

export default MemberList;
