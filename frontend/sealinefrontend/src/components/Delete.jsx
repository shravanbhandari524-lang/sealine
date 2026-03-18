import styles from "./style/Adddem.module.css";
import { useContext } from "react";
import { Userinputcontext } from "../context/Userinputcontext.jsx";
export default function Addsup() {
  const { devendor, setdevendor } = useContext(Userinputcontext);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setdevendor((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={styles.mbody}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.cont1}>
          <div>vendorssss id : </div>
          <input
            name="vendorid"
            type="number"
            value={devendor.vendorid}
            onChange={handleChange}
          />
        </div>
        <div className={styles.cont1}>
          <div>vesselid id : </div>
          <input
            name="vesselid"
            type="number"
            value={devendor.vesselid}
            onChange={handleChange}
          />
        </div>
        <div className={styles.cont1}>
          <div>ship name : </div>
          <input
            name="shipname"
            type="text"
            value={devendor.shipname}
            onChange={handleChange}
          />
        </div>
        <div className={styles.cont1}>
          <div>imo number : </div>
          <input
            name="imo"
            type="number"
            value={devendor.imo}
            onChange={handleChange}
          />
        </div>

        <button>save</button>
      </div>
    </div>
  );
}
