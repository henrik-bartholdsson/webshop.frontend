import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/home";
import Product from "./components/pages/product";
import Header from "./components/pages/header/header";
import CategoriesFactory from "./components/categoriesFactory";
import "./configurations/apiConfig"
import Basket from "./components/pages/basket"
import MyOrders from './components/pages/orders/myOrders'
import OrderDetails from './components/pages/orders/orderDetails'

function App() {
  return (
    <Router>
      <div className="App">
        <Header id={666} />
        <div className="Columns">
          <CategoriesFactory />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route
              path={"/product/:id"}
              exact
              render={(routerProps) => {
                return <Product match={routerProps.match} />;
              }}
            ></Route>
            <Route path="/basket"
              exact
              render={() =>{
                return <Basket /> }
              }>
            </Route>
            <Route path={"/myorders"}
            exact render={() => {
              return <MyOrders /> }}>
            </Route>
            <Route path={"/myorders/:id"}
            exact render={(routerProps) => {
              return <OrderDetails match={routerProps.match} /> }}>
            </Route>
            <Route
              path={"/"}
              render={() => (
                <div style={{ margin: "1em" }}>404 - Page not found :(</div>
              )}
            ></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
