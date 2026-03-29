import styles from "./style/Admin.module.css";
import Header from "./Header";

import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home.jsx";
import Adminpage from "./Adminpage.jsx";
function App() {
  return (
    <div className={styles.container}>
      {" "}
      <div className={styles.header}>
        {" "}
        <Header />{" "}
      </div>
      <div className={styles.leftsidebar}>
        <nav>
          <Link
            to="home"
            style={{ display: "block", color: "white", textDecoration: "none" }}
          >
            home
          </Link>
          <Link
            to="Adminpage"
            style={{ display: "block", color: "white", textDecoration: "none" }}
          >
            admin page
          </Link>
        </nav>
      </div>
      <div className={styles.mainbody}>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="Adminpage/*" element={<Adminpage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
