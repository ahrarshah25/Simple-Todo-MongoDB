import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import DashboardUserContext from "./context/DashboardUserContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <DashboardUserContext>
      <App />
    </DashboardUserContext>
  </BrowserRouter>,
);
