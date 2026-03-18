import styles from "./style/Adddem.module.css";
import { useContext } from "react";
import { Userinputcontext } from "../context/Userinputcontext.jsx";
export default function Adddem() {
  const { dvendor, setdvendor } = useContext(Userinputcontext);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setdvendor((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className={styles.mbody}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.cont1}>
          <div>vendor id : </div>
          <input
            name="vendorid"
            type="number"
            value={dvendor.vendorid}
            onChange={handleChange}
          />
        </div>
        <div className={styles.cont1}>
          <div>vesselid id : </div>
          <input
            name="vesselid"
            type="number"
            value={dvendor.vesselid}
            onChange={handleChange}
          />
        </div>
        <div className={styles.cont1}>
          <div>ship name : </div>
          <input
            name="shipname"
            type="text"
            value={dvendor.shipname}
            onChange={handleChange}
          />
        </div>
        <div className={styles.cont1}>
          <div>imo number : </div>
          <input
            name="imo"
            type="number"
            value={dvendor.imo}
            onChange={handleChange}
          />
        </div>

        <button>save</button>
      </div>
    </div>
  );
}
