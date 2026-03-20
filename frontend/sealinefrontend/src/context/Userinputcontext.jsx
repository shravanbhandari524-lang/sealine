import { createContext, useEffect, useState } from "react";

export const Userinputcontext = createContext();

export default function Userinputprovider({ children }) {
  const [dvendor, setdvendor] = useState(
    JSON.parse(localStorage.getItem("dvendor")) || {
      vendorid: 0,
      shipname: "",
      imo: 0,
      date: "",
      vesselid: 0,
      workforcesize: 0,
    },
  );
  const [svendor, setsvendor] = useState(
    JSON.parse(localStorage.getItem("svendor")) || {
      vendorid: 0,
      shipname: "",
      imo: 0,
      date: "",
      vesselid: 0,
      services: "",
    },
  );
  const [devendor, setdevendor] = useState(
    JSON.parse(localStorage.getItem("devendor")) || {
      vendorid: 0,
      vesselid: 0,
      shipname: "",
      imo: 0,
    },
  );
  const [advendor, setadvendor] = useState(
    JSON.parse(localStorage.getItem("advendor")) || { vendorid: 0, name: "" },
  );
  useEffect(() => {
    localStorage.setItem("dvendor", JSON.stringify(dvendor));
  }, [dvendor]);
  useEffect(() => {
    localStorage.setItem("svendor", JSON.stringify(svendor));
  }, [svendor]);
  useEffect(() => {
    localStorage.setItem("devendor", JSON.stringify(devendor));
  }, [devendor]);
  useEffect(() => {
    localStorage.setItem("advendor", JSON.stringify(advendor));
  }, [advendor]);
  const value = {
    dvendor,
    setdvendor,
    svendor,
    setsvendor,
    devendor,
    setdevendor,
    advendor,
    setadvendor,
  };

  return (
    <Userinputcontext.Provider value={value}>
      {children}
    </Userinputcontext.Provider>
  );
}
