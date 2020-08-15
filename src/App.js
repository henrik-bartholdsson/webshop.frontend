import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/home";
import HardDrives from "./components/hardDrives";
import Product from "./components/pages/product";
import Header from "./components/header";
import SideMenuLeft from "./components/sideMenuLeft";
import "./Columns.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header id="LeftSide" />
        <div className="Columns">
          <SideMenuLeft />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/HardDrives" component={HardDrives}></Route>
            <Route
              path={"/product" + 1}
              exact
              render={() => <Product id={1} />}
            ></Route>
            <Route
              path={"/product" + 2}
              exact
              render={() => <Product id={2} />}
            ></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
