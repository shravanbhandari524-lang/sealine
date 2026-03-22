import { Routes, Route } from "react-router-dom";
import Admin from "./components/Admin.jsx";
import Login from "./components/Login.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin/*" element={<Admin />} />
    </Routes>
  );
}

export default App;
