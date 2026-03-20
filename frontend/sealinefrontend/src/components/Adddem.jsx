import styles from "./style/Adddem.module.css";
import { useContext } from "react";
import { Userinputcontext } from "../context/Userinputcontext.jsx";
import axios from "axios";
import Confdem from "./Confdem.jsx";
import { Popupcontext } from "../context/Popupcontext.jsx";
import aud from "../sound/f.mp3";

export default function Adddem() {
  const { dvendor, setdvendor } = useContext(Userinputcontext);
  const { setconfdem } = useContext(Popupcontext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setdvendor((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handledem = async () => {
    if (
      !dvendor.shipname ||
      !dvendor.shipname.trim() ||
      !dvendor.imo ||
      !dvendor.vendorid ||
      !dvendor.workforcesize
    ) {
      alert("fill all the fields!");
      return;
    }
    try {
      const payloadid = { id: dvendor.vendorid };
      const searhidres = await axios.post(
        "http://127.0.0.1:5000/api/listofall/searchid",
        payloadid,
      );
      if (!searhidres.data.found) {
        alert("vendorid not found ");
        return;
      }
      try {
        const payloadimo = { imo: dvendor.imo };
        const searchimores = await axios.post(
          "http://127.0.0.1:5000/api/listofall/searchimo",
          payloadimo,
        );
        console.log("hi : ", searchimores.data.found);
        if (searchimores.data.found) {
          alert("imo already exist");
          return;
        }
        try {
          const payload = {
            shipname: dvendor.shipname,
            imo: dvendor.imo,
            vendorid: dvendor.vendorid,
            workforcesize: dvendor.workforcesize,
          };
          const result = await axios.post(
            "http://127.0.0.1:5000/api/listofall/insertlistofall",
            payload,
          );
          setdvendor((prev) => ({
            ...prev,
            vesselid: result.data[0].vesselid,
          }));
          setconfdem(true);
        } catch (err) {
          console.log({ err: err.message });
        }
      } catch (err) {
        console.log({ err: err.message });
      }
    } catch (err) {
      console.log({ err: err.message });
    }
  };
  const deleteall = async () => {
    try {
      const result = await axios.get(
        "http://127.0.0.1:5000/api/listofall/deleteall",
      );
      const audio = new Audio(aud);
      audio.play();
    } catch (err) {
      console.log({ err: err.message });
    }
  };
  return (
    <div className={styles.mbody}>
      <Confdem />
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.cont1}>
          <div>Vendorid : </div>
          <input
            name="vendorid"
            type="number"
            value={dvendor.vendorid}
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
        <div className={styles.cont1}>
          <div>workforcesize : </div>
          <input
            name="workforcesize"
            type="number"
            value={dvendor.workforcesize}
            onChange={handleChange}
          />
        </div>

        <button onClick={handledem}>save</button>
        <div> </div>
        <button onClick={deleteall}>delete</button>
      </div>
    </div>
  );
}
