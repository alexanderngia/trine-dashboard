import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./memberList.module.scss";
import { Layout } from "../layout/layout";
import Table from "../../ui/table/table";
import { listName } from "./listName";

export interface MemberListProps {}

const MemberList: React.FC<MemberListProps> = (props) => {
  const [idUser, setIdUser] = useState(`ALL`);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/user?id=${idUser}`
        );
        const resData = res.data.users;

        setData(resData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(listName);
  return (
    <Layout>
      <div className={styles["root"]}>
        <h1>DANH SÁCH THÀNH VIÊN</h1>
        {data.length > 0 && (
          <ul>
            {React.Children.toArray(
              data.map((listItems: any) => {
                return (
                  <li className={styles["card"]}>
                    <a href="/#">
                      <ul>
                        <li>{listItems.fullNameUser}</li>
                        <li>
                          {listItems.genderUser === 1 ? "Male" : "Female"}
                        </li>
                        <li>{listItems.phoneUser}</li>
                        <li>{listItems.emailUser}</li>
                      </ul>
                    </a>
                  </li>
                );
              })
            )}
          </ul>
        )}
      </div>
    </Layout>
  );
};

export default MemberList;
