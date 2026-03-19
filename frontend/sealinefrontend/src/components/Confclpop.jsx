import { useContext, useEffect } from "react";
import axios from "axios";

import styles from "./style/Adddem.module.css";
import { Popupcontext } from "../context/Popupcontext";
import { Userinputcontext } from "../context/Userinputcontext";

export default function Confclop() {
  const { advendor, setadvendor } = useContext(Userinputcontext);
  const { confcl, setconfcl } = useContext(Popupcontext);

  function handleClick() {
    setconfcl(false);
  }

  const confirm = () => {
    setadvendor((prev) => ({
      ...prev,
      name: "",
    }));
    handleClick();
  };
  const deletevendor = async () => {
    try {
      const payload = { id: advendor.vendorid };
      const result = await axios.post(
        "http://127.0.0.1:5000/api/vendors/deletevendor",
        payload,
      );
    } catch (err) {
      console.log({ err: err.message });
    }
    handleClick();
  };
  if (!confcl) return null;

  return (
    <div className={styles.popback}>
      <div className={styles.maincont}>
        <div className={styles.popupbox} onClick={(e) => e.stopPropagation()}>
          <button onClick={deletevendor}> no</button> confirm :
          <div>vendor id : {advendor.vendorid}</div>
          <div>vendor name : {advendor.name}</div>
          <button onClick={confirm}>save</button>
        </div>
      </div>
    </div>
  );
}
