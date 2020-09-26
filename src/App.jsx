import React from "react";
import "./styles.css";
import BelajarUseMemo from "./UseMemo";

export default function App() {
  return (
    <div className="App mt-3">
      {/* <h1>Belajar React</h1> */}
      {/* <h2>Start editing to see some magic happen!</h2> */}
      <div>
        <BelajarUseMemo wilayah="Jabar" />
      </div>
    </div>
  );
}
