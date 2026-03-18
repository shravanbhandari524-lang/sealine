import styles from "./style/Adddem.module.css";
import { useContext } from "react";
import { Userinputcontext } from "../context/Userinputcontext.jsx";
export default function Addsup() {
  const { svendor, setsvendor } = useContext(Userinputcontext);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setsvendor((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleClick = () => {
    console.log("Demand client created.");
  };
  return (
    <div className={styles.mbody}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.cont1}>
          <div>vendorss id : </div>
          <input
            name="vendorid"
            type="number"
            value={svendor.vendorid}
            onChange={handleChange}
          />
        </div>
        <div className={styles.cont1}>
          <div>vesselid id : </div>
          <input
            name="vesselid"
            type="number"
            value={svendor.vesselid}
            onChange={handleChange}
          />
        </div>
        <div className={styles.cont1}>
          <div>ship name : </div>
          <input
            name="shipname"
            type="text"
            value={svendor.shipname}
            onChange={handleChange}
          />
        </div>
        <div className={styles.cont1}>
          <div>imo number : </div>
          <input
            name="imo"
            type="number"
            value={svendor.imo}
            onChange={handleChange}
          />
        </div>

        <button onClick={handleClick}>save</button>
      </div>
    </div>
  );
}
