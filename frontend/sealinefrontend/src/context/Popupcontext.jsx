import { Children } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useContext, useState } from "react";
export const Popupcontext = createContext();

export default function Popupcontextpr({ children }) {
  const [confcl, setconfcl] = useState(
    JSON.parse(localStorage.getItem("confcl")) || false,
  );
  const [confdem, setconfdem] = useState(
    JSON.parse(localStorage.getItem("confdem")) || false,
  );
  useEffect(() => {
    localStorage.setItem("confcl", confcl);
  }, [confcl]);
  useEffect(() => {
    localStorage.setItem("confdem", JSON.stringify(confdem));
  }, [confdem]);
  const value = {
    confcl,
    setconfcl,
    confdem,
    setconfdem,
  };
  return (
    <Popupcontext.Provider value={value}>{children}</Popupcontext.Provider>
  );
}
