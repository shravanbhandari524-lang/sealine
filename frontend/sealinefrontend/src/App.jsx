import styles from "./App.module.css";
import { Header } from "./components/ui/header-1";
import Sidebar from "./components/Sidebar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home.jsx";
import Adminpage from "./components/Adminpage.jsx";
import Login from "./components/Login.jsx";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login" || location.pathname === "/Login";

  if (isLoginPage) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    );
  }

  return (
    <div className={styles.root}>
      {/* Premium Shadcn Header */}
      <Header />

      {/* Floating Fluid Menu Sidebar */}
      <Sidebar />

      {/* Main scrollable area */}
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Adminpage/*" element={<Adminpage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
