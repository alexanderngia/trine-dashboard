import React from "react";
import styles from "./layout.module.scss";
import Sidebar from "../../sidebar/sidebar";
import Header from "../../header/header";
export interface LayoutProps {
  //   children: any;
}
export const Layout: React.FC<LayoutProps> = ({ children }: any) => {
  return (
    <div className={styles["root"]}>
      <div className={styles["container"]}>
        <Sidebar />
        <div className={styles["wrapper"]}>
          <Header />
          <div className={styles["main-container"]}>{children}</div>
        </div>
      </div>
    </div>
  );
};
