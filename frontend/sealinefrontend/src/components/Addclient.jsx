import styles from "./style/Adddem.module.css";
import { useContext } from "react";
import { Userinputcontext } from "../context/Userinputcontext.jsx";
import { Popupcontext } from "../context/Popupcontext";
import Confclop from "./Confclpop.jsx";
export default function Adddem() {
  const { advendor, setadvendor } = useContext(Userinputcontext);
  const { confcl, setconfcl } = useContext(Popupcontext);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setadvendor((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleaddingcl = async () => {
    setconfcl(true);
  };
  return (
    <div className={styles.mbody}>
      <Confclop />
      <div className={styles.container}>
        <div className={styles.cont1}>
          <div>vendor name : </div>
          <input
            name="name"
            type="text"
            value={advendor.name}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleaddingcl} className={styles.btn}>
          save
        </button>
      </div>
    </div>
  );
}
