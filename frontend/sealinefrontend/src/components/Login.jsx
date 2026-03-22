import styles from "../App.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username1, setusername] = useState("");
  const [password1, setpassword] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setusername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setpassword(e.target.value);
  };
  const sub = async () => {
    const payload = { username: username1, password: password1 };
    try {
      const result = await axios.post(
        "http://127.0.0.1:5000/ver/login",
        payload,
      );
      if (result.data.success) {
        if (result.data.type === "admin") navigate("/admin");
      }
      if (!result.data.success) alert(result.data.message);
    } catch (err) {
      console.log({ err: err.message });
    }
  };
  return (
    <div>
      <div>enter username : </div>
      <input
        name="username"
        type="text"
        value={username1}
        onChange={handleChange}
      />

      <div>enter password : </div>
      <input
        name="password"
        type="password"
        value={password1}
        onChange={handlePasswordChange}
      />
      <button onClick={sub}>submit</button>
      <button>create account</button>
    </div>
  );
}

export default Login;
