import React from "react";
import "./App.css";
import Item from "./components/Item";
import Header from "./components/header";
import SideMenuLeft from "./components/sideMenuLeft";
import "./Columns.css";

function App() {
  return (
    <div className="App">
      <Header id="LeftSide" />
      <div className="Columns">
        <SideMenuLeft />
        <Item />
      </div>
    </div>
  );
}

export default App;
