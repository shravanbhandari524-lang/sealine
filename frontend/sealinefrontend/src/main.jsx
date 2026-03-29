import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import App from "./App.jsx";
import Userinputprovider from "./context/Userinputcontext.jsx";
import { BrowserRouter } from "react-router-dom";
import Popupcontextpr from "./context/Popupcontext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Popupcontextpr>
        <Userinputprovider>
          <App />
        </Userinputprovider>
      </Popupcontextpr>
    </BrowserRouter>
  </StrictMode>,
);
