import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LineageContext from "./context/lineage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LineageContext.Provider
      value={{
        grandMa: "Patty",
        grandPa: "Jim",
      }}
    >
      <App />
    </LineageContext.Provider>
  </React.StrictMode>
);
