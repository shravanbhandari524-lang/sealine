import styles from "./App.module.css";
import Header from "./components/Header";

import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import Adminpage from "./components/Adminpage.jsx";

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
            to="/"
            style={{ display: "block", color: "white", textDecoration: "none" }}
          >
            home
          </Link>
          <Link
            to="/Adminpage"
            style={{ display: "block", color: "white", textDecoration: "none" }}
          >
            admin page
          </Link>
        </nav>
      </div>
      <div className={styles.mainbody}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Adminpage/*" element={<Adminpage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
