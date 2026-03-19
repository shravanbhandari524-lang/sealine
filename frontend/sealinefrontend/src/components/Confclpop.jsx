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

  const confirm = async () => {
    const payload = { name: advendor.name };
  };

  if (!confcl) return null;

  return (
    <div className={styles.popback} onClick={handleClick}>
      <div className={styles.maincont}>
        <div className={styles.popupbox}>
          confirm :<div>vendor id : {advendor.vendorid}</div>
          <div>vendor name : {advendor.name}</div>
          <button onClick={confirm}>save</button>
        </div>
      </div>
    </div>
  );
}
