import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import GetMenu from "./components/pages/testMenu";
import Home from "./components/pages/home";
import HardDrives from "./components/hardDrives";
import Product from "./components/pages/product";
import Header from "./components/header";
import SideMenuLeft from "./components/sideMenuLeft";
import CategoriesFactory from "./components/categoriesFactory";
import "./Columns.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header id={666} />
        <div className="Columns">
          <SideMenuLeft />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/product0" exact component={Home}></Route>
            <Route
              path={"/product/:id"}
              exact
              render={(routerProps) => {
                return <Product match={routerProps.match} />;
              }}
            ></Route>
            <Route
              path={"/test"}
              exact
              render={() => <GetMenu info={"123"} />}
            ></Route>
            <Route
              path={"/"}
              render={() => <div>404 - Page not found.</div>}
            ></Route>
          </Switch>
          <CategoriesFactory />
        </div>
      </div>
    </Router>
  );
}

export default App;
