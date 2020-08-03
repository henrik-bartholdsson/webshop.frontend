import React from "react";
import "./App.css";
import Product from "./components/product";
import Header from "./components/header";
import SideMenuLeft from "./components/sideMenuLeft";
import "./Columns.css";

function App() {
  return (
    <div className="App">
      <Header id="LeftSide" />
      <div className="Columns">
        <SideMenuLeft />
        <Product />
      </div>
    </div>
  );
}

export default App;
