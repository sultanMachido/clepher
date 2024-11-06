import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Pages from "./routes/index.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastContainer />
    <Pages />
  </StrictMode>
);
