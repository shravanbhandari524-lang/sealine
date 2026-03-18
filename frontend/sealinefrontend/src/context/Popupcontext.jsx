import { Children } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useContext, useState } from "react";
export const Popupcontext = createContext();

export default function Popupcontextpr({ children }) {
  const [confcl, setconfcl] = useState(
    JSON.parse(localStorage.getItem("confcl")) || false,
  );
  useEffect(() => {
    localStorage.setItem("confcl", confcl);
  }, [confcl]);
  const value = {
    confcl,
    setconfcl,
  };
  return (
    <Popupcontext.Provider value={value}>{children}</Popupcontext.Provider>
  );
}
