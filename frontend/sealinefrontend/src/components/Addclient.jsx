import styles from "./style/Adddem.module.css";
import { useContext } from "react";
import { Userinputcontext } from "../context/Userinputcontext.jsx";
import { Popupcontext } from "../context/Popupcontext";
import Confclop from "./Confclpop.jsx";
import axios from "axios";
import aud from "../sound/f.mp3";
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
  const handleaddingcl = async (e) => {
    if (!advendor.name.trim()) {
      alert("Name is required ❌");
      return; // stop execution
    }
    setconfcl(true);

    try {
      const payload = { name: advendor.name };
      const result = await axios.post(
        "http://127.0.0.1:5000/api/vendors/insertvendor",
        payload,
      );
      setadvendor((prev) => ({
        ...prev,
        vendorid: result.data[0].vendorid,
      }));
      console.log(result.data[0].vendorid);
    } catch (err) {
      console.log({ err: err.message });
    }
  };
  const deleteallvendor = async () => {
    const audio = new Audio(aud);
    audio.play();
    try {
      const result = await axios.get(
        "http://127.0.0.1:5000/api/vendors/deleteall",
      );
      console.log(result.data.success);
    } catch (err) {
      console.log({ err: err.message });
    }
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
        <div style={{ height: "10px" }}></div>
        <button onClick={deleteallvendor} className={styles.btn}>
          deleteall
        </button>
      </div>
    </div>
  );
}
