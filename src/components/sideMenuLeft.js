import React from "react";
import "./SideMenuLeft.css";
import { Link, withRouter } from "react-router-dom";
import MenuItem from "./menuItem";
import { useSelector, useDispatch } from "react-redux";

function SideMenuLeft() {
  const navStyle = {
    color: "withe",
  };

  const dispatch = useDispatch();

  return (
    <div className="SideMenuLeft">
      <div>Categories</div>
      <div className="Categories">
        <nav>
          <ul>
            <Link style={navStyle} to="/">
              <li>Home</li>
            </Link>
            <Link style={navStyle} to="harddrives">
              <li>Harddrives</li>
            </Link>
            <Link style={navStyle} to="product1">
              <li>Product1</li>
            </Link>
            <Link style={navStyle} to="product2">
              <li>Product2</li>
            </Link>
            <Link style={navStyle} to="Test">
              <li>Test</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SideMenuLeft;
