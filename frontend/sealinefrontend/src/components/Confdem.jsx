import styles from "./style/Confdem.module.css";
import { useContext } from "react";
import { Popupcontext } from "../context/Popupcontext";
import { Userinputcontext } from "../context/Userinputcontext";
export default function Confdem() {
  const { confdem, setconfdem } = useContext(Popupcontext);
  const { dvendor } = useContext(Userinputcontext);
  const closepop = () => {
    setconfdem(false);
  };
  const deletelistofall = async () => {};
  if (!confdem) return null;
  return (
    <div className={styles.popback}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div>vendorid : </div>
        <div>{dvendor.vendorid}</div>
        <div>vesselid : </div>
        <div>{dvendor.vesselid}</div>
        <div>imo : </div>
        <div>{dvendor.imo}</div>
        <div>workforcesize : </div>
        <div>{dvendor.workforcesize}</div>
        <div>ship name : </div>
        <div>{dvendor.shipname}</div>
        <button onClick={closepop}>save</button>
        <button onClick={deletelistofall}>delete</button>
      </div>
    </div>
  );
}
