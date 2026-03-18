import Mainbody from "./Mainbody";
import Addem from "./Adddem";
import Addsup from "./Addsup";
import Delete from "./Delete";
import { Route, Routes } from "react-router-dom";
import styles from "./style/Adminpage.module.css";
import Addclient from "./Addclient";
export default function Adminpage() {
  return (
    <div className={styles.container}>
      <Mainbody />
      <Routes>
        <Route path="adddem" element={<Addem />} />
        <Route path="addsup" element={<Addsup />} />
        <Route path="delcl" element={<Delete />} />
        <Route path="addcl" element={<Addclient />} />
      </Routes>
    </div>
  );
}
