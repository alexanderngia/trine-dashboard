import React from "react";
import styles from "./form.module.scss";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = (props) => {
  return <div className={styles["root"]}>Header</div>;
};

export default Header;
