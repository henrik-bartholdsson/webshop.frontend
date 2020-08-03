import React from "react";
import "./header.css";
import { useSelector, useDispatch } from "react-redux";
import { isLoged, isNotLoged } from "../store/actions";

function Header() {
  const dispatch = useDispatch();
  const loged = useSelector((state) => state.isLoged);

  return (
    <div className="Header">
      Header component, here will be some text and logo.
      <div style={{ float: "right", marginLeft: "1em" }}>
        {loged ? <div>Welcome Mr.X</div> : <div>Not loged in</div>}
      </div>
      <button style={{ float: "right" }} onClick={() => dispatch(isLoged())}>
        {loged ? <span>Logout</span> : <span>Login</span>}
      </button>
    </div>
  );
}

export default Header;
