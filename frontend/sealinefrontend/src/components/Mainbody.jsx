import styles from "./style/Mainbody.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Mainbody() {
  const navigate = useNavigate();
  const handleclick = (e) => {
    navigate("/Adminpage/" + e.target.name);
  };
  return (
    <div className={styles.container}>
      <div></div>

      <div className={styles.hcont}>
        <button
          name="adddem"
          onClick={handleclick}
          className={styles.headeritem}
        >
          add dem
        </button>
      </div>
      <div className={styles.hcont}>
        <button
          name="addsup"
          className={styles.headeritem}
          onClick={handleclick}
        >
          Add supply client
        </button>
      </div>

      <div className={styles.hcont}>
        <button
          name="delcl"
          className={styles.headeritem}
          onClick={handleclick}
        >
          Delte client
        </button>
      </div>

      <div className={styles.hcont}>
        <button
          name="addcl"
          className={styles.headeritem}
          onClick={handleclick}
        >
          Add client :
        </button>
      </div>

      <div></div>
    </div>
  );
}
